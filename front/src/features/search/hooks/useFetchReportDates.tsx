"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { getDates } from "@/src/shared/api/getDates"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"

export const useFetchReportDates = (query: string) => {
	const [, setYearDatesAtom] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	const { data, isPending, isError, error, refetch, isFetching } = useQuery({
		queryKey: ["reportDates", currentDate.year, query],
		queryFn: () => {
			if (!currentDate.year) {
				throw new Error("Year is required")
			}
			return getDates(currentDate.year, query)
		},
		enabled: !!currentDate.year,
	})

	useEffect(() => {
		if (data) {
			console.log(data)
			setYearDatesAtom(data)
		}
	}, [data, setYearDatesAtom])

	return {
		data,
		isPending,
		isError,
		error,
		refetch,
		isFetching,
	}
}
