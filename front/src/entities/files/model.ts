import { atom } from "jotai";
import { Year } from "@/src/entities/files/type";

export const yearDatesAtom = atom<Year>();
yearDatesAtom.debugLabel = "yearDatesAtom";
