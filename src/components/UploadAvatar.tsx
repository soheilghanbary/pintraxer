"use client"

import Image from "next/image"
import { useUploadImage, useUser } from "@hooks/use-user"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const UploadAvatar = (initialUser: TUser) => {
  const { data: user } = useUser(initialUser)
  const { getRootProps, isLoading } = useUploadImage()

  return (
    <div className="my-4 flex items-center gap-4">
      <div
        className={cn(
          "relative h-20 w-20 rounded-full bg-secondary shadow [&>img]:rounded-[inherit]",
          isLoading ? "animate-pulse" : ""
        )}
      >
        <Image src={user.image} alt="" fill sizes="80px" loading="lazy" />
      </div>
      <Button disabled={isLoading} {...getRootProps()} variant={"outline"}>
        {isLoading ? (
          <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.upload className="mr-2 h-4 w-4" />
        )}
        Change
      </Button>
    </div>
  )
}
