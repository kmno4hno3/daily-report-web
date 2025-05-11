"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"

export const authenticateUser = async (email: string, password: string) => {
	try {
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		})
		return {
			isSuccess: true,
		}
	} catch (error) {
		if (error instanceof AuthError) {
			return { isSuccess: false }
		}
		return error
	}
}

export const authGithub = async () => {
	await signIn("github")
}

export const authSignOut = async () => {
	try {
		await signOut({ redirect: false })
		return {
			isSuccess: true,
		}
	} catch (error) {
		if (error instanceof AuthError) {
			return { isSuccess: false }
		}
		return error
	}
}
