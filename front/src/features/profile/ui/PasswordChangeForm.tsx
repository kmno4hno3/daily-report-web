"use client"

import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import type { PasswordChangeFormData } from "../lib/validationSchema"
import { passwordChangeSchema } from "../lib/validationSchema"
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator"

interface PasswordChangeFormProps {
	onSave: (data: PasswordChangeFormData) => Promise<void>
	onCancel: () => void
	isLoading?: boolean
	error?: Error | null
	isSuccess?: boolean
	successMessage?: string
	onClearError?: () => void
	onClearSuccess?: () => void
}

export const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({
	onSave,
	onCancel,
	isLoading = false,
	error,
	isSuccess = false,
	successMessage,
	onClearError,
	onClearSuccess,
}) => {
	const [showCurrentPassword, setShowCurrentPassword] = useState(false)
	const [showNewPassword, setShowNewPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		watch,
		reset,
	} = useForm<PasswordChangeFormData>({
		resolver: zodResolver(passwordChangeSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	})

	// 新しいパスワードを監視してパスワード強度表示に使用
	const newPassword = watch("newPassword")

	const onSubmit = async (data: PasswordChangeFormData) => {
		try {
			await onSave(data)
			// 成功時はフォームをリセット
			reset()
		} catch (error) {
			// エラーハンドリングは上位コンポーネントで処理
			console.error("Password change form error:", error)
		}
	}

	const handleCancel = () => {
		reset()
		onClearError?.()
		onClearSuccess?.()
		onCancel()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			{/* エラーメッセージ */}
			{error && (
				<div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start space-x-3">
					<AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
					<div className="flex-1">
						<p className="text-sm text-red-800">{error.message}</p>
						{onClearError && (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={onClearError}
								className="text-red-600 hover:text-red-700 p-0 h-auto mt-1"
							>
								閉じる
							</Button>
						)}
					</div>
				</div>
			)}

			{/* 成功メッセージ */}
			{isSuccess && successMessage && (
				<div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start space-x-3">
					<CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
					<div className="flex-1">
						<p className="text-sm text-green-800">{successMessage}</p>
						{onClearSuccess && (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={onClearSuccess}
								className="text-green-600 hover:text-green-700 p-0 h-auto mt-1"
							>
								閉じる
							</Button>
						)}
					</div>
				</div>
			)}

			<div className="space-y-4">
				{/* 現在のパスワード */}
				<div className="space-y-2">
					<Label htmlFor="currentPassword">現在のパスワード</Label>
					<div className="relative">
						<Input
							id="currentPassword"
							type={showCurrentPassword ? "text" : "password"}
							placeholder="現在のパスワードを入力してください"
							{...register("currentPassword")}
							className={errors.currentPassword ? "border-red-500" : ""}
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
							onClick={() => setShowCurrentPassword(!showCurrentPassword)}
						>
							{showCurrentPassword ? (
								<EyeOff className="h-4 w-4" />
							) : (
								<Eye className="h-4 w-4" />
							)}
						</Button>
					</div>
					{errors.currentPassword && (
						<p className="text-sm text-red-600">
							{errors.currentPassword.message}
						</p>
					)}
				</div>

				{/* 新しいパスワード */}
				<div className="space-y-2">
					<Label htmlFor="newPassword">新しいパスワード</Label>
					<div className="relative">
						<Input
							id="newPassword"
							type={showNewPassword ? "text" : "password"}
							placeholder="新しいパスワードを入力してください"
							{...register("newPassword")}
							className={errors.newPassword ? "border-red-500" : ""}
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
							onClick={() => setShowNewPassword(!showNewPassword)}
						>
							{showNewPassword ? (
								<EyeOff className="h-4 w-4" />
							) : (
								<Eye className="h-4 w-4" />
							)}
						</Button>
					</div>
					{errors.newPassword && (
						<p className="text-sm text-red-600">{errors.newPassword.message}</p>
					)}

					{/* パスワード強度インジケーター */}
					{newPassword && (
						<PasswordStrengthIndicator
							password={newPassword}
							className="mt-3"
						/>
					)}
				</div>

				{/* 確認用パスワード */}
				<div className="space-y-2">
					<Label htmlFor="confirmPassword">確認用パスワード</Label>
					<div className="relative">
						<Input
							id="confirmPassword"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="新しいパスワードを再度入力してください"
							{...register("confirmPassword")}
							className={errors.confirmPassword ? "border-red-500" : ""}
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							{showConfirmPassword ? (
								<EyeOff className="h-4 w-4" />
							) : (
								<Eye className="h-4 w-4" />
							)}
						</Button>
					</div>
					{errors.confirmPassword && (
						<p className="text-sm text-red-600">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
			</div>

			{/* ボタン */}
			<div className="flex justify-end space-x-3 pt-4">
				<Button
					type="button"
					variant="outline"
					onClick={handleCancel}
					disabled={isLoading}
				>
					キャンセル
				</Button>
				<Button
					type="submit"
					disabled={!isDirty || isLoading}
					className="min-w-[120px]"
				>
					{isLoading ? "変更中..." : "パスワードを変更"}
				</Button>
			</div>
		</form>
	)
}
