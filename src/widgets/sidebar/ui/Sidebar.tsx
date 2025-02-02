"use client";

import type React from "react";
import { useState } from "react";
import { Reports, Report } from "@/src/entities/report/model";
import { mockData } from "@/src/entities/report/const";
import Link from "next/link";

import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronRightIcon,
} from "lucide-react";

export const Sidebar: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [reportData, setReportData] = useState(mockData);
  const [openMonths, setOpenMonths] = useState<number[]>([]);
  const [activeIcon, setActiveIcon] = useState("reports");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<{
    year: number;
    month: number;
    reports: Reports;
  } | null>(null);
  const selectedYear = reportData[selectedYearIndex];

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
  const handleSelectReport = (report: Report) => {
    setSelectedReport(report);
    setSelectedMonth(null);
    setActiveIcon("reports");
  };
  const handleSelectMonth = (year: number, month: number, reports: Reports) => {
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
              <Link
                href={`/report/list/${selectedYear.year}/${monthData.month}`}
                key={`${selectedYear.year}-${monthData.month}`}
              >
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
              </Link>
              {openMonths.includes(monthData.month) && (
                <div className="ml-6">
                  {monthData.reports.map((report) => (
                    <Link
                      href={`/report/list/${selectedYear.year}/${monthData.month}/${report.date}`}
                      key={`${selectedYear.year}-${monthData.month}`}
                    >
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
                    </Link>
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
