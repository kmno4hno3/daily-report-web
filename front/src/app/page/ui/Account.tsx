import { auth, signOut } from "@/auth"

import { Button } from "@/src/shared/ui/button"
import type React from "react"

export const Account: React.FC = async () => {
	const session = await auth()
	if (!session) return null
	const onSubmit = async () => {
		"use server"
		await signOut({ redirectTo: "/auth/login" })
	}

	return (
		<div className="p-6 space-y-6">
			<h2 className="text-2xl font-bold mb-4">アカウント</h2>

			<div className="space-y-4">
				<form action={onSubmit}>
					<Button type="submit" className="w-full" variant="secondary">
						ログアウト
					</Button>
				</form>
			</div>
		</div>
	)
}
