type TParams = {
  params: {
    id: string
  }
}

type TUser = {
  id: string
  email: string
  image: string
  name: string
  username: string
  about?: string
  website?: string
}

type TUserForm = Pick<TUser, "name" | "username" | "website" | "about">

type TBoard = {
  id: string
  name: string
  description: string
  userId: string
  pins: Pin[]
}

type Pin = {
  id: string
  title: string
  url: string
  boardId: string
  userId: string
  description: string
  image: {
    url: string
    key: string
    width: string
    height: string
  }
  board: Board
}

type TNewBoard = {
  name: string
  description: string
}
