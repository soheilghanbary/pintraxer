import NewPin from "@components/pin/NewPin"
import { getBoards } from "@services/board"

export default async function NewPinPage() {
  const boards = await getBoards()
  return <NewPin boards={boards} />
}
