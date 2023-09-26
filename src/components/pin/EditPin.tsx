"use client"

import { useCallback, useMemo, useState } from "react"
import NextImage from "next/image"
import { useRouter } from "next/navigation"
import { Icons } from "@components/icons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreatePin } from "@hooks/use-pin"
import { Button } from "@ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form"
import { Input } from "@ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select"
import { Textarea } from "@ui/textarea"
import { useDropzone, type FileWithPath } from "react-dropzone"
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

const useUpload = () => {
  const [files, setFiles] = useState<File[]>([])
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
  }, [])
  const { getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {},
  })
  return { getRootProps, files }
}

const useEditPinForm = (values: TPinForm) => {
  return useForm<TPinForm>({
    defaultValues: { ...values },
    resolver: zodResolver(pinSchema),
  })
}

export default function EditPin({
  pin,
  boards,
}: {
  pin: Pin
  boards: TBoard[]
}) {
  const form = useEditPinForm({
    url: pin.url,
    title: pin.title,
    boardId: pin.boardId,
    description: pin.description,
  })
  const { getRootProps, files } = useUpload()
  const { mutateAsync, isLoading } = useCreatePin()
  const router = useRouter()
  const onSubmit = async (data: TPinForm) => {
    // const res = await mutateAsync({ data, files })
    // console.log(res)
    console.log(files)
  }

  return (
    <div className="mx-auto grid max-w-sm gap-4 rounded-lg">
      <h1 className="text-center text-lg font-semibold">Edit your Pin</h1>
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
          <div className="grid grid-cols-2 gap-4">
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
            <FormField
              control={form.control}
              name="boardId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Board</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
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
            />
          </div>
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
              <section
                {...getRootProps()}
                className="flex h-72 w-full flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed p-2 shadow-sm hover:bg-secondary/30"
              >
                {files.length ? (
                  <PreviewImage file={files[0]} />
                ) : (
                  <div className="relative h-full w-full rounded-2xl [&>img]:rounded-[inherit]">
                    <NextImage
                      src={pin.image.url}
                      fill
                      sizes="100vw"
                      loading="lazy"
                      alt={"upload image"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}
              </section>
            </DialogContent>
          </Dialog>
          <Button disabled={isLoading} type="submit">
            Update Pin
          </Button>
        </form>
      </Form>
    </div>
  )
}

const PreviewImage = ({ file }: { file: File }) => {
  const path = useMemo(() => URL.createObjectURL(file), [file])
  return (
    <div className="relative h-full w-full rounded-2xl [&>img]:rounded-[inherit]">
      <NextImage
        src={path}
        fill
        sizes="100vw"
        loading="lazy"
        alt={"upload image"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  )
}
