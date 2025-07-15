"use client"

import { yearDatesAtom } from "@/src/entities/report/model"
import { currentDateAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"
import Link from "next/link"

export const ReportList = () => {
	const [yearDates] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	if (!yearDates?.year || !currentDate?.month)
		return <div>表示する日報がありません</div>

	const selectedDays = yearDates.months.find((month) => {
		return month.month === currentDate.month
	})

	return (
		currentDate && (
			<div className="flex-1 p-6 overflow-y-auto">
				<h2 className="text-2xl font-bold mb-4">
					{currentDate.year}年 {currentDate.month}月の日報一覧
				</h2>
				<div className="grid gap-4">
					{selectedDays?.days.map((day: [number, number]) => (
						<Link
							href={`/report/list/${currentDate.year}/${currentDate.month}/${day[0]}`}
							key={`${day[0]}`}
						>
							<button
								type="button"
								key={day[0]}
								className="text-left p-4 border rounded-lg hover:bg-gray-100 transition-colors"
							>
								<h3 className="font-semibold">{day}</h3>
								{/* TODO: タイトルを入れたい */}
								<p className="text-gray-600 truncate">タイトルを入れたい</p>
							</button>
						</Link>
					))}
				</div>
			</div>
		)
	)
}
