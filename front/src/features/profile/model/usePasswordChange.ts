import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { changePassword } from "../api/profileApi"
import type { PasswordChangeFormData } from "../lib/validationSchema"

/**
 * パスワード変更管理用のカスタムフック
 */
export function usePasswordChange() {
	const [isSuccess, setIsSuccess] = useState(false)
	const [successMessage, setSuccessMessage] = useState<string>("")

	// パスワード変更のミューテーション
	const changePasswordMutation = useMutation({
		mutationFn: changePassword,
		onSuccess: (response) => {
			if (response.success) {
				setIsSuccess(true)
				setSuccessMessage(response.message || "パスワードを変更しました")

				// 5秒後に成功状態をリセット
				setTimeout(() => {
					setIsSuccess(false)
					setSuccessMessage("")
				}, 5000)
			} else {
				// APIが success: false を返した場合はエラーとして扱う
				throw new Error(response.message || "パスワードの変更に失敗しました")
			}
		},
		onError: (error: Error) => {
			console.error("パスワード変更エラー:", error.message)
			// エラー状態は React Query が自動管理
		},
	})

	// パスワード変更を実行
	const handleChangePassword = async (data: PasswordChangeFormData) => {
		// 成功状態をリセット
		setIsSuccess(false)
		setSuccessMessage("")

		await changePasswordMutation.mutateAsync(data)
	}

	// エラーメッセージをクリア
	const clearError = () => {
		changePasswordMutation.reset()
	}

	// 成功状態をクリア
	const clearSuccess = () => {
		setIsSuccess(false)
		setSuccessMessage("")
	}

	// すべての状態をリセット
	const reset = () => {
		changePasswordMutation.reset()
		setIsSuccess(false)
		setSuccessMessage("")
	}

	return {
		// 状態
		isLoading: changePasswordMutation.isPending,
		error: changePasswordMutation.error,
		isSuccess,
		successMessage,

		// アクション
		changePassword: handleChangePassword,
		clearError,
		clearSuccess,
		reset,
	}
}
