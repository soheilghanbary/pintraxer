import { BoardList } from "@components/board/BoardList"
import { ProfileHeader } from "@components/ProfileHeader"
import { getBoards } from "@services/board"
import { getUser } from "@services/user"

export default async function ProfilePage() {
  const user = await getUser()
  const boards = await getBoards()
  return (
    <section>
      <ProfileHeader {...user} />
      <BoardList boards={boards} />
    </section>
  )
}
