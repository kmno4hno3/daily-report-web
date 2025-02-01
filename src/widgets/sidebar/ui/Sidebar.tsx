"use client";

import type React from "react";
import { useState } from "react";

import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronRightIcon,
} from "lucide-react";

interface report {
  id: number;
  date: string;
  title: string;
  content: string;
}
interface reports extends Array<report> {}
interface month {
  year: number;
  month: number;
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
    year: 2022,
    months: [
      {
        month: 12,
        reports: [
          {
            id: 5,
            date: "2022-12-31",
            title: "12月31日の日報",
            content: "年末の業務...",
          },
        ],
      },
    ],
  },
  {
    year: 2023,
    months: [
      {
        month: 5,
        reports: [
          {
            id: 1,
            date: "2023-05-01",
            title: "5月1日の日報",
            content: "今日は...",
          },
          {
            id: 2,
            date: "2023-05-02",
            title: "5月2日の日報",
            content: "本日は...",
          },
        ],
      },
      {
        month: 6,
        reports: [
          {
            id: 3,
            date: "2023-06-01",
            title: "6月1日の日報",
            content: "今日から6月...",
          },
          {
            id: 4,
            date: "2023-06-02",
            title: "6月2日の日報",
            content: "梅雨入りしました...",
          },
        ],
      },
    ],
  },
];

export const Sidebar: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [reportData, setReportData] = useState(mockData);
  const [openMonths, setOpenMonths] = useState<number[]>([]);
  const [activeIcon, setActiveIcon] = useState("reports");
  const [selectedReport, setSelectedReport] = useState<report | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<{
    year: number;
    month: number;
    reports: reports;
  } | null>(null);
  const selectedYear = reportData[selectedYearIndex];
  console.log(selectedYear);

  const toggleMonth = (month: number) => {
    setOpenMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };
  const changeYear = (direction: "prev" | "next") => {
    setSelectedYearIndex((prev) => {
      if (direction === "prev" && prev > 0) {
        return prev - 1;
      } else if (direction === "next" && prev < reportData.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };
  const handleSelectReport = (report: report) => {
    setSelectedReport(report);
    setSelectedMonth(null);
    setActiveIcon("reports");
  };
  const handleSelectMonth = (year: number, month: number, reports: reports) => {
    setSelectedMonth({ year, month, reports });
    setSelectedReport(null);
    setActiveIcon("reports");
  };

  return (
    <>
      <div className="w-64 h-screen bg-gray-100 overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between p-4 bg-gray-200">
          <button
            onClick={() => changeYear("prev")}
            disabled={selectedYearIndex === 0}
            className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-bold">{selectedYear.year}</span>
          <button
            onClick={() => changeYear("next")}
            disabled={selectedYearIndex === reportData.length - 1}
            className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {selectedYear.months.map((monthData) => (
            <div key={monthData.month} className="mb-2">
              <button
                className="flex items-center w-full px-4 py-2 text-left font-semibold hover:bg-gray-200"
                onClick={() => {
                  toggleMonth(monthData.month);
                  handleSelectMonth(
                    selectedYear.year,
                    monthData.month,
                    monthData.reports
                  );
                  setActiveIcon("reports");
                }}
              >
                {openMonths.includes(monthData.month) ? (
                  <ChevronDown className="mr-2" size={20} />
                ) : (
                  <ChevronRight className="mr-2" size={20} />
                )}
                {monthData.month}
              </button>
              {openMonths.includes(monthData.month) && (
                <div className="ml-6">
                  {monthData.reports.map((report) => (
                    <button
                      key={report.id}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
                      onClick={() => {
                        handleSelectReport(report);
                        setActiveIcon("reports");
                      }}
                    >
                      {report.date.split("-")[2]}: {report.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
