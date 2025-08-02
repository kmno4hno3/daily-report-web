"use client"

import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Label } from "@/src/shared/ui/label"
import type React from "react"

export const ProfilePage: React.FC = () => {
	return (
		<div className="p-6 space-y-6">
			<h2 className="text-2xl font-bold mb-4">プロフィール</h2>

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="username">ユーザー名</Label>
					<Input id="username" placeholder="ユーザー名を入力" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">メールアドレス</Label>
					<Input id="email" type="email" placeholder="メールアドレスを入力" />
				</div>

				<Button>設定を保存</Button>
			</div>
		</div>
	)
}
