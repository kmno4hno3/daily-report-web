/**
 * 共通バリデーションユーティリティ
 * すべてのフォームで使用可能な汎用的なバリデーションロジック
 */

/**
 * メールアドレスの形式を検証（RFC5322準拠）
 */
export const emailRegex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

/**
 * 日本語、英数字、一部記号のみを許可するパターン
 * 絵文字や特殊文字を除外
 */
export const usernameRegex = /^[a-zA-Z0-9ぁ-んァ-ヶー一-龠々\-_\s]+$/

/**
 * 絵文字を検出するパターン
 */
export const emojiRegex =
	/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu

/**
 * 特殊文字を検出するパターン
 */
export const specialCharRegex = /[<>'"&\\]/g

/**
 * パスワードの文字種類をチェック
 */
export interface PasswordCharacterTypes {
	hasUpperCase: boolean
	hasLowerCase: boolean
	hasNumber: boolean
	hasSymbol: boolean
	characterTypesCount: number
}

export function checkPasswordCharacterTypes(
	password: string,
): PasswordCharacterTypes {
	const hasUpperCase = /[A-Z]/.test(password)
	const hasLowerCase = /[a-z]/.test(password)
	const hasNumber = /[0-9]/.test(password)
	const hasSymbol = /[^A-Za-z0-9]/.test(password)

	const characterTypesCount = [
		hasUpperCase,
		hasLowerCase,
		hasNumber,
		hasSymbol,
	].filter(Boolean).length

	return {
		hasUpperCase,
		hasLowerCase,
		hasNumber,
		hasSymbol,
		characterTypesCount,
	}
}

/**
 * 一般的な弱いパスワードのリスト
 */
export const commonWeakPasswords = [
	"password",
	"123456",
	"123456789",
	"12345678",
	"12345",
	"1234567",
	"1234567890",
	"qwerty",
	"abc123",
	"111111",
	"123123",
	"admin",
	"letmein",
	"welcome",
	"monkey",
	"dragon",
	"password123",
	"Password1",
	"Password123",
]

/**
 * パスワードが一般的な弱いパスワードかチェック
 */
export function isCommonWeakPassword(password: string): boolean {
	const lowerPassword = password.toLowerCase()
	return commonWeakPasswords.some((weak) => lowerPassword.includes(weak))
}

/**
 * 文字列がユーザー情報に類似しているかチェック
 */
export function isSimilarToUserInfo(
	password: string,
	userInfo: { name?: string | null; email?: string },
): boolean {
	const lowerPassword = password.toLowerCase()

	// 名前との類似性チェック
	if (userInfo.name) {
		const nameParts = userInfo.name.toLowerCase().split(/\s+/)
		for (const part of nameParts) {
			if (part.length > 2 && lowerPassword.includes(part)) {
				return true
			}
		}
	}

	// メールアドレスのユーザー名部分との類似性チェック
	const emailUsername = userInfo.email.split("@")[0].toLowerCase()
	if (emailUsername.length > 2 && lowerPassword.includes(emailUsername)) {
		return true
	}

	return false
}

/**
 * 文字列に連続する文字が含まれているかチェック
 */
export function hasSequentialCharacters(str: string, maxSequence = 3): boolean {
	for (let i = 0; i < str.length - maxSequence + 1; i++) {
		let isSequential = true
		for (let j = 0; j < maxSequence - 1; j++) {
			const currentChar = str.charCodeAt(i + j)
			const nextChar = str.charCodeAt(i + j + 1)
			if (nextChar - currentChar !== 1) {
				isSequential = false
				break
			}
		}
		if (isSequential) return true
	}
	return false
}

/**
 * 文字列に繰り返し文字が含まれているかチェック
 */
export function hasRepeatedCharacters(str: string, maxRepeat = 3): boolean {
	const regex = new RegExp(`(.)\\1{${maxRepeat - 1},}`)
	return regex.test(str)
}

/**
 * デバウンス用のユーティリティタイプ
 */
export interface DebouncedFunction<T extends (...args: any[]) => any> {
	(...args: Parameters<T>): void
	cancel: () => void
}

/**
 * 非同期バリデーション用のデバウンス関数
 */
export function createDebouncedValidator<T extends (...args: any[]) => any>(
	fn: T,
	delay: number,
): DebouncedFunction<T> {
	let timeoutId: NodeJS.Timeout | null = null

	const debounced = (...args: Parameters<T>) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			fn(...args)
		}, delay)
	}

	debounced.cancel = () => {
		if (timeoutId) {
			clearTimeout(timeoutId)
			timeoutId = null
		}
	}

	return debounced
}

/**
 * バリデーションエラーメッセージのフォーマット
 */
export interface ValidationError {
	field: string
	message: string
	type?: "error" | "warning" | "info"
}

/**
 * バリデーション結果
 */
export interface ValidationResult {
	isValid: boolean
	errors: ValidationError[]
	warnings?: ValidationError[]
}

/**
 * フィールドレベルのバリデーション状態
 */
export interface FieldValidationState {
	isValidating: boolean
	isValid: boolean
	error?: string
	warning?: string
	touched: boolean
	dirty: boolean
}

/**
 * バリデーションタイミングの設定
 */
export interface ValidationTiming {
	onBlur?: boolean
	onChange?: boolean
	onSubmit?: boolean
	debounceMs?: number
}

/**
 * デフォルトのバリデーションタイミング設定
 */
export const defaultValidationTiming: ValidationTiming = {
	onBlur: true,
	onChange: false,
	onSubmit: true,
	debounceMs: 500,
}
