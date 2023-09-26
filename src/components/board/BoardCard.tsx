import Link from "next/link"

export const BoardCard = ({ id, name, pins }: TBoard) => {
  return (
    <Link href={`/board/${id}`} className="space-y-2">
      <div className="h-44 w-full rounded-2xl bg-secondary"></div>
      <div className="space-y-1.5 px-1">
        <h2 className="font-medium text-foreground/90">{name}</h2>
        <p className="text-xs text-muted-foreground">{pins.length} Pins</p>
      </div>
    </Link>
  )
}
