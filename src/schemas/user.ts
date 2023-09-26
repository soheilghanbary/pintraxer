import { z } from "zod"

export const userSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3).toLowerCase(),
  website: z.string().url(),
  about: z.string().min(20).max(280),
})

export type TUserSchema = z.infer<typeof userSchema>
