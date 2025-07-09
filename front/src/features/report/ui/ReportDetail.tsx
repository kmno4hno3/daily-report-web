"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import type { Report } from "@/src/entities/report/type"
import type { Year } from "@/src/entities/report/type"
import { updateReport } from "@/src/features/report/api/updateReport"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import axios from "axios"
import { all, createLowlight } from "lowlight"
import markdownit from "markdown-it"
import { useCallback, useEffect, useState, useTransition } from "react"
import TurndownService from "turndown"
import { fetchReportAction } from "../api/fetchReportAction"
import { deleteReportServer } from "../api/deleteReportServer"
import { useRouter } from 'next/navigation'

import { useAtom } from "jotai"

import { cn } from "@/lib/utils"
import { messageDialogAtom } from "@/src/features/alert/model"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { Trash2 } from "lucide-react"

interface Props {
	id: number
}

export const ReportDetail = ({ id }: Props) => {
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [yearDates, setYearDates] = useAtom<Year>(yearDatesAtom)
	const [report, setFile] = useState<Report>()
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

	useEffect(() => {
		const fetchFile = async () => {
			try {
				if (id) {
					const report = await fetchReportAction(id)
					if (report) {
						setFile(report)
            const [year, month, day] = report.date.split("-")
						setCurrentDate({
              year: Number(year),
              month: Number(month),
              day: Number(day),
            })
					}
				}
			} catch (err) {
				if (axios.isAxiosError(err) && err.response?.status === 404) {
					console.log("日報が見つかりません")
				} else {
					console.error("Error", err)
				}
			}
		}

		if (id) {
			fetchFile()
		}
	}, [id])

	const md = markdownit()
	const lowlight = createLowlight(all)
	const editor = useEditor(
		{
			extensions: [
				StarterKit,
				CodeBlockLowlight.configure({
					lowlight,
				}),
			],
			content: report ? md.render(report.content) : "",
			immediatelyRender: false,
		},
		[report, setCurrentDate],
	)

	const saveContent = useCallback(async () => {
		if (editor) {
			const turndownService = new TurndownService({
				headingStyle: "atx",
				codeBlockStyle: "fenced",
				preformattedCode: true,
			})
			try {
				await updateReport({
					id,
					content: turndownService.turndown(editor.getHTML()),
				})
			} catch (e) {
				console.log(e)
			}
		}
	}, [editor, id])
	useEffect(() => {
		if (editor) {
			editor.on("blur", () => saveContent())
			return () => {
				editor.off("blur", () => saveContent())
			}
		}
	}, [editor, saveContent])

	const handleDeleteReport = () => {
		const formData = new FormData()
		formData.append("id", id.toString())
		
		startTransition(async () => {
			try {
				// Update state first
				setMessageDialog({
					title: "レポート削除",
					message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
					isOpen: true,
				})
				const filteredYearDates = {
					...yearDates,
					months: yearDates?.months.map((month) => {
						return {
							...month,
							days: month.days.filter((day) => day[1] !== id),
						}
					}),
				}
				setYearDates(filteredYearDates)
				
				// Then call server action which will redirect
				await deleteReportServer(id)
			} catch (err) {
				console.error("Error", err)
			}
		})
	}

	return (
		<div className="flex-1 p-6 overflow-y-auto relative">
			<form action={async () => {
				// Update state first
				setMessageDialog({
					title: "レポート削除",
					message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
					isOpen: true,
				})
				const filteredYearDates = {
					...yearDates,
					months: yearDates?.months.map((month) => {
						return {
							...month,
							days: month.days.filter((day) => day[1] !== id),
						}
					}),
				}
				setYearDates(filteredYearDates)
				
				// Then call server action
				await deleteReportServer(id)
			}}>
				<Button
					type="submit"
					disabled={isPending}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"absolute right-5 top-5",
					)}
				>
					<Trash2 className=" text-red-500" />
				</Button>
			</form>

			<h2 className="text-2xl font-bold mb-4">
				{currentDate.year}/{currentDate.month}/{currentDate.day}
			</h2>
			{editor && <EditorContent editor={editor} />}
		</div>
	)
}
