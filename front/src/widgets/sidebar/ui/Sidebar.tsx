"use client"

import { useFetchReportDates } from "@/src/features/report/model/useFetchReportDates"
import { SelectDate, SelectYear } from "@/src/features/select-date"
import type React from "react"

export const Sidebar: React.FC = () => {
	useFetchReportDates()

	return (
		<>
			<div className="w-64 h-screen bg-gray-100 overflow-y-auto flex flex-col">
				{/* <SelectDateLayout /> */}
				<SelectYear />
				<SelectDate />
			</div>
		</>
	)
}
