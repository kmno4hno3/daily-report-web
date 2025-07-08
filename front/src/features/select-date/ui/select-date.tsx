import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { ChevronDown, ChevronRight } from "lucide-react"

export const SelectDate = () => {
	const [yearDates] = useAtom(yearDatesAtom)
	const [currentDate, setCurrentDateAtom] = useAtom(currentDateAtom)
	const [openMonths, setOpenMonths] = useState<number[]>([])
	const [, setActiveIcon] = useState("reports")
	const isInitialMount = useRef(true)

	useEffect(() => {
		if (isInitialMount.current && yearDates?.year && !currentDate.year) {
			isInitialMount.current = false
			setCurrentDateAtom({
				year: yearDates.year,
				month: undefined,
				day: undefined,
			})
		}
	}, [yearDates?.year, currentDate.year, setCurrentDateAtom])

	const toggleMonth = (month: number) => {
		setOpenMonths((prev) =>
			prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month],
		)
	}

	return (
		<div className="flex-1 overflow-y-auto">
			{currentDate &&
				yearDates?.months?.map((monthItem) => (
					// 月単位
					<div key={monthItem.month} className="mb-2">
						<button
							type="button"
							className="flex items-center w-full px-4 py-2 text-left font-semibold hover:bg-gray-200"
							onClick={() => {
								toggleMonth(monthItem.month)
								setActiveIcon("reports")
							}}
						>
							{openMonths.includes(monthItem.month) ? (
								<ChevronDown className="mr-2" size={20} />
							) : (
								<ChevronRight className="mr-2" size={20} />
							)}
							{monthItem.month}
						</button>
						{openMonths.includes(monthItem.month) && (
							<div className="ml-6">
								{monthItem.days.map((day) => (
									<Link href={`/report/${day[1]}`} key={`${day[0]}-${day[0]}`}>
										<button
											type="button"
											key={day[0]}
											className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
											onClick={() => {
												setActiveIcon("reports")
											}}
										>
											{day[0]}
										</button>
									</Link>
								))}
							</div>
						)}
					</div>
				))}
		</div>
	)
}
