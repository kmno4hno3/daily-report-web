import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import Link from "next/link";
import { yearDatesAtom } from "@/src/entities/files/model";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SelectDateProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface Date {
  year: number;
  month: number | undefined;
  day: number | undefined;
}

export const SelectDate = ({
  selectedDate,
  setSelectedDate,
}: SelectDateProps) => {
  const [yearDates] = useAtom(yearDatesAtom);

  const [openMonths, setOpenMonths] = useState<number[]>([]);
  const [, setActiveIcon] = useState("reports");

  useEffect(() => {
    if (yearDates?.year) {
      setSelectedDate({
        ...selectedDate,
        year: yearDates?.year,
      });
    }
  }, [yearDates?.year]);

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

  return (
    <div className="flex-1 overflow-y-auto">
      {yearDates?.months?.map((month) => (
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
  );
};
