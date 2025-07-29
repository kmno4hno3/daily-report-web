"use client"

import { useFetchReportDates } from "@/src/features/search/hooks/useFetchReportDates"
import { Input } from "@/src/shared/ui/input"
import { Search as SearchIcon } from "lucide-react"
import { useState } from "react"

export const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>("")
	useFetchReportDates(searchQuery)

	return (
		<Input
			icon={<SearchIcon className="text-[#737373]" />}
			onChange={(e) => {
				setSearchQuery(e.target.value)
			}}
		/>
	)
}
