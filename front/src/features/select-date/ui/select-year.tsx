import { currentDateAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"

import { ChevronLeft, ChevronRightIcon } from "lucide-react"

export const SelectYear = () => {
	const [currentDate, setCurrentDateAtom] = useAtom(currentDateAtom)

	const changeYear = (direction: "prev" | "next") => {
		const year =
			direction === "prev" ? currentDate.year - 1 : currentDate.year + 1
		setCurrentDateAtom({
			year,
			month: undefined,
			day: undefined,
		})
	}

	return (
		<div className="flex items-center justify-between p-4 bg-gray-200">
			<button
				type="button"
				onClick={() => changeYear("prev")}
				// disabled={selectedYearIndex === 0}
				className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
			>
				<ChevronLeft size={20} />
			</button>
			<span className="font-bold">{currentDate.year}</span>
			<button
				type="button"
				onClick={() => changeYear("next")}
				// disabled={selectedYearIndex === yearDates.length - 1}
				className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
			>
				<ChevronRightIcon size={20} />
			</button>
		</div>
	)
}
