"use client"

import { useFetchReportDates } from "@/src/features/report/hooks/useFetchReportDates"
import { SelectDate, SelectYear } from "@/src/features/select-date"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/src/shared/ui/sidebar"
import { StickyNote } from "lucide-react"
import Link from "next/link"
import type React from "react"

export const AppSidebar: React.FC = () => {
	useFetchReportDates()

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader />
			<SidebarContent>
				<div className="w-full h-full bg-gray-100 overflow-y-auto flex flex-col">
					<Link href="/" className="flex items-center gap-2 p-4">
						<StickyNote className="w-6 h-6" />
						<p className="text-lg font-bold">日報管理ツール</p>
					</Link>
					<SelectYear />
					<SelectDate />
				</div>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
