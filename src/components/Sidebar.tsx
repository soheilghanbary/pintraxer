"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Logo } from "./Logo"
import { SidebarItem } from "./SitebarLink"
import { Button } from "./ui/button"

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(!open)
  const closeModal = () => setOpen(false)
  const isSidebarActive = open ? "translate-x-0" : "-translate-x-full"
  const isBackdropActive = open ? "visible" : "invisible"
  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 border-r bg-background p-4 duration-300 md:static md:z-0 md:transform-none md:border-0 md:p-0 md:pr-8",
          isSidebarActive
        )}
      >
        <header className="md:hidden">
          <Logo />
        </header>
        <section className="mt-4 flex flex-col space-y-1">
          <SidebarItem
            onClick={closeModal}
            href="/dashboard"
            title="Edit Profile"
          />
          <SidebarItem
            onClick={closeModal}
            href="/dashboard/social"
            title="Social Network"
          />
          <SidebarItem
            onClick={closeModal}
            href="/dashboard/settings"
            title="Account Settings"
          />
        </section>
      </aside>
      <div
        onClick={toggleModal}
        className={cn(
          "fixed left-0 top-0 z-10 h-full w-full bg-background/80 md:z-0 md:hidden",
          isBackdropActive
        )}
      ></div>
      <button
        onClick={toggleModal}
        className="fixed bottom-5 right-5 rounded-full border bg-background p-3 ring-primary duration-150 focus:ring-2 md:hidden"
      >
        {open ? (
          <Icons.close className="h-5 w-5 " />
        ) : (
          <Icons.menu className="h-5 w-5  " />
        )}
      </button>
    </>
  )
}
