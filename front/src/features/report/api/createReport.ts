"use server"

import { auth } from "@/auth"
import axios from "axios"
import { format } from "date-fns"
import { createSignedJwt } from "../model/createJwt"

export const createReport = async (date: Date, content: string) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	const formatDate = format(date, "yyyy-MM-dd")
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/reports`
	await axios.post(
		url,
		{ date: formatDate, content },
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	)
}
