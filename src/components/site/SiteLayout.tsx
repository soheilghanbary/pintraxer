import { type PropsWithChildren } from "react"

import { SiteHeader } from "./SiteHeader"

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto p-0">
      <SiteHeader />
      <main className="min-h-[90dvh] px-4">{children}</main>
    </div>
  )
}
