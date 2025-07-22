"use client"

import { SidebarProvider, SidebarTrigger } from "@/src/shared/ui/sidebar"
import { AppSidebar } from "@/src/widgets/sidebar/ui/Sidebar"
import type React from "react"

export const SidebarLayout: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<SidebarProvider defaultOpen={true} className="flex-1">
			<AppSidebar />
			<main className="flex-1 relative">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	)
}
