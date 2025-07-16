import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import type { Year } from "@/src/entities/report/type"
import type { Report } from "@/src/entities/report/type"
import { messageDialogAtom } from "@/src/features/alert/model"
import { useMutation } from "@tanstack/react-query"
import { format } from "date-fns"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { createReport } from "../api/createReport"

export const useCreateReport = () => {
	const router = useRouter()
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [yearDates, setYearDates] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	const { mutate, isPending, data } = useMutation({
		mutationFn: ({ date, content }: { date: Date; content: string }) =>
			createReport({ date, content }),
		onSuccess: (data: Report) => {
			const formatDate = format(data.date, "yyyy-MM-dd")
			setMessageDialog({
				title: "レポート作成",
				message: `${formatDate}のレポートを作成しました`,
				isOpen: true,
			})
			console.log("data~~~~")
			console.log(data)
			// const filteredYearDates = {
			// 	...yearDates,
			// 	months: yearDates?.months.map((month) => {
			// 		if (month.month === data.date.getMonth() + 1) {
			// 			const tmpDays = [...month.days, data.date.getDate()]
			// 			return {
			// 				...month,
			// 				days: tmpDays.sort(),
			// 			}
			// 		}
			// 		return month
			// 	}),
			// } as Year

			// setYearDates(filteredYearDates)
		},
		onError: () => {
			setMessageDialog({
				title: "エラー",
				message: "レポートの作成に失敗しました",
				isOpen: true,
			})
		},
	})

	return { mutate, isPending, data }
}
