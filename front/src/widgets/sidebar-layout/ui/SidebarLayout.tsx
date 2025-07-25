"use client"

import { SidebarProvider, SidebarTrigger } from "@/src/shared/ui/sidebar"
import { AppSidebar } from "@/src/widgets/sidebar/ui/Sidebar"
import type React from "react"

export const SidebarLayout: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<SidebarProvider className="w-full">
			<AppSidebar />
			<main className="flex flex-1 flex-col min-h-0 overflow-hidden">
				<SidebarTrigger />
				<div className="p-4 overflow-y-auto flex-1">{children}</div>
			</main>
		</SidebarProvider>
	)
}
