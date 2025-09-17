import { z } from "zod"

export const profileSchema = z.object({
	name: z
		.string()
		.min(1, "ユーザー名は必須です")
		.max(50, "ユーザー名は50文字以内で入力してください")
		.regex(
			/^[a-zA-Z0-9ぁ-んァ-ヶー一-龠々\-_]+$/,
			"使用可能な文字：日本語、英数字、ハイフン、アンダースコア",
		),
	email: z
		.string()
		.min(1, "メールアドレスは必須です")
		.email("有効なメールアドレスを入力してください")
		.max(255, "メールアドレスは255文字以内で入力してください"),
})

// 画像アップロード用のスキーマ
export const imageUploadSchema = z.object({
	imageData: z
		.string()
		.min(1, "画像データが必要です")
		.startsWith("data:image/", "有効な画像データではありません"),
	filename: z.string().optional(),
})

// 画像を含むプロフィール更新スキーマ
export const profileWithImageSchema = profileSchema.extend({
	image: z.string().nullable().optional(),
})

export type ProfileFormData = z.infer<typeof profileSchema>
export type ImageUploadData = z.infer<typeof imageUploadSchema>
export type ProfileWithImageData = z.infer<typeof profileWithImageSchema>

export interface UserProfile {
	id: string
	name: string | null
	email: string
	image: string | null
}

// パスワード変更用のスキーマ
export const passwordChangeSchema = z
	.object({
		currentPassword: z.string().min(1, "現在のパスワードを入力してください"),
		newPassword: z
			.string()
			.min(8, "パスワードは8文字以上である必要があります")
			.max(128, "パスワードは128文字以下である必要があります"),
		confirmPassword: z.string().min(1, "確認用パスワードを入力してください"),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "新しいパスワードと確認用パスワードが一致しません",
		path: ["confirmPassword"],
	})

export type PasswordChangeFormData = z.infer<typeof passwordChangeSchema>

export interface PasswordChangeResponse {
	success: boolean
	message?: string
}

export interface UpdateProfileResponse {
	success: boolean
	message?: string
	data?: UserProfile
}
