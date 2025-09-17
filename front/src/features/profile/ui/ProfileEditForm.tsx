"use client"

import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import type React from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import type { ProfileFormData, UserProfile } from "../lib/validationSchema"
import { profileSchema } from "../lib/validationSchema"

interface ProfileEditFormProps {
	profile: UserProfile | undefined
	onSave: (data: ProfileFormData) => Promise<void>
	onCancel: () => void
	isSaving?: boolean
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
	profile,
	onSave,
	onCancel,
	isSaving = false,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<ProfileFormData>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: profile?.name || "",
			email: profile?.email || "",
		},
	})

	// プロフィールデータが変更されたときにフォームをリセット
	useEffect(() => {
		if (profile) {
			reset({
				name: profile.name || "",
				email: profile.email || "",
			})
		}
	}, [profile, reset])

	const onSubmit = async (data: ProfileFormData) => {
		await onSave(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">ユーザー名</Label>
				<Input
					id="name"
					{...register("name")}
					placeholder="ユーザー名を入力"
					disabled={isSaving}
				/>
				{errors.name && (
					<p className="text-sm text-red-600">{errors.name.message}</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">メールアドレス</Label>
				<Input
					id="email"
					type="email"
					{...register("email")}
					placeholder="メールアドレスを入力"
					disabled={isSaving}
				/>
				{errors.email && (
					<p className="text-sm text-red-600">{errors.email.message}</p>
				)}
			</div>

			<div className="flex gap-2">
				<Button type="submit" disabled={!isDirty || isSaving}>
					{isSaving ? "保存中..." : "保存"}
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={onCancel}
					disabled={isSaving}
				>
					キャンセル
				</Button>
			</div>
		</form>
	)
}
