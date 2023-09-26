import { redirect } from "next/navigation"
import { Icons } from "@components/icons"
import { OAuth } from "@components/OAuth"
import { SignBack } from "@components/SignBack"
import { SignOutButton } from "@components/SignOutButton"
import { getUserSession } from "@lib/user-session"

export default async function SignInPage() {
  const session = await getUserSession()

  if (!session) return redirect("/")

  return (
    <section className="fixed left-0 top-0 z-50 flex h-full w-full bg-background">
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <SignBack />
        <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-2 rounded-lg p-8 shadow-md">
          <Icons.logo size={24} />
          <h1 className="text-lg font-bold">Are you Sure?</h1>
          <SignOutButton />
        </div>
      </div>
    </section>
  )
}
