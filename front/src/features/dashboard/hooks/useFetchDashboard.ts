"use client"

import { dashboardAtom } from "@/src/entities/dashboard/model"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { getDashboard } from "../api/getDashboard"

export const useFetchDashboard = () => {
	const [, setDashboard] = useAtom(dashboardAtom)

	const { data, isPending, isError, error, refetch, isFetching } = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			const result = await getDashboard()
			if (!result) {
				throw new Error("ダッシュボードデータの取得に失敗しました")
			}
			return result
		},
		retry: 2,
		staleTime: 5 * 60 * 1000, // 5分間キャッシュ
	})

	useEffect(() => {
		if (data) {
			setDashboard(data)
		}
	}, [data, setDashboard])

	return {
		data,
		isPending,
		isError,
		error,
		refetch,
		isFetching,
	}
}
