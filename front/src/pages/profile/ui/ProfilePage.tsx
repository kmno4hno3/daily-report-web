"use client"

import { authSignOut } from "@/src/features/login/model/action"
import { z } from "zod"

import { Button } from "@/src/shared/ui/button"
import type React from "react"

export const ProfilePage: React.FC = () => {
	const handleLogout = async () => {
		const result = await authSignOut()

		const ResultSchema = z.object({
			isSuccess: z.boolean(),
			error: z.string().optional(),
		})

		const resultParsed = ResultSchema.safeParse(result)

		if (resultParsed.success && resultParsed.data.isSuccess) {
			window.location.href = "/auth/login"
		} else {
			console.log("ログアウト失敗:", result)
		}
	}

	return (
		<div className="p-6 space-y-6">
			<h2 className="text-2xl font-bold mb-4">アカウント</h2>

			<div className="space-y-4">
				<Button onClick={handleLogout} className="w-full" variant="secondary">
					ログアウト
				</Button>
			</div>
		</div>
	)
}
