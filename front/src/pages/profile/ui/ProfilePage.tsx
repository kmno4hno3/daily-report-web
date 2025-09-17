"use client"

import { getInitials } from "@/src/features/profile/lib/imageUtils"
import { useProfile } from "@/src/features/profile/model/useProfile"
import { ProfileEditForm } from "@/src/features/profile/ui/ProfileEditForm"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/ui/avatar"
import { Button } from "@/src/shared/ui/button"
import { Card } from "@/src/shared/ui/card"
import { useSession } from "next-auth/react"
import type React from "react"
import { useEffect } from "react"

export const ProfilePage: React.FC = () => {
	const { data: session } = useSession()
	const {
		profile,
		isLoading,
		error,
		isEditMode,
		isSaving,
		startEdit,
		cancelEdit,
		saveProfile,
	} = useProfile()

	// セッション情報からユーザーIDを取得
	useEffect(() => {
		if (session?.user?.id) {
			// 必要に応じてユーザーIDを使用
			console.log("Current user ID:", session.user.id)
		}
	}, [session])

	// ローディング中の表示
	if (isLoading) {
		return (
			<div className="p-6">
				<h2 className="text-2xl font-bold mb-4">プロフィール</h2>
				<p className="text-gray-500">読み込み中...</p>
			</div>
		)
	}

	// エラー時の表示
	if (error) {
		return (
			<div className="p-6">
				<h2 className="text-2xl font-bold mb-4">プロフィール</h2>
				<p className="text-red-600">
					プロフィール情報の取得に失敗しました: {error.message}
				</p>
			</div>
		)
	}

	return (
		<div className="p-6 space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">プロフィール</h2>
				{!isEditMode && <Button onClick={startEdit}>編集</Button>}
			</div>

			<Card className="p-6">
				{isEditMode ? (
					// 編集モード
					<ProfileEditForm
						profile={profile}
						onSave={saveProfile}
						onCancel={cancelEdit}
						isSaving={isSaving}
					/>
				) : (
					// 閲覧モード
					<div className="space-y-6">
						{/* プロフィール画像 */}
						<div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
							<Avatar className="h-24 w-24 ring-2 ring-offset-4 ring-muted">
								<AvatarImage
									src={profile?.image || undefined}
									alt="プロフィール画像"
								/>
								<AvatarFallback className="text-xl">
									{getInitials(profile?.name)}
								</AvatarFallback>
							</Avatar>
							<div className="text-center sm:text-left">
								<h3 className="text-lg font-semibold">
									{profile?.name || "未設定"}
								</h3>
								<p className="text-sm text-muted-foreground">
									プロフィール画像
								</p>
							</div>
						</div>

						{/* ユーザー情報 */}
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<label className="text-sm font-medium text-gray-700">
									ユーザー名
								</label>
								<p className="text-lg">{profile?.name || "未設定"}</p>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-medium text-gray-700">
									メールアドレス
								</label>
								<p className="text-lg">{profile?.email || "未設定"}</p>
							</div>
						</div>
					</div>
				)}
			</Card>
		</div>
	)
}
