"use client"

import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import type React from "react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { uploadProfileImage } from "../api/profileApi"
import type { ProfileFormData, UserProfile } from "../lib/validationSchema"
import { profileSchema } from "../lib/validationSchema"
import { ImageUpload } from "./ImageUpload"

interface ProfileEditFormProps {
	profile: UserProfile | undefined
	onSave: (data: ProfileFormData, imageData?: string) => Promise<void>
	onCancel: () => void
	isSaving?: boolean
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
	profile,
	onSave,
	onCancel,
	isSaving = false,
}) => {
	const [uploadedImage, setUploadedImage] = useState<string | null>(null)
	const [isImageUploading, setIsImageUploading] = useState(false)

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
			setUploadedImage(null) // 画像状態もリセット
		}
	}, [profile, reset])

	// 画像アップロード完了ハンドラー
	const handleImageUpload = async (imageData: string) => {
		setIsImageUploading(true)
		try {
			const result = await uploadProfileImage({
				imageData,
				filename: `profile_${Date.now()}.jpg`,
			})
			if (result.success) {
				setUploadedImage(result.imageUrl)
			}
		} catch (error) {
			console.error("Image upload failed:", error)
		} finally {
			setIsImageUploading(false)
		}
	}

	const onSubmit = async (data: ProfileFormData) => {
		await onSave(data, uploadedImage || undefined)
	}

	const hasChanges = isDirty || uploadedImage !== null

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			{/* プロフィール画像アップロード */}
			<div className="space-y-2">
				<Label>プロフィール画像</Label>
				<ImageUpload
					currentImage={uploadedImage || profile?.image}
					userName={profile?.name}
					onUploadComplete={handleImageUpload}
					isUploading={isImageUploading}
					disabled={isSaving || isImageUploading}
					size="lg"
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="name">ユーザー名</Label>
				<Input
					id="name"
					{...register("name")}
					placeholder="ユーザー名を入力"
					disabled={isSaving || isImageUploading}
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
					disabled={isSaving || isImageUploading}
				/>
				{errors.email && (
					<p className="text-sm text-red-600">{errors.email.message}</p>
				)}
			</div>

			<div className="flex gap-2">
				<Button
					type="submit"
					disabled={!hasChanges || isSaving || isImageUploading}
				>
					{isSaving ? "保存中..." : "保存"}
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={onCancel}
					disabled={isSaving || isImageUploading}
				>
					キャンセル
				</Button>
			</div>
		</form>
	)
}
