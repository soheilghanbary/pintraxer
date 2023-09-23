"use server"

import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"

export const getUser = async () => {
  const { id } = await getUserSession()
  return (await db.user.findFirst({ where: { id } })) as TUser
}
