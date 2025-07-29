"use server"

import { auth } from "@/auth"
import type { Year } from "@/src/entities/report/type"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"

export const getDates = async (
	currentYear: number,
	query?: string,
): Promise<Year | undefined> => {
	const session = await auth()
	if (!session?.user) return
	const token = session?.user ? await createSignedJwt(session.user) : ""

	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/dates/${currentYear}${query ? `?q=${query}` : ""}`
		return await axios
			.get(url, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => res.data)
	} catch (error) {
		console.error(error)
	}
}
