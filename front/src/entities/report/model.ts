import type { Date as ReportDate, Year } from "@/src/entities/report/type"
import { atom } from "jotai"

export const yearDatesAtom = atom<Year>({
	year: new Date().getFullYear(),
	months: [],
})
yearDatesAtom.debugLabel = "yearDatesAtom"

export const currentDateAtom = atom<ReportDate>({
	year: new Date().getFullYear(),
	month: undefined,
	day: [],
})
currentDateAtom.debugLabel = "currentDateAtom"
