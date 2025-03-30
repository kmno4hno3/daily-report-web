"use client";

import { useFetchReportDetail } from "@/src/features/report/model/useFetchReportDetail";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  useFetchReportDetail();

  return <>{children}</>;
};
