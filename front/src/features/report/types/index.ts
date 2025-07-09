export interface Report {
	id: number
	date: string
	content: string
}

export interface CreateReportRequest {
	date: Date
	content: string
}

export interface UpdateReportRequest {
	id: number
	content: string
}

export interface DeleteReportRequest {
	id: number
}

export interface ReportError {
	message: string
	status?: number
}
