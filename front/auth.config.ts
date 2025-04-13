import type { NextAuthConfig } from "next-auth"
import github from "next-auth/providers/github"

export default { providers: [github] } satisfies NextAuthConfig
