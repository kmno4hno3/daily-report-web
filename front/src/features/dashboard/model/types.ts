export type Dashboard = {
	statistics: {
		total_reports: number
		this_month_reports: number
		last_month_reports: number
	}
	yearly_summary: {
		year: number
		report_count: number
	}[]
}
