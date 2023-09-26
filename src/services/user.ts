"use server"

import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"
import { utapi } from "uploadthing/server"

export const getUser = async () => {
  const session = await getUserSession()
  return (await db.user.findFirst({ where: { id: session.id } })) as TUser
}

// update user by session->id
export const updateUser = async (userForm: TUserForm) => {
  const { id } = await getUserSession()
  return (await db.user.update({
    where: { id },
    data: { ...userForm },
  })) as TUser
}

// upload user image
export async function uploadFiles(formData: FormData) {
  const { id } = await getUserSession()
  const files = formData.getAll("files")
  const response = await utapi.uploadFiles(files)
  await db.user.update({
    where: { id },
    data: { image: response[0].data?.url },
  })
  return response[0].data as {
    name: string
    key: string
    size: number
    url: string
  }
}
