"use client"

import { useFetchReportDates } from "@/src/features/report/model/useFetchReportDates"

export const Provider = ({ children }: { children: React.ReactNode }) => {
	useFetchReportDates()

	return <>{children}</>
}
