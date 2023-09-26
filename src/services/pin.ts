"use server"

import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"
import { utapi } from "uploadthing/server"

// upload user image
export async function updateImages(formData: FormData) {
  const files = formData.getAll("files")
  const response = await utapi.uploadFiles(files)
  return response[0].data as {
    name: string
    key: string
    size: number
    url: string
  }
}

type PinForm = {
  title: string
  files: File
  boardId: string
  description: string
}

// create new pin
export async function createPin(formData: FormData) {
  const { id: userId } = await getUserSession()
  const { title, boardId, description } = Object.fromEntries(
    formData.entries()
  ) as PinForm
  const files = formData.getAll("files")
  const response = await utapi.uploadFiles(files)
  return await db.pin.create({
    data: {
      title,
      description,
      boardId,
      userId,
      image: {
        key: response[0].data?.key,
        name: response[0].data?.name,
        size: response[0].data?.size,
        url: response[0].data?.url as string,
      },
    },
  })
}

// get pin by id
export const getPin = async (id: string) => {
  return (await db.pin.findFirst({
    where: { id },
    include: { board: true },
  })) as Pin
}

// get all pins
export const getAllPins = async () => {
  return await db.pin.findMany()
}
