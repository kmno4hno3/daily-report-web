"use server"

import { auth } from "@/auth"
import { createSignedJwt } from "@/src/shared/lib/createJwt"
import axios from "axios"
import { revalidatePath } from "next/cache"

export async function deleteReport(id: number) {
	const session = await auth()
	if (!session?.user) {
		throw new Error("Unauthorized")
	}

	const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${id}`
	const token = await createSignedJwt(session.user)

	try {
		await axios.delete(url, {
			headers: { Authorization: `Bearer ${token}` },
		})

		// Revalidate paths instead of redirect
		revalidatePath("/")
		revalidatePath(`/report/${id}`)

		return { success: true }
	} catch (error) {
		console.error("Delete error:", error)
		return { success: false, error: "削除に失敗しました" }
	}
}
