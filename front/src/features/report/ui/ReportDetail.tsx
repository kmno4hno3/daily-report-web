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

export const ReportDetail = () => {
	const [currentDate] = useAtom(currentDateAtom)
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [yearDates, setYearDates] = useAtom<Year>(yearDatesAtom)
	const [report, setFile] = useState<Report>()

	useEffect(() => {
		const fetchFile = async () => {
			try {
				if (currentDate.year && currentDate.month && currentDate.day) {
					const report = await fetchReportAction(
						currentDate.year,
						currentDate.month,
						currentDate.day,
					)
					if (report) setFile(report)
				}
			} catch (err) {
				if (axios.isAxiosError(err) && err.response?.status === 404) {
					console.log("日報が見つかりません")
				} else {
					console.error("Error", err)
				}
			}
		}

		if (currentDate?.day) {
			fetchFile()
		}
	}, [currentDate])

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
				await updateReport(
					currentDate,
					turndownService.turndown(editor.getHTML()),
				)
			} catch (e) {
				console.log(e)
			}
		}
	}, [editor, currentDate])
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
					message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
					isOpen: true,
				})
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
				{currentDate.year}/{currentDate.month}/{currentDate.day}
			</h2>
			{editor && <EditorContent editor={editor} />}
		</div>
	)
}
