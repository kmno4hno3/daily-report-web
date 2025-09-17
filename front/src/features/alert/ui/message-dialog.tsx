"use client"

import { useAtom } from "jotai"
import { Check } from "lucide-react"
import { messageDialogAtom } from "../model"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/src/shared/ui/alert-dialog"

export const MessageDialog = () => {
	const [messageDialog, setMessageDialog] = useAtom(messageDialogAtom)
	const hadleClick = () => {
		setMessageDialog({
			title: "",
			message: "",
			isOpen: false,
		})
	}

	return (
		<AlertDialog open={messageDialog.isOpen}>
			<AlertDialogContent className="bg-white">
				<AlertDialogHeader>
					<AlertDialogTitle>{messageDialog.title}</AlertDialogTitle>
					<div className="flex items-center gap-2">
						<Check className="text-green-500 flex-shrink-0" />
						<AlertDialogDescription className="flex-grow">
							{messageDialog.message}
						</AlertDialogDescription>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={hadleClick}>OK</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
