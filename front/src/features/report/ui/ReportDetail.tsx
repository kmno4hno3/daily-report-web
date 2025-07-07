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
import { useCallback, useEffect, useState } from "react"
import TurndownService from "turndown"
import { fetchReportAction } from "../api/fetchReportAction"

import { useAtom } from "jotai"

import { cn } from "@/lib/utils"
import { messageDialogAtom } from "@/src/features/alert/model"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { Trash2 } from "lucide-react"

interface Props {
	id: number
}

export const ReportDetail = ({ id }: Props) => {
	// const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [yearDates, setYearDates] = useAtom<Year>(yearDatesAtom)
	const [report, setFile] = useState<Report>()
  // const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
  const [currentDate, setCurrentDate] = useState<string|undefined>()

	useEffect(() => {
		const fetchFile = async () => {
			try {
				if (id) {
					const report = await fetchReportAction(id)
					if (report) {
						setFile(report)
            console.log("report~~~")
            console.log(report)
						setCurrentDate(report.date)
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
		[report],
	)

	const saveContent = useCallback(async () => {
		if (editor) {
			const turndownService = new TurndownService({
				headingStyle: "atx",
				codeBlockStyle: "fenced",
				preformattedCode: true,
			})
			try {
        // TODO: コンテンツ更新API実行
				// await updateReport({
				// 	id,
				// 	content: turndownService.turndown(editor.getHTML()),
				// })
			} catch (e) {
				console.log(e)
			}
		}
	}, [editor, id])
	// }, [editor, currentDate])
	useEffect(() => {
		if (editor) {
			editor.on("blur", () => saveContent())
			return () => {
				editor.off("blur", () => saveContent())
			}
		}
	}, [editor, saveContent])

	const deleteReport = async () => {
		try {
			const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/report/${currentDate.year}/${currentDate.month}/${currentDate.day}`
			await axios.delete(url).then(() => {
				setMessageDialog({
					title: "レポート削除",
					// message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
					message: `${currentDate}のレポートを削除しました`,
					isOpen: true,
				})
        // TODO: idでfilteringする
				const filteredYearDates = {
					...yearDates,
					months: yearDates?.months.map((month) => {
						if (month.month === currentDate.month) {
							return {
								...month,
								days: month.days.filter((day) => day !== currentDate.day),
							}
						}
						return month
					}),
				}
				setYearDates(filteredYearDates)
			})
		} catch (err) {
			if (axios.isAxiosError(err) && err.response?.status === 404) {
				// TODO: エラーハンドリング修正
				console.log("日報が見つかりません")
			} else {
				console.error("Error", err)
			}
		}
	}

	return (
		<div className="flex-1 p-6 overflow-y-auto relative">
			<Button
				onClick={deleteReport}
				className={cn(
					buttonVariants({ variant: "outline" }),
					"absolute right-5 top-5",
				)}
			>
				<Trash2 className=" text-red-500" />
			</Button>

			<h2 className="text-2xl font-bold mb-4">
				{/* {currentDate.year}/{currentDate.month}/{currentDate.day} */}
				{currentDate}
			</h2>
			{editor && <EditorContent editor={editor} />}
		</div>
	)
}
