import type { Dashboard } from "@/src/features/dashboard/model/types"
import { atom } from "jotai"

export const dashboardAtom = atom<Dashboard>({
	statistics: {
		total_reports: 0,
		this_month_reports: 0,
		last_month_reports: 0,
	},
	yearly_summary: [],
})
dashboardAtom.debugLabel = "dashboardAtom"
