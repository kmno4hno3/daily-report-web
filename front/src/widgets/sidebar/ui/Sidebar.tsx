"use client";

import type React from "react";
import { SelectDateLayout } from "@/src/features/select-date";

export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w-64 h-screen bg-gray-100 overflow-y-auto flex flex-col">
        <SelectDateLayout />
      </div>
    </>
  );
};
