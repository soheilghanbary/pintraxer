import Image from "next/image"
import Link from "next/link"
import { Icons } from "@components/icons"
import { buttonVariants } from "@ui/button"

export const ProfileHeader = async ({ id, name, bio, image }: TUser) => {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-2">
      <div className="relative h-32 w-32 rounded-full [&>img]:rounded-[inherit]">
        <Image fill loading="lazy" src={image} alt={name} />
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <h6 className="font-medium text-foreground/70">@{id}</h6>
      <p className="flex items-center text-sm text-foreground/80">
        <Icons.users className="mr-2 h-5 w-5 text-teal-500 dark:text-teal-400" />
        3.45K connections
      </p>
      <p className="text-center text-sm leading-6 text-muted-foreground">
        {bio}
      </p>
      <div className="flex items-center gap-4">
        <Link href={"/dashboard"} className={buttonVariants()}>
          Edit Profile
        </Link>
      </div>
    </div>
  )
}
