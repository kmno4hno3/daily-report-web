import { auth } from "@/auth"

import { Button, buttonVariants } from "@/src/shared/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/src/shared/ui/tooltip"
import {
	CircleUser,
	FileText,
	HelpCircle,
	PlusCircle,
	Settings,
} from "lucide-react"
import Link from "next/link"
import type React from "react"

export const Navbar: React.FC = async () => {
	const session = await auth()
	const icons = [
		// { name: "reports", Icon: FileText, label: "日報", src: "/report/list" },
		{
			name: "new",
			Icon: PlusCircle,
			label: "新規作成",
			src: "/report/create",
		},
		...(session?.user
			? [
					{
						name: "settings",
						Icon: Settings,
						label: "設定",
						src: "/settings",
					},
				]
			: []),
		// { name: "help", Icon: HelpCircle, label: "ヘルプ", src: "/help" },
		{ name: "account", Icon: CircleUser, label: "アカウント", src: "/account" },
	]

	return (
		<TooltipProvider>
			<nav className="w-16 bg-gray-800 flex flex-col items-center py-4">
				{icons.map(({ name, Icon, label, src }) => (
					<Tooltip key={name}>
						<TooltipTrigger asChild>
							<Link href={src} className="mb-4">
								<Button className={buttonVariants({ variant: "ghost" })}>
									<Icon className="h-5 w-5 text-white" />
									<span className="sr-only">{label}</span>
								</Button>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">
							<p>{label}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</nav>
		</TooltipProvider>
	)
}
