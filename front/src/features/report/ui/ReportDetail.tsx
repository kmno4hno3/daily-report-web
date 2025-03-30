"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import markdownit from "markdown-it";
import TurndownService from "turndown";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import type { Report } from "@/src/entities/report/type";
import axios from "axios";
import { currentDateAtom } from "@/src/entities/report/model";
import { useAtom } from "jotai";

import { Trash2 } from "lucide-react";
import { Button, buttonVariants } from "@/src/shared/ui/button";
import { cn } from "@/lib/utils";
import { messageDialogAtom } from "@/src/features/alert/model";

export const ReportDetail = () => {
  const [currentDate] = useAtom(currentDateAtom);
  const [, setMessageDialog] = useAtom(messageDialogAtom);
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

  const deleteReport = async () => {
    try {
      const url = `http://localhost:8000/api/report/${currentDate.year}/${currentDate.month}/${currentDate.day}`;
      await axios.delete(url).then(() => {
        setMessageDialog({
          title: "レポート削除",
          message: `${currentDate.year}-${currentDate.month}-${currentDate.day}のレポートを削除しました`,
          isOpen: true,
        });
      });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        // TODO: エラーハンドリング修正
        console.log("日報が見つかりません");
      } else {
        console.error("Error", err);
      }
    }
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto relative">
      <Button
        onClick={deleteReport}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-5 top-5"
        )}
      >
        <Trash2 className=" text-red-500" />
      </Button>

      <h2 className="text-2xl font-bold mb-4">
        {currentDate.year}/{currentDate.month}/{currentDate.day}
      </h2>
      {editor && <EditorContent editor={editor} />}
    </div>
  );
};
