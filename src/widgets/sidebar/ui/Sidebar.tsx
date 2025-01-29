import type React from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronRightIcon,
} from "lucide-react";
import type { YearData, Report } from "@/src/entities/report/model";

interface SidebarProps {
  data: YearData[];
  onSelectReport: (report: Report) => void;
  onSelectMonth: (year: string, month: string, reports: Report[]) => void;
  setActiveIcon: (icon: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  data,
  onSelectReport,
  onSelectMonth,
  setActiveIcon,
}) => {
  const [openMonths, setOpenMonths] = useState<string[]>([]);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const toggleMonth = (month: string) => {
    setOpenMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const changeYear = (direction: "prev" | "next") => {
    setSelectedYearIndex((prev) => {
      if (direction === "prev" && prev > 0) {
        return prev - 1;
      } else if (direction === "next" && prev < data.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const selectedYear = data[selectedYearIndex];

  return (
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
          disabled={selectedYearIndex === data.length - 1}
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
                onSelectMonth(
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
                      onSelectReport(report);
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
  );
};
