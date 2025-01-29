"use client";

import { Sidebar } from "@/src/widgets/sidebar";
import { Navbar } from "@/src/widgets/navbar";
import { ContentArea } from "@/src/widgets/contentArea";

import { useState } from "react";

interface report {
  id: string;
  date: string;
  title: string;
  content: string;
}
interface reports extends Array<report> {}
interface month {
  year: string;
  month: string;
  reports: reports;
}

interface newContent {
  date: string;
  title: string;
  content: string;
}

// モックデータ
const mockData = [
  {
    year: "2023年",
    months: [
      {
        month: "5月",
        reports: [
          {
            id: "1",
            date: "2023-05-01",
            title: "5月1日の日報",
            content: "今日は...",
          },
          {
            id: "2",
            date: "2023-05-02",
            title: "5月2日の日報",
            content: "本日は...",
          },
        ],
      },
      {
        month: "6月",
        reports: [
          {
            id: "3",
            date: "2023-06-01",
            title: "6月1日の日報",
            content: "今日から6月...",
          },
          {
            id: "4",
            date: "2023-06-02",
            title: "6月2日の日報",
            content: "梅雨入りしました...",
          },
        ],
      },
    ],
  },
  {
    year: "2022年",
    months: [
      {
        month: "12月",
        reports: [
          {
            id: "5",
            date: "2022-12-31",
            title: "12月31日の日報",
            content: "年末の業務...",
          },
        ],
      },
    ],
  },
];

export const HomePage = () => {
  const [activeIcon, setActiveIcon] = useState("reports");
  const [selectedReport, setSelectedReport] = useState<report | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<month | null>(null);
  const [reportData, setReportData] = useState(mockData);

  const handleSelectReport = (report: report) => {
    setSelectedReport(report);
    setSelectedMonth(null);
    setActiveIcon("reports");
  };

  const handleSelectMonth = (year: string, month: string, reports: reports) => {
    console.log(year);
    console.log(month);
    console.log(reports);
    setSelectedMonth({ year, month, reports });
    setSelectedReport(null);
    setActiveIcon("reports");
  };

  const handleCreateReport = (newReport: newContent) => {
    console.log(newReport);
    const [year, month] = newReport.date.split("-");
    const yearStr = `${year}年`;
    const monthStr = `${Number.parseInt(month)}月`;

    const updatedData = reportData.map((yearData) => {
      if (yearData.year === yearStr) {
        const monthIndex = yearData.months.findIndex(
          (m) => m.month === monthStr
        );
        if (monthIndex !== -1) {
          yearData.months[monthIndex].reports.push({
            id: Date.now().toString(),
            ...newReport,
          });
        } else {
          yearData.months.push({
            month: monthStr,
            reports: [
              {
                id: Date.now().toString(),
                ...newReport,
              },
            ],
          });
        }
      }
      return yearData;
    });

    setReportData(updatedData);
    setActiveIcon("reports");
  };

  return (
    <div className="flex h-screen">
      <Navbar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <Sidebar
        data={reportData}
        onSelectReport={handleSelectReport}
        onSelectMonth={handleSelectMonth}
        setActiveIcon={setActiveIcon}
      />
      <ContentArea
        activeIcon={activeIcon}
        selectedReport={selectedReport}
        selectedMonth={selectedMonth}
        onSelectReport={handleSelectReport}
        onCreateReport={handleCreateReport}
      />
    </div>
  );
};
