import { useMutation } from "@tanstack/react-query"
import { updateReport } from "../api/updateReport"

export const useUpdateReport = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: ({ id, content }: { id: number; content: string }) =>
			updateReport({ id, content }),
		onSuccess: () => {},
		onError: (error) => {
			console.error("Failed to save content:", error)
		},
	})

	return { mutate, isPending }
}
