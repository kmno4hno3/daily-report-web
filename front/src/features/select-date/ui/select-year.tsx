import { useAtom } from "jotai";
import { useState } from "react";
import { currentYearAtom } from "@/src/entities/files/model";

import { ChevronLeft, ChevronRightIcon } from "lucide-react";

interface SelectYearProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface Date {
  year: number;
  month: number | undefined;
  day: number | undefined;
}

export const SelectYear = ({
  selectedDate,
  setSelectedDate,
}: SelectYearProps) => {
  const [, setCurrentYear] = useAtom(currentYearAtom);

  const changeYear = (direction: "prev" | "next") => {
    const year =
      direction === "prev" ? selectedDate.year - 1 : selectedDate.year + 1;
    setCurrentYear(year);
    setSelectedDate({
      year,
      month: undefined,
      day: undefined,
    });
  };

  return (
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
  );
};
