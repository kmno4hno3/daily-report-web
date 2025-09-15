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
		queryFn: async () => {
			if (!currentDate.year) {
				throw new Error("年が指定されていません")
			}
			const result = await getDates(currentDate.year, query)
			if (!result) {
				throw new Error("データの取得に失敗しました")
			}
			return result
		},
		enabled: !!currentDate.year,
		retry: 2,
		staleTime: 5 * 60 * 1000, // 5分間キャッシュ
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
