"use client"

import { useState } from "react"
import { Button } from "@ui/button"
import { signOut } from "next-auth/react"

import { Icons } from "./icons"

export const SignOutButton = () => {
  const [loading, setLoading] = useState(false)
  const onSignOut = () => {
    setLoading(true)
    signOut()
  }

  return (
    <Button
      disabled={loading}
      variant={"secondary"}
      className="mt-2 w-full"
      onClick={onSignOut}
    >
      <Icons.logout size={18} className="mr-4" />
      Log out
    </Button>
  )
}
