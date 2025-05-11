"use server"
import { auth } from "@/auth"
import { getReportDetail } from "./getReportDetail"

export async function fetchReportAction(
	year: number,
	month: number,
	day: number,
) {
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${year}/${month}/${day}`
	const response = await getReportDetail(url)
	return response.data
}
