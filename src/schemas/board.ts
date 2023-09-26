import { z } from "zod"

export const boardSchema = z.object({
  name: z.string().trim().min(3),
  description: z.string().trim().min(10),
})

export type TBoardForm = z.infer<typeof boardSchema>
