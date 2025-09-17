import type { AlertDialog, ErrorDialog } from "@/src/entities/report/type"
import { atom } from "jotai"

export const messageDialogAtom = atom<AlertDialog>({
	title: "",
	message: "",
	isOpen: false,
})
messageDialogAtom.debugLabel = "messageDialogAtom"

export const errorDialogAtom = atom<ErrorDialog>({
	title: "",
	message: "",
	isOpen: false,
})
errorDialogAtom.debugLabel = "errorDialogAtom"
