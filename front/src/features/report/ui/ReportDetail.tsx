"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import markdownit from "markdown-it";
import TurndownService from "turndown";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import type { Date } from "@/src/features/report/model/type";
import type { Report } from "@/src/entities/files/type";
import axios from "axios";

interface Props {
  selectedDate: Date;
}

export const ReportDetail = ({ selectedDate }: Props) => {
  const [report, setFile] = useState<string>();

  useEffect(() => {
    const fetchFile = async () => {
      try {
        await axios.get("").then((res) => {
          const report: Report = res.data;
          setFile(report.content);
        });
      } catch (err) {
        console.error("Error", err);
      }
    };

    if (selectedDate?.day) {
      // TODO: 日報本文取得API自走
      fetchFile();
    }
  }, [selectedDate]);

  const md = markdownit();
  const lowlight = createLowlight(all);
  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
      content: report ? md.render(report) : "",
      immediatelyRender: false,
    },
    [report]
  );

  const saveContent = async (path: string) => {
    if (editor) {
      let turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        preformattedCode: true,
      });
      try {
        // await invoke<string>("save_content", {
        //   path,
        //   mdText: turndownService.turndown(editor.getHTML()),
        // });
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    if (editor) {
      // const path = `/Users/tatsuya/Workspace/個人開発/daily-report-files/${selectedYear}/${selectedMonth}/${selectedDateReport.date}.md`;
      // editor.on("blur", () => saveContent(path));
      // return () => {
      //   editor.off("blur", () => saveContent(path));
      // };
    }
  }, [editor]);

  // TODO: 一瞬ちらつきが起きるのを改善したい
  if (!report) {
    return <div>日報がありません</div>;
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">
        {selectedDate.year}/{selectedDate.month}/{selectedDate.day}
      </h2>
      {editor && <EditorContent editor={editor} />}
    </div>
  );
};
