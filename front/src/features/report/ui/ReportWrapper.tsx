"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { yearDatesAtom, currentDateAtom } from "@/src/entities/report/model";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { ReportDetail } from "./ReportDetail";
import { ReportList } from "./ReportList";

export const ReportWrapper = () => {
  const [yearDates] = useAtom(yearDatesAtom);
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  const pathname = usePathname();
  const selectedMonthDays = yearDates?.months.find((month) => {
    return month.month === currentDate.month;
  });

  useEffect(() => {
    if (pathname?.startsWith("/report/list")) {
      const paths = pathname?.split("/");
      const [, , , year, month, day] = paths;
      setCurrentDate({
        year: Number(year),
        month: Number(month),
        day: Number(day),
      });
    }
  }, [pathname]);

  const renderChildren = () => {
    if (currentDate.day) {
      return <ReportDetail />;
    } else if (yearDates?.months && selectedMonthDays) {
      return <ReportList />;
    }
  };

  return renderChildren();
};
