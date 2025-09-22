/**
 * カスタムバリデーター
 * 非同期バリデーションとカスタムルールの実装
 */

import { emailMessages } from "@/src/shared/lib/validation/messages"
import { useDebouncedCallback } from "use-debounce"

/**
 * メールアドレス重複チェックの結果
 */
export interface EmailCheckResult {
	available: boolean
	message?: string
}

/**
 * バリデーションキャッシュ
 */
class ValidationCache {
	private cache = new Map<string, { result: any; timestamp: number }>()
	private readonly ttl = 5 * 60 * 1000 // 5分

	get(key: string): any | null {
		const cached = this.cache.get(key)
		if (!cached) return null

		const now = Date.now()
		if (now - cached.timestamp > this.ttl) {
			this.cache.delete(key)
			return null
		}

		return cached.result
	}

	set(key: string, result: any): void {
		this.cache.set(key, {
			result,
			timestamp: Date.now(),
		})
	}

	clear(): void {
		this.cache.clear()
	}
}

// バリデーションキャッシュインスタンス
const validationCache = new ValidationCache()

/**
 * メールアドレスの重複チェック（非同期）
 */
export async function checkEmailAvailability(
	email: string,
	currentUserEmail?: string,
): Promise<EmailCheckResult> {
	// 現在のユーザーのメールアドレスと同じ場合はスキップ
	if (currentUserEmail && email === currentUserEmail) {
		return { available: true }
	}

	// キャッシュチェック
	const cacheKey = `email:${email}`
	const cached = validationCache.get(cacheKey)
	if (cached !== null) {
		return cached
	}

	try {
		const response = await fetch("/api/validation/email-check", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		})

		if (!response.ok) {
			// エラーレスポンスの処理
			if (response.status === 409) {
				const result: EmailCheckResult = {
					available: false,
					message: emailMessages.alreadyUsed,
				}
				validationCache.set(cacheKey, result)
				return result
			}
			throw new Error("Email check failed")
		}

		const data = await response.json()
		const result: EmailCheckResult = {
			available: data.available,
			message: data.available ? undefined : emailMessages.alreadyUsed,
		}

		// 結果をキャッシュ
		validationCache.set(cacheKey, result)
		return result
	} catch (error) {
		console.error("Email availability check failed:", error)
		// エラー時は利用可能として扱う（サーバー側で最終チェックされるため）
		return { available: true }
	}
}

/**
 * デバウンス付きメール重複チェックフック
 */
export function useDebouncedEmailCheck(delay = 500): {
	checkEmail: (email: string, currentUserEmail?: string) => void
	cancel: () => void
} {
	const debouncedCheck = useDebouncedCallback(
		async (
			email: string,
			currentUserEmail: string | undefined,
			callback: (result: EmailCheckResult) => void,
		) => {
			const result = await checkEmailAvailability(email, currentUserEmail)
			callback(result)
		},
		delay,
	)

	return {
		checkEmail: (email: string, currentUserEmail?: string) => {
			return (callback: (result: EmailCheckResult) => void) => {
				debouncedCheck(email, currentUserEmail, callback)
			}
		},
		cancel: debouncedCheck.cancel,
	}
}

/**
 * ユーザー名の形式バリデーション
 */
export function validateUsernameFormat(username: string): {
	isValid: boolean
	errors: string[]
} {
	const errors: string[] = []

	// 空白チェック
	if (!username.trim()) {
		errors.push("ユーザー名を入力してください")
		return { isValid: false, errors }
	}

	// 先頭・末尾のスペースチェック
	if (username !== username.trim()) {
		errors.push("ユーザー名の先頭と末尾にスペースは使用できません")
	}

	// 連続スペースチェック
	if (/\s{2,}/.test(username)) {
		errors.push("連続したスペースは使用できません")
	}

	// 特殊な制御文字チェック
	if (/[\x00-\x1F\x7F]/.test(username)) {
		errors.push("制御文字は使用できません")
	}

	return {
		isValid: errors.length === 0,
		errors,
	}
}

/**
 * パスワードの辞書攻撃耐性チェック
 */
