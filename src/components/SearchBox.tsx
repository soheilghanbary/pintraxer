import { Icons } from "./icons"
import { Input } from "./ui/input"

export const SearchBox = () => {
  return (
    <div className="relative hidden items-center md:flex">
      <Icons.search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input type="text" className="pl-8" placeholder="search by title" />
    </div>
  )
}
