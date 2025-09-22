/**
 * 拡張バリデーションスキーマ
 * プロフィール関連フォームの包括的なバリデーションルール
 */

import {
	checkPasswordCharacterTypes,
	emailRegex,
	emojiRegex,
	hasRepeatedCharacters,
	hasSequentialCharacters,
	isCommonWeakPassword,
	isSimilarToUserInfo,
	specialCharRegex,
	usernameRegex,
} from "@/src/shared/lib/validation/common"
import {
	emailMessages,
	passwordMessages,
	usernameMessages,
} from "@/src/shared/lib/validation/messages"
import { z } from "zod"

/**
 * ユーザー名の詳細バリデーションスキーマ
 */
export const extendedUsernameSchema = z
	.string()
	.min(1, usernameMessages.required)
	.min(1, usernameMessages.minLength(1))
	.max(50, usernameMessages.maxLength(50))
	.refine((val) => !emojiRegex.test(val), {
		message: usernameMessages.containsEmoji,
	})
	.refine((val) => !specialCharRegex.test(val), {
		message: usernameMessages.containsSpecialChars,
	})
	.refine((val) => usernameRegex.test(val), {
		message: usernameMessages.invalidCharacters,
	})

/**
 * メールアドレスの詳細バリデーションスキーマ
 */
export const extendedEmailSchema = z
	.string()
	.min(1, emailMessages.required)
	.max(255, emailMessages.maxLength(255))
	.refine((val) => emailRegex.test(val), {
		message: emailMessages.invalid,
	})

/**
 * パスワードの複雑性チェック付きスキーマ
 */
export const createPasswordSchema = (userInfo?: {
	name?: string | null
	email?: string
}) => {
	return z
		.string()
		.min(8, passwordMessages.minLength(8))
		.max(128, passwordMessages.maxLength(128))
		.refine(
			(val) => {
				const types = checkPasswordCharacterTypes(val)
				return types.characterTypesCount >= 3
			},
			passwordMessages.complexity.needMoreTypes(0, 3),
		)
		.refine((val) => !isCommonWeakPassword(val), {
			message: passwordMessages.commonPassword,
		})
		.refine(
			(val) => {
				if (!userInfo) return true
				return !isSimilarToUserInfo(val, userInfo)
			},
			{
				message: passwordMessages.similarToUserInfo,
			},
		)
		.refine((val) => !hasSequentialCharacters(val, 4), {
			message: passwordMessages.sequential,
		})
		.refine((val) => !hasRepeatedCharacters(val, 4), {
			message: passwordMessages.repeated,
		})
}

/**
 * プロフィール編集フォームの完全なバリデーションスキーマ
 */
export const extendedProfileSchema = z.object({
	name: extendedUsernameSchema,
	email: extendedEmailSchema,
})

/**
 * パスワード変更フォームの完全なバリデーションスキーマ
 */
export const createPasswordChangeSchema = (userInfo?: {
	name?: string | null
	email?: string
}) => {
	const passwordSchema = createPasswordSchema(userInfo)

	return z
		.object({
			currentPassword: z.string().min(1, passwordMessages.required),
			newPassword: passwordSchema,
			confirmPassword: z.string().min(1, passwordMessages.required),
		})
		.refine((data) => data.newPassword === data.confirmPassword, {
			message: passwordMessages.notMatch,
			path: ["confirmPassword"],
		})
		.refine((data) => data.currentPassword !== data.newPassword, {
			message: passwordMessages.sameAsOld,
			path: ["newPassword"],
		})
}

/**
 * 画像アップロードの詳細バリデーションスキーマ
 */
export const extendedImageUploadSchema = z.object({
	imageData: z
		.string()
		.min(1, "画像データが必要です")
		.refine(
			(val) => {
				const validFormats = [
					"data:image/jpeg",
					"data:image/jpg",
					"data:image/png",
					"data:image/gif",
					"data:image/webp",
				]
				return validFormats.some((format) => val.startsWith(format))
			},
			{
				message: "対応形式：JPEG、PNG、GIF、WebP",
			},
		)
		.refine(
			(val) => {
				// Base64データサイズチェック（約5MB）
				const base64Length = val.length - val.indexOf(",") - 1
				const sizeInBytes = (base64Length * 3) / 4
				return sizeInBytes <= 5 * 1024 * 1024
			},
			{
				message: "ファイルサイズは5MB以下にしてください",
			},
		),
	filename: z
		.string()
		.optional()
		.refine(
			(val) => {
				if (!val) return true
				const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]
				return validExtensions.some((ext) => val.toLowerCase().endsWith(ext))
			},
			{
				message: "無効なファイル拡張子です",
			},
		),
})

/**
 * プロフィール全体の更新スキーマ（画像含む）
 */
