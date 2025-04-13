"use server"

import { signIn } from "@/auth"

export const authenticateUser = async (email: string, password: string) => {
	await signIn("credentials", { email, password })
}
