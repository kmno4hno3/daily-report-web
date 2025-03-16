"use client";

import { useFetchFiles } from "@/src/features/model/useFetchFiles";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  useFetchFiles();

  return <>{children}</>;
};
