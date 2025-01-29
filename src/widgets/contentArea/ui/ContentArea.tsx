import type React from "react";
import { NewReportForm } from "./NewReportForm";
import { Settings } from "./Settings";
import { Help } from "./Help";

interface Report {
  id: string;
  date: string;
  title: string;
  content: string;
}

interface ContentAreaProps {
  activeIcon: string;
  selectedReport: Report | null;
  selectedMonth: { year: string; month: string; reports: Report[] } | null;
  onSelectReport: (report: Report) => void;
  onCreateReport: (report: {
    date: string;
    title: string;
    content: string;
  }) => void;
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  activeIcon,
  selectedReport,
  selectedMonth,
  onSelectReport,
  onCreateReport,
}) => {
  if (activeIcon === "new") {
    return (
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">新規日報作成</h2>
        <NewReportForm onSubmit={onCreateReport} />
      </div>
    );
  }

  if (activeIcon === "settings") {
    return <Settings />;
  }

  if (activeIcon === "help") {
    return <Help />;
  }

  if (selectedMonth) {
    return (
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {selectedMonth.year} {selectedMonth.month}の日報一覧
        </h2>
        <div className="grid gap-4">
          {selectedMonth.reports.map((report) => (
            <button
              key={report.id}
              className="text-left p-4 border rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => onSelectReport(report)}
            >
              <h3 className="font-semibold">
                {report.date}: {report.title}
              </h3>
              <p className="text-gray-600 truncate">{report.content}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (selectedReport) {
    return (
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{selectedReport.title}</h2>
        <p className="text-gray-600 mb-4">日付: {selectedReport.date}</p>
        <div className="whitespace-pre-wrap">{selectedReport.content}</div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 flex items-center justify-center">
      <p className="text-gray-500">日報または月を選択してください。</p>
    </div>
  );
};
