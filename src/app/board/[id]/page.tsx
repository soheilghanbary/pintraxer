import Image from "next/image"
import Link from "next/link"
import EditBoard from "@components/board/EditBoard"
import { Icons } from "@components/icons"
import CreatePinModal from "@components/pin/CreatePinModal"
import getBase64 from "@lib/getLocalBase64"
import { cn } from "@lib/utils"
import { getBoard } from "@services/board"
import { buttonVariants } from "@ui/button"

type TParams = {
  params: {
    id: string
  }
}

export default async function BoardPage({ params }: TParams) {
  const board = await getBoard(params.id)
  return (
    <section>
      <div className="mx-auto mb-4 mt-10 max-w-sm space-y-2 text-center">
        <h1 className="text-2xl font-extrabold">{board.name}</h1>
        <p className="text-sm leading-6 text-muted-foreground">
          {board.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <EditBoard {...board} />
          <Link
            href={`/pin/new`}
            className={cn(
              buttonVariants({ variant: "default", size: "sm", rounded: true })
            )}
          >
            <Icons.pin className="mr-1.5 h-4 w-4" />
            Create Pin
          </Link>
          {/* <CreatePinModal /> */}
        </div>
      </div>
      <div className="columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
        {board.pins.map((pin: Pin) => (
          <PinCard key={pin.id} {...pin} />
        ))}
      </div>
    </section>
  )
}

const PinCard = async (pin: Pin) => {
  return (
    <div key={pin.id} className="break-inside-avoid space-y-2">
      <Link href={`/pin/${pin.id}`} className="relative">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt={pin.title}
          src={pin.image.url}
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
          className="rounded-2xl bg-secondary"
        />
      </Link>
      <h2 className="text-sm font-medium leading-6">{pin.title}</h2>
    </div>
  )
}
