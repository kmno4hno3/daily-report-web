"use client"

import { useDeleteReport } from "../hooks/useDeleteReport"
import { useFetchReport } from "../hooks/useFetchReport"
import { ReportEditor } from "./ReportEditor"
import { ReportHeader } from "./ReportHeader"

interface Props {
	id: number
}

export const ReportDetail = ({ id }: Props) => {
	const { report, loading, error } = useFetchReport(id)
	const { deleteReport, isDeleting } = useDeleteReport(id)

	if (loading) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-gray-500">読み込み中...</div>
			</div>
		)
	}

	if (error || !report) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-red-500">{error || "日報が見つかりません"}</div>
			</div>
		)
	}

	return (
		<div className="flex-1 p-6 overflow-y-auto relative">
			<ReportHeader
				date={report.date}
				onDelete={deleteReport}
				isDeleting={isDeleting}
			/>
			<ReportEditor report={report} />
		</div>
	)
}
