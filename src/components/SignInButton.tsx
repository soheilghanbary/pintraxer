import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Icons } from "./icons"
import { OAuth } from "./OAuth"
import { Button } from "./ui/button"

export const SignInButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <div className="mx-auto flex flex-col items-center justify-center gap-2 p-4">
          <Icons.logo size={24} />
          <h1 className="text-lg font-bold">Welcome back</h1>
          <p className="text-center text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
          <OAuth />
        </div>
      </DialogContent>
    </Dialog>
  )
}
