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
		queryFn: () => getDashboard(),
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
