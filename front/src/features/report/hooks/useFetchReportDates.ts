"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { getDates } from "@/src/features/report/api/getDates"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"

export const useFetchReportDates = () => {
	const [, setYearDatesAtom] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	const { data, isPending, isError, error, refetch, isFetching } = useQuery({
		queryKey: ["reportDates", currentDate.year],
		queryFn: () => {
			if (!currentDate.year) {
				throw new Error("Year is required")
			}
			return getDates(currentDate.year)
		},
		enabled: !!currentDate.year,
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000, // 10 minutes
		retry: 3,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
	})

	useEffect(() => {
		if (data) {
			setYearDatesAtom(data)
		}
	}, [data, setYearDatesAtom])

	return {
		data: data,
		isPending: isPending,
		isError: isError,
		error: error,
		refetch: refetch,
		isFetching: isFetching,
	}
}
