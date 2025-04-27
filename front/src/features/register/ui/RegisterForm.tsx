"use client"

import { cn } from "@/lib/utils"
import { errorDialogAtom, messageDialogAtom } from "@/src/features/alert/model"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/src/shared/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/shared/ui/form"
import { Input } from "@/src/shared/ui/input"

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [, setMessageDialog] = useAtom(messageDialogAtom)
	const [, setErrorDialog] = useAtom(errorDialogAtom)
	const formSchema = z.object({
		name: z.string(),
		email: z.string(),
		password: z.string(),
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	})
	const createUser = async (name: string, email: string, password: string) => {
		const url = `http://${process.env.NEXT_PUBLIC_HOST || "localhost:8000"}/api/users`
		try {
			await axios.post(url, { name, email, password })
			setMessageDialog({
				title: "新規登録",
				message: "登録が完了しました",
				isOpen: true,
			})
		} catch (error: unknown) {
			let errorMessage = "不明なエラーが発生しました"
			if (
				axios.isAxiosError(error) &&
				error.response &&
				error.response.status !== 500
			) {
				errorMessage = error.response.data.message
			}
			setErrorDialog({
				title: "新規登録",
				message: errorMessage,
				isOpen: true,
			})
		}
	}
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		await createUser(data.name, data.email, data.password)
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
		</div>
	)
}
