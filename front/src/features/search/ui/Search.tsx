"use client"

import { useFetchReportDates } from "@/src/features/search/hooks/useFetchReportDates"
import { Input } from "@/src/shared/ui/input"
import { Search as SearchIcon } from "lucide-react"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

export const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>("")
	useFetchReportDates(searchQuery)
	const handleSearch = useDebouncedCallback((query: string) => {
		setSearchQuery(query)
	}, 300)

	return (
		<Input
			icon={<SearchIcon className="text-[#737373]" />}
			onChange={(e) => {
				handleSearch(e.target.value)
			}}
		/>
	)
}
