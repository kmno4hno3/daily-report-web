import { Button } from "@/src/shared/ui/button"
import { Card, CardDescription, CardTitle } from "@/src/shared/ui/card"

export const Dashboard = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>総日報数</CardTitle>
					<CardDescription>全期間の日報数</CardDescription>
					<CardTitle className="text-2xl font-bold">23</CardTitle>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>今月の日報</CardTitle>
					<CardDescription>今月作成された日報</CardDescription>
					<CardTitle className="text-2xl font-bold">23</CardTitle>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>先月の日報</CardTitle>
					<CardDescription>先月作成された日報</CardDescription>
					<CardTitle className="text-2xl font-bold">23</CardTitle>
				</Card>
			</div>

			<div>年別サマリー</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>2025年</CardTitle>
					<CardDescription>7件の日報</CardDescription>
					<Button>詳細を見る</Button>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>2024年</CardTitle>
					<CardDescription>13件の日報</CardDescription>
					<Button>詳細を見る</Button>
				</Card>
				<Card className="h-36 p-6 grid grid-cols-1">
					<CardTitle>2023年</CardTitle>
					<CardDescription>3件の日報</CardDescription>
					<Button>詳細を見る</Button>
				</Card>
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
