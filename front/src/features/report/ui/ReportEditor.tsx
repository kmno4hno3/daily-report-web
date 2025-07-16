"use client"

import type { Report } from "@/src/entities/report/type"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { all, createLowlight } from "lowlight"
import markdownit from "markdown-it"
import { useCallback, useEffect } from "react"
import TurndownService from "turndown"
import { useUpdateReport } from "../hooks/useUpdateReport"

interface Props {
	report: Report
}

const md = markdownit()
const lowlight = createLowlight(all)

export const ReportEditor = ({ report }: Props) => {
	const { mutate } = useUpdateReport()

	const editor = useEditor(
		{
			extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
			content: report ? md.render(report.content) : "",
			immediatelyRender: false,
		},
		[report],
	)

	const saveContent = useCallback(() => {
		if (!editor) return

		const turndownService = new TurndownService({
			headingStyle: "atx",
			codeBlockStyle: "fenced",
			preformattedCode: true,
		})
		mutate({
			id: report.id,
			content: turndownService.turndown(editor.getHTML()),
		})
	}, [editor, mutate, report.id])

	useEffect(() => {
		if (!editor) return

		const handleBlur = () => saveContent()
		editor.on("blur", handleBlur)

		return () => {
			editor.off("blur", handleBlur)
		}
	}, [editor, saveContent])

	if (!editor) return null

	return <EditorContent editor={editor} />
}
