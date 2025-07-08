"use server"

import { auth } from "@/auth"
import axios from "axios"
import { createSignedJwt } from "../model/createJwt"

export async function deleteReportAction(id: number) {
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
  const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	return await axios.delete(url, {
		headers: { Authorization: `Bearer ${token}` },
	})
}
