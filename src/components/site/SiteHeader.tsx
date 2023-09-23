import { HeaderSign } from "@components/HeaderSign"
import { Logo } from "@components/Logo"
import { SearchBox } from "@components/SearchBox"
import { SiteNav } from "@components/site/SiteNav"
import { ThemeToggle } from "@components/ThemeToggle"

export const SiteHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <Logo />
      <SearchBox />
      <SiteNav />
      <ThemeToggle />
      <HeaderSign />
    </header>
  )
}
