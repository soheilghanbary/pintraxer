"use server"

import { revalidatePath } from "next/cache"
import { db } from "@lib/db"
import { getUserSession } from "@lib/user-session"
import { type TBoardForm } from "@schemas/board"

// create a board
export const createBoard = async (values: TNewBoard) => {
  const { id } = await getUserSession()
  const newBoard = await db.board.create({ data: { userId: id, ...values } })
  revalidatePath("/profile")
  return newBoard
}

// get all board by userid
export const getBoards = async () => {
  const { id } = await getUserSession()
  return (await db.board.findMany({
    where: { userId: id },
    include: { pins: true },
  })) as unknown as TBoard[]
}

// get board by id
export const getBoard = async (boardId: string) => {
  const { id } = await getUserSession()
  return (await db.board.findUnique({
    where: { userId: id, id: boardId },
    include: { pins: true },
  })) as unknown as TBoard
}

// update board by id
export const updateBoard = async (id: string, data: TBoardForm) => {
  // const { id } = await getUserSession()
  const updatedBoard = await db.board.update({ where: { id }, data })
  revalidatePath(`/board/${id}/edit`)
  return updatedBoard
}
