"use server"

import { auth } from "@/auth"
import type { Dashboard } from "@/src/features/dashboard/model/types"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

export const getDashboard = async (): Promise<Dashboard | undefined> => {
	const session = await auth()
	if (!session?.user) return
	const token = session?.user ? await createSignedJwt(session.user) : ""

	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/dashboard`
		const response = await axios
			.get(url, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => res.data)
		response.data
	} catch (error) {
		console.error("日付の取得に失敗しました:", error)
		// エラー時でも空のデータを返してReact Queryのエラーを防ぐ
		return {
			statistics: {
				total_reports: 1,
				this_month_reports: 1,
				last_month_reports: 1,
			},
			yearly_summary: [
				{
					year: 1,
					report_count: 1,
				},
			],
		} as Dashboard
	}
}
