"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { yearDatesAtom } from "@/src/entities/files/model";
import { getLocalFiles } from "@/src/features/api/getLocalFiles";

export const useFetchFiles = () => {
  const [, setYearDatesAtom] = useAtom(yearDatesAtom);

  useEffect(() => {
    const fetchFiles = async () => {
      const result = await getLocalFiles();
      if (result) {
        setYearDatesAtom(result);
      }
    };
    fetchFiles();
  }, [setYearDatesAtom]);
};