export const extendedProfileWithImageSchema = extendedProfileSchema.extend({
	image: z.string().nullable().optional(),
	imageData: z.string().optional(),
})

/**
 * 型定義
 */
export type ExtendedProfileFormData = z.infer<typeof extendedProfileSchema>
export type ExtendedPasswordChangeFormData = z.infer<
	ReturnType<typeof createPasswordChangeSchema>
>
export type ExtendedImageUploadData = z.infer<typeof extendedImageUploadSchema>
export type ExtendedProfileWithImageData = z.infer<
	typeof extendedProfileWithImageSchema
>

/**
 * バリデーション結果の型
 */
export interface ExtendedValidationResult {
	success: boolean
	data?: any
	errors?: Array<{
		field: string
		message: string
	}>
	warnings?: Array<{
		field: string
		message: string
	}>
}

/**
 * フィールドレベルのバリデーション関数
 */
export const validateUsername = (value: string): ExtendedValidationResult => {
	const result = extendedUsernameSchema.safeParse(value)
	if (result.success) {
		return { success: true, data: result.data }
	}
	return {
		success: false,
		errors: result.error.errors.map((err) => ({
			field: "username",
			message: err.message,
		})),
	}
}

export const validateEmail = (value: string): ExtendedValidationResult => {
	const result = extendedEmailSchema.safeParse(value)
	if (result.success) {
		return { success: true, data: result.data }
	}
	return {
		success: false,
		errors: result.error.errors.map((err) => ({
			field: "email",
			message: err.message,
		})),
	}
}

export const validatePassword = (
	value: string,
	userInfo?: { name?: string | null; email?: string },
): ExtendedValidationResult => {
	const schema = createPasswordSchema(userInfo)
	const result = schema.safeParse(value)

	if (result.success) {
		// パスワード強度に基づく警告を追加
		const warnings: Array<{ field: string; message: string }> = []
		const types = checkPasswordCharacterTypes(value)

		if (!types.hasUpperCase) {
			warnings.push({
				field: "password",
				message: passwordMessages.complexity.missingUpperCase,
			})
		}
		if (!types.hasLowerCase) {
			warnings.push({
				field: "password",
				message: passwordMessages.complexity.missingLowerCase,
			})
		}
		if (!types.hasNumber) {
			warnings.push({
				field: "password",
				message: passwordMessages.complexity.missingNumber,
			})
		}
		if (!types.hasSymbol) {
			warnings.push({
				field: "password",
				message: passwordMessages.complexity.missingSymbol,
			})
		}

		return {
			success: true,
			data: result.data,
			warnings: warnings.length > 0 ? warnings : undefined,
		}
	}

	return {
		success: false,
		errors: result.error.errors.map((err) => ({
			field: "password",
			message: err.message,
		})),
	}
}

/**
 * パスワード強度の評価
 */
export interface PasswordStrengthEvaluation {
	score: number // 0-5
	level: "very_weak" | "weak" | "fair" | "good" | "strong" | "excellent"
	feedback: string[]
}

export function evaluatePasswordStrength(
	password: string,
	userInfo?: { name?: string | null; email?: string },
): PasswordStrengthEvaluation {
	let score = 0
	const feedback: string[] = []

	// 長さによるスコア
	if (password.length >= 8) score++
	if (password.length >= 12) score++
	if (password.length >= 16) score++

	// 文字種類によるスコア
	const types = checkPasswordCharacterTypes(password)
	if (types.characterTypesCount >= 2) score++
	if (types.characterTypesCount >= 3) score++
	if (types.characterTypesCount === 4) score++

	// 減点項目
	if (isCommonWeakPassword(password)) {
		score = Math.max(0, score - 2)
		feedback.push(passwordMessages.commonPassword)
	}
	if (userInfo && isSimilarToUserInfo(password, userInfo)) {
		score = Math.max(0, score - 1)
		feedback.push(passwordMessages.similarToUserInfo)
	}
	if (hasSequentialCharacters(password)) {
		score = Math.max(0, score - 1)
		feedback.push(passwordMessages.sequential)
	}
	if (hasRepeatedCharacters(password)) {
		score = Math.max(0, score - 1)
		feedback.push(passwordMessages.repeated)
	}

	// スコアの正規化（0-5）
	score = Math.min(5, Math.max(0, score))

	// レベルの決定
	const levels: PasswordStrengthEvaluation["level"][] = [
		"very_weak",
		"weak",
		"fair",
		"good",
		"strong",
		"excellent",
	]
	const level = levels[score]

	// 改善提案の追加
	if (score < 3) {
		if (password.length < 12) {
			feedback.push(passwordMessages.suggestions.useLonger)
		}
		if (types.characterTypesCount < 3) {
			feedback.push(passwordMessages.suggestions.addVariety)
		}
	}

	return {
		score,
		level,
		feedback,
	}
}
