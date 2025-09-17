import type {
	ProfileFormData,
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
