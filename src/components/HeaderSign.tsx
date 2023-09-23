import Link from "next/link"
import { Icons } from "@components/icons"
import { SignInButton } from "@components/SignInButton"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import { getUserSession } from "@lib/user-session"

export const HeaderSign = async () => {
  const session = await getUserSession()
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel className="text-xs">
              {session.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Icons.dashboard className="mr-2 h-4 w-4" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={"/profile"}>
                <Icons.user className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.pin className="mr-2 h-4 w-4" />
              Create Pin
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.board className="mr-2 h-4 w-4" />
              Create Board
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/sign-out"}>
                <Icons.logout className="mr-2 h-4 w-4" />
                Sign Out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <SignInButton />
      )}
    </>
  )
}
