"use server"

import { auth } from "@/auth"
import axios from "axios"
import { createSignedJwt } from "../model/createJwt"
import { redirect } from "next/navigation"

export async function deleteReportServer(id: number) {
	const session = await auth()
	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
	const token = session?.user ? await createSignedJwt(session.user) : ""

	try {
		await axios.delete(url, {
			headers: { Authorization: `Bearer ${token}` },
		})
	} catch (error) {
		console.error("Delete error:", error)
		throw error
	}
	
	redirect("/")
}