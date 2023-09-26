import NextImage from "next/image"
import Link from "next/link"
import { Icons } from "@components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import getBase64 from "@lib/getLocalBase64"
import { getPin } from "@services/pin"
import { Badge } from "@ui/badge"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import { ScrollArea } from "@ui/scroll-area"

type TParams = {
  params: {
    id: string
  }
}
export default async function PinPage({ params: { id } }: TParams) {
  const pin = await getPin(id)
  return <PinCard {...pin} />
}

const PinCard = async (pin: Pin) => {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-6 md:flex-row">
      <section>
        <div className="relative md:w-96">
          <NextImage
            width={0}
            height={0}
            sizes="100vw"
            alt={pin.title}
            src={pin.image.url}
            loading="lazy"
            className="h-full w-full rounded-2xl bg-secondary object-cover"
          />
        </div>
      </section>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2">
          <Button rounded size={"icon"} variant={"outline"}>
            <Icons.download className="h-4 w-4" />
          </Button>
          <Button rounded size={"icon"} variant={"outline"}>
            <Icons.share className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button rounded size={"icon"} variant={"outline"}>
                <Icons.more className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/pin/${pin.id}/edit`}>Edit Pin</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Delete Pin</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Badge>{pin.board.name}</Badge>
        <h1 className="text-4xl font-black leading-tight text-foreground">
          {pin.title}
        </h1>
        <p className="text-sm leading-6 text-muted-foreground">
          {pin.description}
        </p>
        <div className="flex items-end gap-4">
          <div className="grid flex-1 gap-2">
            <Label>What do you think?</Label>
            <Input type="text" placeholder="Add a comment" />
          </div>
          <Button>Send</Button>
        </div>
        <ScrollArea className="h-64">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </ScrollArea>
      </div>
    </div>
  )
}

const Comment = () => (
  <div className="mb-4 flex gap-2 rounded-md border p-3 shadow-sm">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className="flex-1 items-center gap-4">
      <div className="grid text-sm">
        <p className="font-medium">Shadcn</p>
        <p className="text-xs text-muted-foreground">@shadcn</p>
      </div>
      <p className="mt-2 text-xs leading-5">
        A Cute Tanoos is known for its playfulness and boundless energy.
      </p>
      <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
        <p>3h ago</p>
        <div className="flex items-center gap-1.5">
          <Icons.like className="h-3.5 w-3.5 text-rose-500" />3
        </div>
        <div className="flex items-center gap-1.5">
          <Icons.reply className="h-4 w-4 text-blue-500" />
          Reply
        </div>
      </div>
    </div>
  </div>
)
