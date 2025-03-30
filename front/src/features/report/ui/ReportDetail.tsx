"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import markdownit from "markdown-it";
import TurndownService from "turndown";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import type { Report } from "@/src/entities/files/type";
import axios from "axios";
import { currentDateAtom } from "@/src/entities/files/model";
import { useAtom } from "jotai";

export const ReportDetail = () => {
  const [currentDate] = useAtom(currentDateAtom);
  const [report, setFile] = useState<Report>();

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const url = `http://localhost:8000/api/report/${currentDate.year}/${currentDate.month}/${currentDate.day}`;
        await axios.get(url).then((res) => {
          console.log(res);
          const report: Report = res.data;
          if (report) setFile(report);
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          console.log("日報が見つかりません");
        } else {
          console.error("Error", err);
        }
      }
    };

    if (currentDate?.day) {
      fetchFile();
    }
  }, [currentDate]);

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
      content: report ? md.render(report.content) : "",
      immediatelyRender: false,
    },
    [report]
  );

  const saveContent = async () => {
    if (editor) {
      let turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        preformattedCode: true,
      });
      try {
        const url = `http://localhost:8000/api/report/${currentDate.year}/${currentDate.month}/${currentDate.day}`;
        await axios.put(url, {
          content: turndownService.turndown(editor.getHTML()),
        });
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    if (editor) {
      editor.on("blur", () => saveContent());
      return () => {
        editor.off("blur", () => saveContent());
      };
    }
  }, [editor]);

  // TODO: 一瞬ちらつきが起きるのを改善したい
  if (!(report instanceof Object)) {
    return <div>日報がありません</div>;
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">
        {currentDate.year}/{currentDate.month}/{currentDate.day}
      </h2>
      {editor && <EditorContent editor={editor} />}
    </div>
  );
};
