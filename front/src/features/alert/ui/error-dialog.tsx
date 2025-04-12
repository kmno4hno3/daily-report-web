"use client"

import { errorDialogAtom } from "../model"
import { useAtom } from "jotai"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/src/shared/ui/alert-dialog"
import { Ban } from "lucide-react"

export const ErrorDialog = () => {
	const [errorDialog, setError] = useAtom(errorDialogAtom)
	const handleClick = () => {
		setError({
			title: "",
			message: "",
			isOpen: false,
		})
	}

	return (
		<AlertDialog open={errorDialog.isOpen}>
			<AlertDialogContent className="bg-white">
				<AlertDialogHeader>
					<AlertDialogTitle>{errorDialog.title}</AlertDialogTitle>
					<div className="flex items-center gap-2">
						<Ban className="text-red-500 flex-shrink-0" />
						<AlertDialogDescription className="flex-grow">
							{errorDialog.message}
						</AlertDialogDescription>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={handleClick}>OK</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
