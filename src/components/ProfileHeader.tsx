"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@components/icons"
import { useUser } from "@hooks/use-user"
import { cn } from "@lib/utils"
import { buttonVariants } from "@ui/button"

import { CreateBoard } from "./board/CreateBoard"

export const ProfileHeader = (initialUser: TUser) => {
  const {
    data: { image, name, username, website, about },
  } = useUser(initialUser)
  return (
    <div className="mx-auto mb-4 flex max-w-md flex-col items-center justify-center space-y-2">
      <ProfileImage image={image} alt={name} />
      <h2 className="text-2xl font-bold">{name}</h2>
      <h6 className="font-medium text-foreground/70">@{username}</h6>
      <p className="flex items-center text-sm text-foreground/80">
        <Icons.users className="mr-2 h-5 w-5 text-teal-500 dark:text-teal-400" />
        3.45K Connections
        <a href={website}>
          <Icons.link className="ml-2 h-4 w-4 text-blue-500 dark:text-blue-400" />
        </a>
      </p>
      <p className="pb-1 text-center text-sm leading-6 text-muted-foreground">
        {about}
      </p>
      <div className="flex items-center gap-4">
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "secondary", rounded: true })
          )}
        >
          Edit Profile
        </Link>
        <CreateBoard />
      </div>
    </div>
  )
}

const ProfileImage = ({ image = "", alt = "" }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="relative h-32 w-32 rounded-full bg-secondary [&>img]:rounded-[inherit]">
      <Image
        fill
        alt={alt}
        src={image}
        sizes="128px"
        loading="lazy"
        className={`duration-700 ease-in-out group-hover:opacity-75 ${
          isLoading
            ? "scale-110 blur grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}
