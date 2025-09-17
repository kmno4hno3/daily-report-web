"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { useState } from "react"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			gcTime: 5 * 60 * 1000,
			retry: 3,
			retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
			refetchOnWindowFocus: false,
		},
	},
})

export const Provider = ({ children }: { children: React.ReactNode }) => {
	const [client] = useState(() => queryClient)

	return (
		<SessionProvider>
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		</SessionProvider>
	)
}
