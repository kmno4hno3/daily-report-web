"use server"

import { auth } from "@/auth"
import axios from "axios"
import { createSignedJwt } from "../model/createJwt"

export const getReportDetail = async (url: string) => {
	const session = await auth()
	const token = session?.user ? await createSignedJwt(session.user) : ""

	return await axios.get(url, {
		headers: { Authorization: `Bearer ${token}` },
	})
}
