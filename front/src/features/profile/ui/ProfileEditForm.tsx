"use client"

import type { FieldValidationState } from "@/src/shared/lib/validation/common"
import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import type React from "react"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDebouncedCallback } from "use-debounce"
import { uploadProfileImage } from "../api/profileApi"
import type { ProfileFormData, UserProfile } from "../lib/validationSchema"
import { extendedProfileSchema } from "../lib/validationSchemas"
import { checkEmailAvailability } from "../lib/validators"
import { ImageUpload } from "./ImageUpload"
import { FieldValidation } from "./ValidationMessage"

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

	// フィールドバリデーション状態
	const [nameValidation, setNameValidation] = useState<FieldValidationState>({
		isValidating: false,
		isValid: false,
		touched: false,
		dirty: false,
	})
	const [emailValidation, setEmailValidation] = useState<FieldValidationState>({
		isValidating: false,
		isValid: false,
		touched: false,
		dirty: false,
	})

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, touchedFields, dirtyFields },
		reset,
		watch,
		trigger,
	} = useForm<ProfileFormData>({
		resolver: zodResolver(extendedProfileSchema),
		defaultValues: {
			name: profile?.name || "",
			email: profile?.email || "",
		},
		mode: "onBlur",
		reValidateMode: "onChange",
	})

	// フォームの値を監視
	const nameValue = watch("name")
	const emailValue = watch("email")

	// プロフィールデータが変更されたときにフォームをリセット
	useEffect(() => {
		if (profile) {
			reset({
				name: profile.name || "",
				email: profile.email || "",
			})
			setUploadedImage(null) // 画像状態もリセット
			// バリデーション状態もリセット
			setNameValidation({
				isValidating: false,
				isValid: false,
				touched: false,
				dirty: false,
			})
			setEmailValidation({
				isValidating: false,
				isValid: false,
				touched: false,
				dirty: false,
			})
		}
	}, [profile, reset])

	// デバウンス付きメール重複チェック
	const debouncedEmailCheck = useDebouncedCallback(async (email: string) => {
		if (!email || email === profile?.email) {
			setEmailValidation((prev) => ({
				...prev,
				isValidating: false,
			}))
			return
		}

		try {
			const result = await checkEmailAvailability(email, profile?.email)
			setEmailValidation((prev) => ({
				...prev,
				isValidating: false,
				error: result.available ? undefined : result.message,
			}))
		} catch (error) {
			setEmailValidation((prev) => ({
				...prev,
				isValidating: false,
				error: "メールアドレスのチェックに失敗しました",
			}))
		}
	}, 500)

	// フィールドのリアルタイムバリデーション
	const handleNameValidation = useCallback(async () => {
		setNameValidation((prev) => ({
			...prev,
			touched: true,
			dirty: dirtyFields.name || false,
		}))

		const isValid = await trigger("name")
		const error = errors.name?.message

		setNameValidation((prev) => ({
			...prev,
			isValid,
			error,
		}))
	}, [trigger, errors.name, dirtyFields.name])

	const handleEmailValidation = useCallback(async () => {
		setEmailValidation((prev) => ({
			...prev,
			touched: true,
			dirty: dirtyFields.email || false,
			isValidating: true,
		}))

		const isValid = await trigger("email")
		const error = errors.email?.message

		if (isValid && emailValue !== profile?.email) {
			debouncedEmailCheck(emailValue)
		} else {
			setEmailValidation((prev) => ({
				...prev,
				isValidating: false,
				isValid,
				error,
			}))
		}
	}, [
		trigger,
		errors.email,
		dirtyFields.email,
		emailValue,
		profile?.email,
		debouncedEmailCheck,
	])

	// フィールド値の変化を監視してリアルタイムバリデーション
	useEffect(() => {
		if (touchedFields.name) {
			handleNameValidation()
		}
	}, [nameValue, touchedFields.name, handleNameValidation])

	useEffect(() => {
		if (touchedFields.email) {
			handleEmailValidation()
		}
	}, [emailValue, touchedFields.email, handleEmailValidation])

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
					{...register("name", {
						onBlur: handleNameValidation,
					})}
					placeholder="ユーザー名を入力"
					disabled={isSaving || isImageUploading}
					className={
						nameValidation.touched
							? nameValidation.error
								? "border-red-500"
								: nameValidation.isValid
									? "border-green-500"
									: ""
							: ""
					}
				/>
				<FieldValidation state={nameValidation} fieldType="username" compact />
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">メールアドレス</Label>
				<Input
					id="email"
					type="email"
					{...register("email", {
						onBlur: handleEmailValidation,
					})}
					placeholder="メールアドレスを入力"
					disabled={isSaving || isImageUploading}
					className={
						emailValidation.touched
							? emailValidation.error
								? "border-red-500"
								: emailValidation.isValid
									? "border-green-500"
									: ""
							: ""
					}
				/>
				<FieldValidation state={emailValidation} fieldType="email" compact />
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
