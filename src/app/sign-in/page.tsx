import { redirect } from "next/navigation"
import { Icons } from "@components/icons"
import { OAuth } from "@components/OAuth"
import { getUserSession } from "@lib/user-session"

export default async function SignInPage() {
  const session = await getUserSession()
  if (Boolean(session)) return redirect("/")

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-background">
      <div className="z-10 mx-auto max-w-sm">
        <div className="mx-auto flex flex-col items-center justify-center gap-2 p-4">
          <Icons.logo size={24} />
          <h1 className="text-lg font-bold">Welcome back</h1>
          <p className="text-center text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
          <OAuth />
        </div>
      </div>
    </div>
  )
}
