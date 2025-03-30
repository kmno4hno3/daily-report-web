import { atom } from "jotai";
import type { Year, Date } from "@/src/entities/files/type";

export const yearDatesAtom = atom<Year>();
yearDatesAtom.debugLabel = "yearDatesAtom";

export const currentDateAtom = atom<Date>({
  year: new Date().getFullYear(),
  month: undefined,
  day: undefined,
});
currentDateAtom.debugLabel = "currentDateAtom";
