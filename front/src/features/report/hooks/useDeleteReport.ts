import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { messageDialogAtom } from "@/src/features/alert/model"
import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { deleteReportServer } from "../api/deleteReportServer"

export const useDeleteReport = (id: number) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [, setMessageDialog] = useAtom(messageDialogAtom)
  const [yearDates, setYearDates] = useAtom(yearDatesAtom)
  const [currentDate] = useAtom(currentDateAtom)

  const deleteReport = () => {
    startTransition(async () => {
      try {
        const result = await deleteReportServer(id)
        
        if (result.success) {
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
          
          // Navigate to home
          router.push("/")
        } else {
          setMessageDialog({
            title: "エラー",
            message: result.error || "レポートの削除に失敗しました",
            isOpen: true,
          })
        }
      } catch (error) {
        console.error("Delete error:", error)
        setMessageDialog({
          title: "エラー",
          message: "レポートの削除に失敗しました",
          isOpen: true,
        })
      }
    })
  }

  return { deleteReport, isDeleting: isPending }
}