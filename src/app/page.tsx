import { getUserSession } from "@lib/user-session"

export default async function HomePage() {
  const user = await getUserSession()
  return (
    <div>
      <h1>this is my home page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
