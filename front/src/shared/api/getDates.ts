"use server"

import { auth } from "@/auth"
import type { Year } from "@/src/entities/report/type"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

export const getDates = async (
	currentYear: number,
	query?: string,
): Promise<Year> => {
	const session = await auth()
	if (!session?.user) {
		throw new Error("認証が必要です")
	}
	const token = await createSignedJwt(session.user)
	console.log("token: ", token)

	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/dates/${currentYear}${query ? `?q=${query}` : ""}`
		const response = await axios.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return response.data
	} catch (error) {
		console.error("日付の取得に失敗しました:", error)
		// エラー時でも空のデータを返してReact Queryのエラーを防ぐ
		return {
			year: currentYear,
			months: [],
		} as Year
	}
}
