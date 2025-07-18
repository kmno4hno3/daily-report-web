"use client"

import { useFetchReportDates } from "@/src/features/report/hooks/useFetchReportDates"
import { SelectDate, SelectYear } from "@/src/features/select-date"
import { StickyNote } from "lucide-react"
import Link from "next/link"
import type React from "react"

export const Sidebar: React.FC = () => {
	useFetchReportDates()

	return (
		<>
			<div className="w-64 h-screen bg-gray-100 overflow-y-auto flex flex-col">
				<Link href="/" className="flex items-center gap-2 p-4">
					<StickyNote className="w-6 h-6" />
					<p className="text-lg font-bold">日報管理ツール</p>
				</Link>
				<SelectYear />
				<SelectDate />
			</div>
		</>
	)
}
