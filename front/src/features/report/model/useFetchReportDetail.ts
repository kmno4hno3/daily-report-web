"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { getDates } from "@/src/features/report/api/getDates"
import { useAtom } from "jotai"
import { useEffect } from "react"

export const useFetchReportDetail = () => {
	const [, setYearDatesAtom] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	useEffect(() => {
		const fetchReport = async () => {
			if (currentDate.year) {
				const result = await getDates(currentDate.year)
				if (result) {
					setYearDatesAtom(result)
				}
			}
		}
		fetchReport()
	}, [setYearDatesAtom, currentDate.year])
}
