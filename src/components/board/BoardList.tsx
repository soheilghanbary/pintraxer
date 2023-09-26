import { Icons } from "@components/icons"

import { BoardCard } from "./BoardCard"
import { CreateBoard } from "./CreateBoard"

export const BoardList = ({ boards }: { boards: TBoard[] }) => {
  if (!boards.length) return <EmptyBoard />

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        {boards.map((board) => (
          <BoardCard key={board.id} {...board} />
        ))}
      </div>
    </>
  )
}

const EmptyBoard = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center gap-4 rounded-2xl border bg-secondary/30 p-12 shadow-sm">
      <div className="flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground shadow-sm">
        <Icons.add_product className="h-6 w-6" />
      </div>
      <p className="text-center text-sm font-medium leading-6 text-foreground/80">
        Craft your digital vision and curate inspiration with the click of a
        pin.
      </p>
      <CreateBoard />
    </div>
  )
}
