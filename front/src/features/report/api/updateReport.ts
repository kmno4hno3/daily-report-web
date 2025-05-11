"use server"

import { auth } from "@/auth"
import type { Date as ReportDate } from "@/src/entities/report/type"
import axios from "axios"
import { createSignedJwt } from "../model/createJwt"

export const updateReport = async (
	currentDate: ReportDate,
	content: string,
) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${currentDate.year}/${currentDate.month}/${currentDate.day}`
	await axios.put(
		url,
		{ content },
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	)
}
