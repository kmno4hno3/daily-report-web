"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { getDates } from "@/src/features/report/api/getDates"
import { useAtom } from "jotai"
import { useEffect, useRef } from "react"

export const useFetchReportDetail = () => {
	const [, setYearDatesAtom] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)
	const prevYearRef = useRef<number | null>(null)

	useEffect(() => {
		const fetchReport = async () => {
			if (
				currentDate.year &&
				(!prevYearRef.current || currentDate.year !== prevYearRef.current)
			) {
				prevYearRef.current = currentDate.year
				const result = await getDates(currentDate.year)
				if (result) {
					setYearDatesAtom(result)
				}
			}
		}
		fetchReport()
	}, [currentDate.year, setYearDatesAtom])
}
