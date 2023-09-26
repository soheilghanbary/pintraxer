import Image from "next/image"
import Link from "next/link"
import getBase64 from "@lib/getLocalBase64"
import { getAllPins } from "@services/pin"

export default async function HomePage() {
  const pins = await getAllPins()
  return (
    <div className="columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
      {pins.map((pin: Pin) => (
        <PinCard key={pin.id} {...pin} />
      ))}
    </div>
  )
}

const PinCard = async (pin: Pin) => {
  return (
    <div key={pin.id} className="mb-2 break-inside-avoid space-y-2">
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
      <h2 className="text-sm font-medium leading-5">{pin.title}</h2>
    </div>
  )
}
