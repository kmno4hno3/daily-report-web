"use client"

import { useFetchReportDates } from "@/src/features/report/hooks/useFetchReportDates"
import { SelectDate, SelectYear } from "@/src/features/select-date"
import { Input } from "@/src/shared/ui/input"
import { Sidebar, SidebarContent, SidebarHeader } from "@/src/shared/ui/sidebar"
import { StickyNote } from "lucide-react"
import { Search } from "lucide-react"
import Link from "next/link"
import type React from "react"

export const AppSidebar: React.FC = () => {
	useFetchReportDates()

	return (
		<Sidebar>
			<SidebarHeader className="bg-gray-100">
				<Link href="/" className="flex items-center gap-2 p-4">
					<StickyNote className="w-6 h-6" />
					<p className="text-lg font-bold">日報管理ツール</p>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<div className="h-full bg-gray-100 p-2">
					<Input icon={<Search className="text-[#737373]" />} />
					<SelectYear className="mt-2" />
					<SelectDate className="mt-2" />
				</div>
			</SidebarContent>
		</Sidebar>
	)
}
