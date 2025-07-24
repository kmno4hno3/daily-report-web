"use server"

import { auth } from "@/auth"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

export const getReportDetail = async (id: number) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
		return await axios
			.get(url, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => res.data)
	} catch (error) {
		console.error(error)
	}
}
