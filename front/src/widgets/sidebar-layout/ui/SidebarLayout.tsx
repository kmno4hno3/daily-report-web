"use client"

import { SidebarProvider, SidebarTrigger } from "@/src/shared/ui/sidebar"
import { AppSidebar } from "@/src/widgets/sidebar/ui/Sidebar"
import type React from "react"

export const SidebarLayout: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<SidebarProvider className="flex-1 w-full">
			<AppSidebar />
			<main className="flex-1 flex flex-col min-h-0">
				<SidebarTrigger />
				<div className="flex-1 overflow-auto p-4">
					{children}
				</div>
			</main>
		</SidebarProvider>
	)
}
