"use client"

import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCreateReport } from "../hooks/useCreateReport"

import { Button } from "@/src/shared/ui/button"
import { Calendar } from "@/src/shared/ui/calendar"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/src/shared/ui/form"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/shared/ui/popover"
import { Textarea } from "@/src/shared/ui/textarea"
import { CalendarIcon } from "lucide-react"

export const ReportCreateForm = () => {
	const { mutate, data: response } = useCreateReport()
	const formSchema = z.object({
		date: z.date(),
		content: z.string(),
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			date: new Date(),
			content: "",
		},
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		mutate({
			date: data.date,
			content: data.content,
		})
	}

	return (
		<div className="flex-1 p-6 overflow-y-auto">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] pl-3 text-left font-normal",
													!field.value && "text-muted-foreground",
												)}
											>
												{field.value ? (
													format(field.value, "PPP")
												) : (
													<span>日付選択</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() || date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea placeholder="shadcn" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">新規作成</Button>
				</form>
			</Form>
		</div>
	)
}
