"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { all, createLowlight } from "lowlight"
import markdownit from "markdown-it"
import TurndownService from "turndown"
import { useCallback, useEffect } from "react"
import { updateReport } from "../api/updateReport"
import type { Report } from "@/src/entities/report/type"

interface Props {
  report: Report
}

const md = markdownit()
const lowlight = createLowlight(all)

export const ReportEditor = ({ report }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: report ? md.render(report.content) : "",
    immediatelyRender: false,
  }, [report])

  const saveContent = useCallback(async () => {
    if (!editor) return
    
    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
      preformattedCode: true,
    })
    
    try {
      await updateReport({
        id: report.id,
        content: turndownService.turndown(editor.getHTML()),
      })
    } catch (error) {
      console.error("Failed to save content:", error)
    }
  }, [editor, report.id])

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