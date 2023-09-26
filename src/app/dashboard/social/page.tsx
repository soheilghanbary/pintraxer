import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export default function SocialNetworkPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold leading-loose">
          Social Network Links
        </h1>
        <p className="text-sm leading-6 text-muted-foreground">
          manage your social network media link and share it for people.
        </p>
      </div>
      <div className="grid grid-cols-2 items-end gap-4 space-y-2">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="instagram" className="flex items-center gap-2">
            <Icons.insta className="h-4 w-4" />
            Instagram
          </Label>
          <Input id="instagram" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="twitter" className="flex items-center gap-2">
            <Icons.twitter className="h-4 w-4" />
            Twitter
          </Label>
          <Input id="twitter" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="linkedin" className="flex items-center gap-2">
            <Icons.linkedIn className="h-4 w-4" />
            LinkedIn
          </Label>
          <Input id="linkedin" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="github" className="flex items-center gap-2">
            <Icons.github className="h-4 w-4" />
            GitHub
          </Label>
          <Input id="github" />
        </div>
        <Button className="w-fit">Save</Button>
      </div>
    </>
  )
}
