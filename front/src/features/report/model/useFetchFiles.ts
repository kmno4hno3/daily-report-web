"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { yearDatesAtom, currentYearAtom } from "@/src/entities/files/model";
import { getLocalFiles } from "@/src/features/report/api/getLocalFiles";

export const useFetchFiles = () => {
  const [, setYearDatesAtom] = useAtom(yearDatesAtom);
  const [currentYear, setCurrentYear] = useAtom(currentYearAtom);

  useEffect(() => {
    const today = new Date();
    setCurrentYear(today.getFullYear());
  }, []);

  useEffect(() => {
    const fetchFiles = async () => {
      if (currentYear) {
        const result = await getLocalFiles(currentYear);
        if (result) {
          setYearDatesAtom(result);
        }
      }
    };
    fetchFiles();
  }, [setYearDatesAtom, currentYear]);
};
