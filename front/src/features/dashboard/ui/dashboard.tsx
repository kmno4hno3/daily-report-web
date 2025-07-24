"use client"

import { Button } from "@/src/shared/ui/button"
import { Card, CardDescription, CardTitle } from "@/src/shared/ui/card"
import { useFetchDashboard } from "../hooks/useFetchDashboard"

export const Dashboard = () => {
	const { data, isPending, isError, error, refetch, isFetching } =
		useFetchDashboard()

	if (isPending) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-gray-500">読み込み中...</div>
			</div>
		)
	}

	if (isError || !data) {
		return (
			<div className="flex-1 p-6 flex items-center justify-center">
				<div className="text-red-500">
					{error?.message || "エラーが発生しました"}
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>総日報数</CardTitle>
					<CardDescription>全期間の日報数</CardDescription>
					<CardTitle className="text-2xl font-bold">
						{data.statistics.total_reports}
					</CardTitle>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>今月の日報</CardTitle>
					<CardDescription>今月作成された日報</CardDescription>
					<CardTitle className="text-2xl font-bold">
						{data.statistics.this_month_reports | 0}
					</CardTitle>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>先月の日報</CardTitle>
					<CardDescription>先月作成された日報</CardDescription>
					<CardTitle className="text-2xl font-bold">
						{data.statistics.last_month_reports}
					</CardTitle>
				</Card>
			</div>

			<div>年別サマリー</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{data.yearly_summary.map((yearData) => {
					return (
						<Card key={yearData.year} className="h-36 p-6 grid grid-cols-1">
							<CardTitle>{yearData.year}年</CardTitle>
							<CardDescription>{yearData.report_count}件の日報</CardDescription>
							<Button>詳細を見る</Button>
						</Card>
					)
				})}
			</div>

			<div className="mt-10">
				<div>使い方</div>
				<ul>
					<li>1. 左サイドバーから年を選択してください</li>
					<li>2. 月をクリックすると、その月の日報一覧が表示されます</li>
					<li>3. 日付をクリックすると、その日の日報が表示されます</li>
				</ul>
			</div>
		</div>
	)
}
