import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { getProfile, updateProfile } from "../api/profileApi"
import type { ProfileFormData, UserProfile } from "../lib/validationSchema"

/**
 * プロフィール管理用のカスタムフック
 */
export function useProfile() {
	const [isEditMode, setIsEditMode] = useState(false)
	const queryClient = useQueryClient()

	// プロフィール情報の取得
	const {
		data: profile,
		isLoading,
		error,
		refetch,
	} = useQuery<UserProfile, Error>({
		queryKey: ["profile"],
		queryFn: getProfile,
		staleTime: 5 * 60 * 1000, // 5分間はキャッシュを使用
		retry: 1,
	})

	// プロフィール更新のミューテーション
	const updateMutation = useMutation({
		mutationFn: updateProfile,
		onSuccess: (data) => {
			// 成功時はキャッシュを更新
			queryClient.setQueryData(["profile"], data.data)
			// 編集モードを終了
			setIsEditMode(false)
		},
		onError: (error: Error) => {
			console.error("プロフィール更新エラー:", error.message)
		},
	})

	// 編集モードの切り替え
	const toggleEditMode = () => {
		setIsEditMode((prev) => !prev)
	}

	// 編集モードを開始
	const startEdit = () => {
		setIsEditMode(true)
	}

	// 編集モードをキャンセル
	const cancelEdit = () => {
		setIsEditMode(false)
		// フォームをリセット（必要に応じて）
	}

	// プロフィールを保存
	const saveProfile = async (data: ProfileFormData, imageData?: string) => {
		// 画像データが提供された場合は、プロフィールデータに含める
		const profileData = imageData ? { ...data, image: imageData } : data
		await updateMutation.mutateAsync(profileData)
	}

	return {
		// 状態
		profile,
		isLoading,
		error,
		isEditMode,
		isSaving: updateMutation.isPending,
		saveError: updateMutation.error,

		// アクション
		toggleEditMode,
		startEdit,
		cancelEdit,
		saveProfile,
		refetch,
	}
}
