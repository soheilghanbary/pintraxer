import { HeaderSign } from "@components/HeaderSign"
import { Logo } from "@components/Logo"
import { SearchBox } from "@components/SearchBox"
import { SignInButton } from "@components/SignInButton"
import { SiteNav } from "@components/site/SiteNav"
import { ThemeToggle } from "@components/ThemeToggle"
import { getUserSession } from "@lib/user-session"
import { getUser } from "@services/user"

export const SiteHeader = async () => {
  const session = await getUserSession()
  const user = session ? await getUser() : null
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <Logo />
      <SiteNav />
      <SearchBox />
      <ThemeToggle />
      {user !== null ? <HeaderSign {...user} /> : <SignInButton />}
    </header>
  )
}
