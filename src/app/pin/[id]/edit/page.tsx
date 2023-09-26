import EditPin from "@components/pin/EditPin"
import { db } from "@lib/db"
import { getBoards } from "@services/board"
import { getPin } from "@services/pin"

type TParams = {
  params: {
    id: string
  }
}

export default async function EditPinPage({ params }: TParams) {
  const pin = await getPin(params.id)
  const boards = await getBoards()

  return <EditPin pin={pin} boards={boards} />
}
