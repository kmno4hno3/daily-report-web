export interface Year {
	year: number
	months: Month[]
}

export interface Month {
	month: number
	days: [number, number][]
}

export interface Date {
	year: number
	month: number | undefined
	day: number[] | undefined
}

export interface Report {
	id: number
	date: string
	content: string
}

export interface AlertDialog {
	title?: string
	message?: string
	isOpen: boolean
}

export interface ErrorDialog {
	title?: string
	message?: string
	isOpen: boolean
}

interface ErrorResponse {
	status: number
	message: string
}
