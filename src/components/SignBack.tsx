"use client"

import { useRouter } from "next/navigation"
import { Icons } from "@components/icons"
import { Button } from "@ui/button"

export const SignBack = () => {
  const router = useRouter()
  return (
    <Button
      variant={"ghost"}
      className="absolute left-5 top-5 pl-2 lg:top-10 xl:top-32"
      onClick={() => router.back()}
    >
      <Icons.left className="mr-2 h-4 w-4" />
      Back
    </Button>
  )
}
