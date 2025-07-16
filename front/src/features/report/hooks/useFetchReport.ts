import { currentDateAtom } from "@/src/entities/report/model"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { getReportDetail } from "../api/getReportDetail"

export const useFetchReport = (id: number) => {
	const [, setCurrentDate] = useAtom(currentDateAtom)

	const { data, isPending, isError, error, refetch, isFetching } = useQuery({
		queryKey: ["report", id],
		queryFn: () => getReportDetail(id),
	})

	useEffect(() => {
		if (data) {
			setCurrentDate(data)
		}
	}, [data, setCurrentDate])

	return {
		report: data,
		isPending,
		isError,
		error,
		refetch,
		isFetching,
	}
}
