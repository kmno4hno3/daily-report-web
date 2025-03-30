import { useState } from "react";

import { SelectYear } from "./select-year";
import { SelectDate } from "./select-date";

interface Date {
  year: number;
  month: number | undefined;
  day: number | undefined;
}

export const SelectDateLayout = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDay(),
  });

  return (
    <>
      <SelectYear
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <SelectDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};
