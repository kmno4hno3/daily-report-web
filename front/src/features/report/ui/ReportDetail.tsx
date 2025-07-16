"use client"

import { useDeleteReport } from "../hooks/useDeleteReport"
import { useFetchReport } from "../hooks/useFetchReport"
import { ReportEditor } from "./ReportEditor"
import { ReportHeader } from "./ReportHeader"

interface Props {
	id: number
}

export const ReportDetail = ({ id }: Props) => {
	const { report, isPending, isError, error } = useFetchReport(id)
	const { mutate, isPending: isDeleting } = useDeleteReport(id)

	if (isPending) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-gray-500">読み込み中...</div>
			</div>
		)
	}

	if (isError || !report) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-red-500">
					{error?.message || "日報が見つかりません"}
				</div>
			</div>
		)
	}

	return (
		<div className="flex-1 p-6 overflow-y-auto relative">
			<ReportHeader
				date={report.date}
				onDelete={mutate}
				isDeleting={isDeleting}
			/>
			<ReportEditor report={report} />
		</div>
	)
}