export function checkPasswordDictionaryResistance(password: string): {
	isResistant: boolean
	vulnerabilities: string[]
} {
	const vulnerabilities: string[] = []
	const lowerPassword = password.toLowerCase()

	// 一般的な単語パターンチェック
	const commonPatterns = [
		/^(password|admin|user|login|welcome)/i,
		/(123|abc|qwerty|asdf)/i,
		/^(spring|summer|autumn|winter|fall)/i,
		/^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
		/(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i,
	]

	for (const pattern of commonPatterns) {
		if (pattern.test(lowerPassword)) {
			vulnerabilities.push("一般的な単語やパターンが含まれています")
			break
		}
	}

	// 年号パターンチェック（1900-2099）
	if (/(?:19|20)\d{2}/.test(password)) {
		vulnerabilities.push("年号が含まれています")
	}

	// 日付パターンチェック
	if (/\d{1,2}[\/\-\.]\d{1,2}/.test(password)) {
		vulnerabilities.push("日付のようなパターンが含まれています")
	}

	// キーボードパターンチェック
	const keyboardPatterns = ["qwerty", "asdfgh", "zxcvbn", "qazwsx", "1qaz2wsx"]
	for (const pattern of keyboardPatterns) {
		if (lowerPassword.includes(pattern)) {
			vulnerabilities.push("キーボードの配列パターンが含まれています")
			break
		}
	}

	return {
		isResistant: vulnerabilities.length === 0,
		vulnerabilities,
	}
}

/**
 * カスタムバリデーションルール定義
 */
export interface CustomValidationRule<T> {
	name: string
	validate: (value: T, context?: any) => boolean | Promise<boolean>
	message: string | ((value: T, context?: any) => string)
}

/**
 * カスタムバリデーションルールセット
 */
export class ValidationRuleSet<T> {
	private rules: CustomValidationRule<T>[] = []

	addRule(rule: CustomValidationRule<T>): this {
		this.rules.push(rule)
		return this
	}

	async validate(
		value: T,
		context?: any,
	): Promise<{ isValid: boolean; errors: string[] }> {
		const errors: string[] = []

		for (const rule of this.rules) {
			try {
				const isValid = await Promise.resolve(rule.validate(value, context))
				if (!isValid) {
					const message =
						typeof rule.message === "function"
							? rule.message(value, context)
							: rule.message
					errors.push(message)
				}
			} catch (error) {
				console.error(`Validation rule "${rule.name}" failed:`, error)
				errors.push("バリデーションエラーが発生しました")
			}
		}

		return {
			isValid: errors.length === 0,
			errors,
		}
	}
}

/**
 * プロフィール画像のカスタムバリデーター
 */
export const imageValidationRules = new ValidationRuleSet<File>()
	.addRule({
		name: "fileSize",
		validate: (file) => file.size <= 5 * 1024 * 1024,
		message: "画像ファイルは5MB以下にしてください",
	})
	.addRule({
		name: "fileType",
		validate: (file) => {
			const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
			return validTypes.includes(file.type)
		},
		message: "対応形式：JPEG、PNG、GIF、WebP",
	})
	.addRule({
		name: "imageDimensions",
		validate: async (file) => {
			return new Promise((resolve) => {
				const img = new Image()
				const url = URL.createObjectURL(file)

				img.onload = () => {
					URL.revokeObjectURL(url)
					// 最小サイズチェック（100x100）
					resolve(img.width >= 100 && img.height >= 100)
				}

				img.onerror = () => {
					URL.revokeObjectURL(url)
					resolve(false)
				}

				img.src = url
			})
		},
		message: "画像は100x100ピクセル以上にしてください",
	})

/**
 * フォーム全体のバリデーター
 */
export interface FormValidator<T> {
	validate: (data: T) => Promise<{
		isValid: boolean
		errors: Record<keyof T, string[]>
	}>
}

/**
 * プロフィールフォームのバリデーター
 */
export class ProfileFormValidator
	implements FormValidator<{ name: string; email: string }>
{
	constructor(private currentUserEmail?: string) {}

	async validate(data: { name: string; email: string }): Promise<{
		isValid: boolean
		errors: Record<"name" | "email", string[]>
	}> {
		const errors: Record<"name" | "email", string[]> = {
			name: [],
			email: [],
		}

		// ユーザー名のバリデーション
		const usernameValidation = validateUsernameFormat(data.name)
		if (!usernameValidation.isValid) {
			errors.name = usernameValidation.errors
		}

		// メールアドレスのバリデーション
		if (data.email !== this.currentUserEmail) {
			const emailCheck = await checkEmailAvailability(
				data.email,
				this.currentUserEmail,
			)
			if (!emailCheck.available && emailCheck.message) {
				errors.email.push(emailCheck.message)
			}
		}

		return {
			isValid: errors.name.length === 0 && errors.email.length === 0,
			errors,
		}
	}
}

/**
 * バリデーションキャッシュのクリア
 */
export function clearValidationCache(): void {
	validationCache.clear()
}
