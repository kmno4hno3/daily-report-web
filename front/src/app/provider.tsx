"use client";

import { useFetchFiles } from "@/src/features/report/model/useFetchFiles";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  useFetchFiles();

  return <>{children}</>;
};
