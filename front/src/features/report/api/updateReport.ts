"use server"

import { auth } from "@/auth"
import type { Date as ReportDate } from "@/src/entities/report/type"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

interface Props {
	id: number
	content: string
}

export const updateReport = async ({ id, content }: Props) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
	await axios.put(
		url,
		{ content },
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	)
}
