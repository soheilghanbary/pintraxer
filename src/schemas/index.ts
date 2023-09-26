import { z } from "zod"

export const newPinSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  boardId: z.string(),
})

export type TPinBuilder = z.infer<typeof newPinSchema>
