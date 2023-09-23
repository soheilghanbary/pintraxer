import { ProfileHeader } from "@components/ProfileHeader"
import { useUser } from "@hooks/use-user"
import { getUser } from "@services/user"

export default async function ProfilePage() {
  const user = await getUser()
  return (
    <section>
      <ProfileHeader {...user} />
    </section>
  )
}
