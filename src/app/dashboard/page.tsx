import { DashboardHeader } from "@components/DashboardHeader"
import { UploadAvatar } from "@components/UploadAvatar"
import { UesrForm } from "@components/UserForm"
import { getUser } from "@services/user"

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
  const user = await getUser()
  return (
    <>
      <DashboardHeader
        title="Edit Profile"
        description="Keep your personal details private. Information you add here is visible
        to any who can view your profile."
      />
      <UploadAvatar {...user} />
      <UesrForm {...user} />
    </>
  )
}
