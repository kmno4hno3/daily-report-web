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

export type ProfileFormData = z.infer<typeof profileSchema>

export interface UserProfile {
	id: string
	name: string | null
	email: string
	image: string | null
}

export interface UpdateProfileResponse {
	success: boolean
	message?: string
	data?: UserProfile
}
