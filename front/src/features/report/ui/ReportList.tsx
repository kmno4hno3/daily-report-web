"use client";

import Link from "next/link";
import { yearDatesAtom } from "@/src/entities/files/model";
import type { Date } from "@/src/features/model/type";
import { useAtom } from "jotai";

interface props {
  selectedDate: Date;
}

export const ReportList = ({ selectedDate }: props) => {
  const [yearDates] = useAtom(yearDatesAtom);

  if (!yearDates?.year || !selectedDate?.month)
    return <div>表示する日報がありません</div>;

  const selectedDays = yearDates.months.find((month) => {
    month.month === selectedDate.month;
  });

  return (
    selectedDate && (
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {selectedDate.year}年 {selectedDate.month}月の日報一覧
        </h2>
        <div className="grid gap-4">
          {selectedDays &&
            selectedDays.days.map((day: number) => (
              <Link
                href={`/report/list/${selectedDate.year}/${selectedDate.month}/${selectedDate.day}`}
                key={`${day}`}
              >
                <button
                  key={day}
                  className="text-left p-4 border rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold">{day}</h3>
                  <p className="text-gray-600 truncate">{day}</p>
                </button>
              </Link>
            ))}
        </div>
      </div>
    )
  );
};
