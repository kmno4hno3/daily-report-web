"use server"

import { auth } from "@/auth"
import type { Dashboard } from "@/src/features/dashboard/model/types"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

export const getDashboard = async (): Promise<Dashboard> => {
	const session = await auth()
	if (!session?.user) {
		throw new Error("認証が必要です")
	}
	const token = await createSignedJwt(session.user)

	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/dashboard`
		const response = await axios.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return response.data
	} catch (error) {
		console.error("ダッシュボードデータの取得に失敗しました:", error)
		// エラー時でも空のデータを返してReact Queryのエラーを防ぐ
		const currentYear = new Date().getFullYear()
		return {
			statistics: {
				total_reports: 0,
				this_month_reports: 0,
				last_month_reports: 0,
			},
			yearly_summary: [
				{
					year: currentYear,
					report_count: 0,
				},
			],
		} as Dashboard
	}
}
