import { SignJWT } from "jose"
import type { User } from "next-auth"

export const createSignedJwt = async (user: User) => {
	const secret = new TextEncoder().encode(process.env.JWT_SECRET)
	return await new SignJWT({ id: user.id, email: user.email, name: user.name })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1h")
		.sign(secret)
}
