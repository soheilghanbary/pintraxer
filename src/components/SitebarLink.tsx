"use client"

import { FC, HTMLAttributes } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type Props = HTMLAttributes<HTMLAnchorElement> & {
  title: string
  href: string
}

export const SidebarItem: FC<Props> = ({ href, title, ...rest }) => {
  const pathname = usePathname()
  const isActive = href === pathname ? "bg-secondary text-foreground" : null
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
        isActive
      )}
      {...rest}
    >
      {title}
    </Link>
  )
}
