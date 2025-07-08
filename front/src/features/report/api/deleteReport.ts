import axios from "axios"
import type { User } from "next-auth"
import { createSignedJwt } from "../model/createJwt"

export async function deleteReport(id: number, user: User | undefined) {
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
	const token = user ? await createSignedJwt(user) : ""

	return await axios.delete(url, {
		headers: { Authorization: `Bearer ${token}` },
	})
}