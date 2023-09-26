import { type PropsWithChildren } from "react"
import Link from "next/link"
import { Icons } from "@components/icons"
import { Sidebar } from "@components/Sidebar"

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <main className="max-w-md flex-1 space-y-2">
        <Link
          href={"/profile"}
          className="flex w-fit items-center font-medium text-muted-foreground duration-150 hover:text-foreground"
        >
          <Icons.left className="mr-2 h-4 w-4" />
          Back
        </Link>
        {children}
      </main>
    </div>
  )
}
