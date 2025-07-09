import { currentDateAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { fetchReportAction } from "../api/fetchReportAction"
import type { Report } from "../types"

export const useFetchReport = (id: number) => {
	const [report, setReport] = useState<Report | undefined>(undefined)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | undefined>(undefined)
	const [, setCurrentDate] = useAtom(currentDateAtom)

	useEffect(() => {
		const fetchReport = async () => {
			try {
				setLoading(true)
				setError(undefined)
				const data = await fetchReportAction(id)

				if (data) {
					console.log(data)
					setReport(data)
					const [year, month, day] = data.date.split("-").map(Number)
					setCurrentDate({ year, month, day })
				}
			} catch (err) {
				console.error("Failed to fetch report:", err)
				setError("レポートの取得に失敗しました")
			} finally {
				setLoading(false)
			}
		}

		fetchReport()
	}, [id, setCurrentDate])

	return { report, loading, error }
}
