"use server"

import { auth } from "@/auth"
import type { Year } from "@/src/entities/report/type"
import axios from "axios"

export const getDates = async (
	currentYear: number,
): Promise<Year | undefined> => {
	const session = await auth()
	if (!session?.user) return
	try {
		const url = `http://${process.env.NEXT_PUBLIC_HOST || "localhost:8000"}/api/report/dates/${currentYear}`
		return await axios.get(url).then((res) => res.data)
	} catch (error) {
		console.error(error)
	}
}
