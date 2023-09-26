"use client"

import { useState } from "react"
import { Icons } from "@components/icons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreatePin } from "@hooks/use-pin"
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
import { z } from "zod"

const pinSchema = z.object({
  title: z.string().trim().min(4),
  url: z.string().trim().url(),
  description: z.string().trim().min(10),
  boardId: z.string().trim().min(3, {
    message: "select a board",
  }),
})

type TPinForm = z.infer<typeof pinSchema>

export default function CreatePinModal() {
  const [open, setOpen] = useState(false)
  const form = useForm<TPinForm>({
    defaultValues: { title: "", description: "", url: "", boardId: "" },
    resolver: zodResolver(pinSchema),
  })
  const formData = new FormData()
  const { mutateAsync, isLoading } = useCreatePin()

  const onSubmit = async (data: TPinForm) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"sm"}>
          <Icons.pin className="mr-1.5 h-4 w-4" />
          Create Pin
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto max-w-sm">
        <DialogHeader>
          <DialogTitle>Create New Pin</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
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
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} className="w-full">
                  <Icons.upload className="mr-1.5 h-4 w-4" />
                  Upload Image
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Images</DialogTitle>
                </DialogHeader>
                <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed p-4 shadow-sm hover:bg-secondary/50">
                  <div className="flex items-center justify-center rounded-full bg-secondary p-2.5">
                    <Icons.image className="h-5 w-5" />
                  </div>
                  <p className="text-foreground">Upload your image</p>
                  <div className="grid gap-2 text-center text-sm text-muted-foreground">
                    <span>High Resolution: (jpg,png,webp)</span>
                    <span>Max Size: 8MB</span>
                    <span>Animated gif</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            {/* <FormField
              control={form.control}
              name="boardId"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-1/2">
                        <SelectValue placeholder="Select Board" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {boards.map((board) => (
                        <SelectItem key={board.id} value={board.id}>
                          {board.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
