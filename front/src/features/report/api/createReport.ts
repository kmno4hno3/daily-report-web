"use server"

import { auth } from "@/auth"
import type { Report } from "@/src/entities/report/type"
import axios from "axios"
import { format } from "date-fns"
import { createSignedJwt } from "../model/createJwt"

export const createReport = async ({
	date,
	content,
}: { date: Date; content: string }) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	try {
		const formatDate = format(date, "yyyy-MM-dd")
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/reports`
		const res = await axios.post<Report>(
			url,
			{ date: formatDate, content },
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		)
		return res.data
	} catch (error) {
		console.error("Failed to create report:", error)
		throw error
	}
}
