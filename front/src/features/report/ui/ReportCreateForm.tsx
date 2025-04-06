"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import axios from "axios";
import { useAtom } from "jotai";
import { yearDatesAtom } from "@/src/entities/report/model";
import { messageDialogAtom, errorDialogAtom } from "@/src/features/alert/model";
import { Year } from "@/src/entities/report/type";

import { Button } from "@/src/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/shared/ui/form";
import { Textarea } from "@/src/shared/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/shared/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/src/shared/ui/calendar";

export const ReportCreateForm = () => {
  const [yearDates, setYearDates] = useAtom<Year>(yearDatesAtom);
  const [, setMessageDialog] = useAtom(messageDialogAtom);
  const [, setErrorDialog] = useAtom(errorDialogAtom);
  const formSchema = z.object({
    date: z.date(),
    content: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      content: "",
    },
  });

  const createReport = async (date: Date, content: String) => {
    const formatDate = format(date, "yyyy-MM-dd");
    const url = `http://localhost:8000/api/reports`;
    try {
      await axios.post(url, { date: formatDate, content });
      setMessageDialog({
        title: "レポート作成",
        message: `${formatDate}のレポートを作成しました`,
        isOpen: true,
      });
      const filteredYearDates = {
        ...yearDates,
        months: yearDates?.months.map((month) => {
          if (month.month === date.getMonth() + 1) {
            const tmpDays = [...month.days, date.getDate()];
            return {
              ...month,
              days: tmpDays.sort(),
            };
          }
          return month;
        }),
      };
      setYearDates(filteredYearDates);
    } catch (error: unknown) {
      let errorMessage = "不明なエラーが発生しました";
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status !== 500
      ) {
        errorMessage = error.response.data.message;
      }
      setErrorDialog({
        title: "レポート作成",
        message: errorMessage,
        isOpen: true,
      });
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await createReport(data.date, data.content);
  };

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
                          !field.value && "text-muted-foreground"
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
  );
};
