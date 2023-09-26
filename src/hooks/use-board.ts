import { type TBoardForm } from "@schemas/board"
import { createBoard, updateBoard } from "@services/board"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useCreateBoard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (values: TNewBoard) => createBoard(values),
    onSettled(data) {
      toast.success("Board has been Created!")
    },
  })
}

export const useUpdateBoard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, values }: { id: string; values: TBoardForm }) =>
      updateBoard(id, values),
    onSettled(data) {
      toast.success("Board has been Created!")
    },
  })
}
