"use client"

import { currentDateAtom, yearDatesAtom } from "@/src/entities/report/model"
import { useAtom } from "jotai"
import { usePathname } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"
import { ReportDetail } from "./ReportDetail"
// import { ReportList } from "./ReportList"

export const ReportWrapper = () => {
	const [id, setId] = useState<number | null>(null)
	const pathname = usePathname()

	useEffect(() => {
		if (pathname?.startsWith("/report")) {
			const paths = pathname?.split("/")
			const [, , id] = paths
			setId(Number(id))
		}
	}, [pathname])

	const renderChildren = () => {
		return id ? <ReportDetail id={id} /> : <div>日報が見つかりません</div>
	}

	return renderChildren()
}
