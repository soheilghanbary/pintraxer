import { getServerSession } from "next-auth"

import { authOptions } from "./auth"

type TUser = {
  id: string
  name: string
  email: string
  image: string
}

export const getUserSession = async () => {
  const session = await getServerSession(authOptions)
  return session?.user as TUser
}
