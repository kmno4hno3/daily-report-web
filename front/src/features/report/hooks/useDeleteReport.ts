import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { messageDialogAtom } from "@/src/features/alert/model"
import { useMutation } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { deleteReport } from "../api/deleteReport"

export const useDeleteReport = (id: number) => {
	const router = useRouter()
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [yearDates, setYearDates] = useAtom(yearDatesAtom)
	const [currentDate] = useAtom(currentDateAtom)

	const { mutate, isPending } = useMutation({
		mutationFn: () => deleteReport(id),
		onSuccess: () => {
			setMessageDialog({
				title: "レポート削除",
				message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
				isOpen: true,
			})
			const filteredYearDates = {
				...yearDates,
				months: yearDates?.months.map((month) => ({
					...month,
					days: month.days.filter((day) => day[1] !== id),
				})),
			}
			setYearDates(filteredYearDates)
			router.push("/")
		},
		onError: () => {
			setMessageDialog({
				title: "エラー",
				message: "レポートの削除に失敗しました",
				isOpen: true,
			})
		},
	})

	return { mutate, isPending }
}
