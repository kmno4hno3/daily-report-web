"use client"

import { Button, buttonVariants } from "@/src/shared/ui/button"
import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"

interface Props {
  date: string
  onDelete: () => void
  isDeleting: boolean
}

export const ReportHeader = ({ date, onDelete, isDeleting }: Props) => {
  const [year, month, day] = date.split("-")
  
  return (
    <>
      <Button
        onClick={onDelete}
        disabled={isDeleting}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-5 top-5"
        )}
      >
        <Trash2 className="text-red-500" />
      </Button>
      
      <h2 className="text-2xl font-bold mb-4">
        {year}/{month}/{day}
      </h2>
    </>
  )
}