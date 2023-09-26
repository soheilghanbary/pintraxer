"use client"

import { userSchema, type TUserSchema } from "@/schemas/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateUserForm } from "@hooks/use-user"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Icons } from "./icons"

export const UesrForm = (user: any) => {
  const form = useForm<TUserSchema>({
    defaultValues: user,
    resolver: zodResolver(userSchema),
  })

  const { mutate, isLoading } = useUpdateUserForm()

  const onSubmit = (data: TUserSchema) => mutate(data)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
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
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea rows={6} {...field} />
              </FormControl>
              <p
                className={`text-xs text-foreground/80 ${
                  form.watch("about").length > 280
                    ? "text-rose-500 dark:text-rose-400"
                    : ""
                }`}
              >
                Characters: {form.watch("about").length}
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-fit" type="submit">
          {isLoading ? (
            <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Save
        </Button>
      </form>
    </Form>
  )
}
