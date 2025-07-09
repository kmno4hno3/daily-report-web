"use server"

import { getReportDetail } from "./getReportDetail"

export async function fetchReportAction(id: number) {
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
	const response = await getReportDetail(url)
	return response.data
}
