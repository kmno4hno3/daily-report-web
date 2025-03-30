"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { yearDatesAtom, currentDateAtom } from "@/src/entities/files/model";
import { getDates } from "@/src/features/report/api/getLocalFiles";

export const useFetchFiles = () => {
  const [, setYearDatesAtom] = useAtom(yearDatesAtom);
  const [currentDate] = useAtom(currentDateAtom);

  useEffect(() => {
    const fetchFiles = async () => {
      if (currentDate.year) {
        const result = await getDates(currentDate.year);
        if (result) {
          setYearDatesAtom(result);
        }
      }
    };
    fetchFiles();
  }, [setYearDatesAtom, currentDate.year]);
};
