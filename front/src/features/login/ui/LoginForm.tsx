"use client"

import { cn } from "@/lib/utils"
import { errorDialogAtom, messageDialogAtom } from "@/src/features/alert/model"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { authenticateUser } from "../model/action"

import { Button } from "@/src/shared/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/shared/ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/shared/ui/form"
import { Input } from "@/src/shared/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const formSchema = z.object({
		email: z.string(),
		password: z.string(),
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		await authenticateUser(data.email, data.password)
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="test@example.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder="半角英数字8文字以上" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
