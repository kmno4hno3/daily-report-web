import type {
	ImageUploadData,
	PasswordChangeFormData,
	PasswordChangeResponse,
	ProfileFormData,
	ProfileWithImageData,
	UpdateProfileResponse,
	UserProfile,
} from "../lib/validationSchema"

/**
 * プロフィール情報を取得する
 */
export async function getProfile(): Promise<UserProfile> {
	const response = await fetch("/api/profile", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})

	if (!response.ok) {
		throw new Error("プロフィール情報の取得に失敗しました")
	}

	const data = await response.json()
	return data
}

/**
 * プロフィール情報を更新する
 */
export async function updateProfile(
	profileData: ProfileFormData,
): Promise<UpdateProfileResponse> {
	const response = await fetch("/api/profile", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(profileData),
	})

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({
			message: "プロフィールの更新に失敗しました",
		}))
		throw new Error(errorData.message || "プロフィールの更新に失敗しました")
	}

	const data = await response.json()
	return data
}

/**
 * プロフィール画像をアップロードする（モック実装）
 * 実際のバックエンドAPI実装後に差し替え予定
 */
export async function uploadProfileImage(
	imageData: ImageUploadData,
): Promise<{ success: boolean; imageUrl: string; message?: string }> {
	try {
		// バックエンドAPI実装まではLocalStorageでモック
		const imageUrl = `profile_image_${Date.now()}`
		localStorage.setItem(`image_${imageUrl}`, imageData.imageData)

		// アップロード処理をシミュレート
		await new Promise((resolve) => setTimeout(resolve, 1000))

		return {
			success: true,
			imageUrl: imageData.imageData, // 実装ではBase64データURLを返す
			message: "プロフィール画像をアップロードしました",
		}
	} catch (error) {
		console.error("Image upload error:", error)
		return {
			success: false,
			imageUrl: "",
			message: "画像のアップロードに失敗しました",
		}
	}
}

/**
 * プロフィール情報を画像と一緒に更新する
 */
export async function updateProfileWithImage(
	profileData: ProfileWithImageData,
): Promise<UpdateProfileResponse> {
	const response = await fetch("/api/profile", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(profileData),
	})

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({
			message: "プロフィールの更新に失敗しました",
		}))
		throw new Error(errorData.message || "プロフィールの更新に失敗しました")
	}

	const data = await response.json()
	return data
}

/**
 * プロフィール画像を削除する（モック実装）
 */
export async function deleteProfileImage(): Promise<{
	success: boolean
	message?: string
}> {
	try {
		// アップロード処理をシミュレート
		await new Promise((resolve) => setTimeout(resolve, 500))

		return {
			success: true,
			message: "プロフィール画像を削除しました",
		}
	} catch (error) {
		console.error("Image delete error:", error)
		return {
			success: false,
			message: "画像の削除に失敗しました",
		}
	}
}

/**
 * パスワードを変更する（モック実装）
 * 実際のバックエンドAPI実装後に差し替え予定
 */
export async function changePassword(
	passwordData: PasswordChangeFormData,
): Promise<PasswordChangeResponse> {
	try {
		// パスワード変更処理をシミュレート
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// モック実装：現在のパスワードが "password123" でない場合はエラー
		if (passwordData.currentPassword !== "password123") {
			return {
				success: false,
				message: "現在のパスワードが正しくありません",
			}
		}

		// 新しいパスワードの基本チェック（実際の実装では backend で行う）
		if (passwordData.newPassword.length < 8) {
			return {
				success: false,
				message: "パスワードは8文字以上である必要があります",
			}
		}

		// モック実装：ローカルストレージに保存（実際の実装では不要）
		localStorage.setItem("user_password", passwordData.newPassword)

		return {
			success: true,
			message: "パスワードを変更しました",
		}
	} catch (error) {
		console.error("Password change error:", error)
		return {
			success: false,
			message: "パスワードの変更に失敗しました",
		}
	}
}
