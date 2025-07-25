import { currentDateAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"

// TODO: featureなのでentitiesあたりに移行するなど検討
import { useFetchDashboard } from "@/src/features/dashboard/hooks/useFetchDashboard"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/src/shared/ui/select"
import { ChevronLeft, ChevronRightIcon } from "lucide-react"

export const SelectYear = () => {
	const [currentDate, setCurrentDateAtom] = useAtom(currentDateAtom)
	const changeYear = (year: number) => {
		console.log(year)
		setCurrentDateAtom({
			year,
			month: undefined,
			day: undefined,
		})
	}

	const { data } = useFetchDashboard()
	const yearlySummary = data?.yearly_summary
	const years = yearlySummary?.map((summary) => summary.year)

	return (
		<div className="flex items-center justify-between p-4">
			<Select onValueChange={(value) => changeYear(Number(value))}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="年" />
				</SelectTrigger>
				<SelectContent>
					{years?.map((year) => (
						<SelectItem
							key={year}
							value={year.toString()}
							onClick={() => changeYear(year)}
						>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
