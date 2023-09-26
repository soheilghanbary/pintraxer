"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateBoard } from "@hooks/use-board"
import { boardSchema, type TBoardForm } from "@schemas/board"
import { Button } from "@ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form"
import { Input } from "@ui/input"
import { Textarea } from "@ui/textarea"
import { useForm } from "react-hook-form"

export default function EditBoard(board: TBoard) {
  const [open, setOpen] = useState(false)
  const form = useForm<TBoardForm>({
    defaultValues: { name: board.name, description: board.description },
    resolver: zodResolver(boardSchema),
  })

  const { mutateAsync, isLoading } = useUpdateBoard()

  const onSubmit = async (data: TBoardForm) => {
    await mutateAsync({ id: board.id, values: data })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button rounded variant={"secondary"} size={"sm"}>
          Edit Board
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto max-w-sm">
        <DialogHeader>
          <DialogTitle>Create New Board</DialogTitle>
        </DialogHeader>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit">
                Update
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
