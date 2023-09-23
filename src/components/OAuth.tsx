"use client"

import { useState } from "react"
import { Button } from "@components/ui/button"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"

export const OAuth = () => {
  const [loading, setLoading] = useState(false)
  const onSignIn = (provider: "google" | "github") => {
    setLoading(true)
    void signIn(provider)
  }

  return (
    <div className="mt-2 grid w-full grid-cols-2 gap-4">
      <Button
        disabled={loading}
        variant={"outline"}
        onClick={() => onSignIn("github")}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        disabled={loading}
        variant={"default"}
        onClick={() => onSignIn("github")}
      >
        <Icons.github className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}
