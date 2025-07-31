"use client"

import { cn } from "@/lib/utils"
import { DEFAULT_LOGIN_REDIRECT } from "@/route"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { authGithub, authenticateUser } from "../model/action"

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

const ErrorSchema = z.object({ 
	isSuccess: z.boolean().optional(),
	error: z.string().optional()
})

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	const formSchema = z.object({
		email: z
			.string()
			.email({ message: "正しいメールアドレスを入力してください" }),
		password: z.string().min(1, { message: "パスワードが正しくありません" }),
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})
	const router = useRouter()
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		const result = ErrorSchema.safeParse(
			await authenticateUser(data.email, data.password),
		)
		if (result.success) {
			if (result.data.isSuccess) {
				window.location.href = `/report/list/${new Date().getFullYear()}`
			} else {
				form.setError("email", {
					type: "manual",
					message: "正しいメールアドレスを入力してください",
				})
				form.setError("password", {
					type: "manual",
					message: "パスワードが正しくありません",
				})
			}
		} else {
			console.log(result)
		}
	}

	const loginOauth = async () => {
		await authGithub()
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
							<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
								<span className="relative z-10 bg-background px-2 text-muted-foreground">
									Or continue with
								</span>
							</div>
							<Button
								variant="outline"
								className="w-full"
								onClick={loginOauth}
								type="button"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<title>GitHub</title>
									<path
										d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
										fill="currentColor"
									/>
								</svg>
								Login with GitHub
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
