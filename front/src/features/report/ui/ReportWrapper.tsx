"use client";

import type React from "react";
import type { Date } from "@/src/features/report/model/type";
import { usePathname } from "next/navigation";
import { yearDatesAtom } from "@/src/entities/files/model";
import { useAtom } from "jotai";
import { useEffect, useState, useMemo } from "react";
import { ReportLayout } from "./ReportLayout";
import { ReportDetail } from "./ReportDetail";
import { ReportList } from "./ReportList";

export const ReportWrapper = () => {
  const pathname = usePathname();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDay(),
  });
  const [yearDates] = useAtom(yearDatesAtom);
  const selectedMonthDays = yearDates?.months.find((month) => {
    month.month === selectedDate.month;
  });

  useEffect(() => {
    if (pathname?.startsWith("/report/list")) {
      const paths = pathname?.split("/");
      const [, , , year, month, day] = paths;
      setSelectedDate({
        year: Number(year),
        month: Number(month),
        day: Number(day),
      });
    }
  }, [pathname]);

  const renderChildren = () => {
    if (selectedDate) {
      return <ReportDetail selectedDate={selectedDate} />;
    } else if (yearDates?.months && selectedMonthDays) {
      return <ReportList selectedDate={selectedDate} />;
    }
  };

  return <ReportLayout>{renderChildren()}</ReportLayout>;
};
