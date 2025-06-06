import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	forbiddenRoutes,
	publicRoutes,
} from "./route"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
	const { nextUrl } = req
	const isLoggedIn = !!req.auth
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)
	const isForbiddenRoute = forbiddenRoutes.includes(nextUrl.pathname)

	if (isApiAuthRoute) {
		return
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return
	}

	if (isForbiddenRoute || (!isLoggedIn && !isPublicRoute)) {
		return Response.redirect(new URL("/auth/login", nextUrl))
	}
})

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
}
