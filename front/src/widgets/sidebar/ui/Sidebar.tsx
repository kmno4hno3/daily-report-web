"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Year } from "@/src/entities/files/type";
import { useAtom } from "jotai";
import Link from "next/link";
import { yearDatesAtom } from "@/src/entities/files/model";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronRightIcon,
} from "lucide-react";

interface Date {
  year: number;
  month: number | undefined;
  day: number | undefined;
}

export const Sidebar: React.FC = () => {
  const [yearDates] = useAtom(yearDatesAtom);
  const [openMonths, setOpenMonths] = useState<number[]>([]);
  const [, setActiveIcon] = useState("reports");
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDay(),
  });

  useEffect(() => {
    if (yearDates?.year) {
      setSelectedDate({
        ...selectedDate,
        year: yearDates?.year,
      });
    }
  }, [yearDates?.year]);

  if (!yearDates?.year) {
    return <div>データがありません</div>;
  }

  const toggleMonth = (month: number) => {
    setOpenMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };
  const handleSelectDate = (
    year: number,
    month: number | undefined = undefined,
    day: number | undefined = undefined
  ) => {
    setSelectedDate({
      year: year,
      month: month,
      day: day,
    });
    setActiveIcon("reports");
  };
  const changeYear = (direction: "prev" | "next") => {
    const year =
      direction === "prev" ? selectedDate.year - 1 : selectedDate.year + 1;
    setSelectedDate({
      year,
      month: undefined,
      day: undefined,
    });
  };

  return (
    <>
      <div className="w-64 h-screen bg-gray-100 overflow-y-auto flex flex-col">
        {/* 年単位 */}
        <div className="flex items-center justify-between p-4 bg-gray-200">
          <button
            onClick={() => changeYear("prev")}
            // disabled={selectedYearIndex === 0}
            className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-bold">{selectedDate.year}</span>
          <button
            onClick={() => changeYear("next")}
            // disabled={selectedYearIndex === yearDates.length - 1}
            className="p-1 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {yearDates.months.map((month) => (
            // 月単位
            <div key={month.month} className="mb-2">
              <Link
                href={`/report/list/${selectedDate.year}/${month.month}`}
                key={`${selectedDate.year}-${month.month}`}
              >
                <button
                  className="flex items-center w-full px-4 py-2 text-left font-semibold hover:bg-gray-200"
                  onClick={() => {
                    toggleMonth(month.month);
                    handleSelectDate(selectedDate.year, month.month);
                    setActiveIcon("reports");
                  }}
                >
                  {openMonths.includes(month.month) ? (
                    <ChevronDown className="mr-2" size={20} />
                  ) : (
                    <ChevronRight className="mr-2" size={20} />
                  )}
                  {month.month}
                </button>
              </Link>
              {openMonths.includes(month.month) && (
                <div className="ml-6">
                  {month.days.map((day) => (
                    <Link
                      href={`/report/list/${selectedDate.year}/${month.month}/${day}`}
                      key={`${day}`}
                    >
                      <button
                        key={day}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
                        onClick={() => {
                          handleSelectDate(selectedDate.year, month.month, day);
                          setActiveIcon("reports");
                        }}
                      >
                        {day}
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
