import { getUserByEmail } from "@/data/user"
import axios from "axios"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import { z } from "zod"

const credentialsSchema = z.object({
	email: z.string().email(),
	password: z.string(),
})

export default {
	providers: [
		GitHub,
		Credentials({
			async authorize(credentials) {
				const result = credentialsSchema.safeParse(credentials)
				if (!result.success) return null
				const { email, password } = result.data
				const user = await getUserByEmail(email)
				if (!user || !user.password) {
					return null
				}
				const passwordMatch = user.password === password
				if (passwordMatch) {
					return {
						...user,
						id: user.id.toString(),
					}
				}

				return null
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (session.user && token.sub) {
				session.user.id = token.sub
			}
			return session
		},
	},
	// trustHost:
	// 	process.env.NODE_ENV === "development" ||
	// 	process.env.VERCEL_ENV === "preview",
} satisfies NextAuthConfig
