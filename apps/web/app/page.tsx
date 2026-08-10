"use client"
import { Button } from "@workspace/ui/components/button"
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react"
import { api } from "../../../packages/backend/convex/_generated/api"
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <>
      <Authenticated>
        <div className="flex min-h-svh flex-col items-center justify-center p-6">
          <Button onClick={() => addUser()}>Add</Button>
          <p>WEB APP</p>
          <UserButton />
          <p>{JSON.stringify(users)} </p>
        </div>
        <SignOutButton>Sign Out !!</SignOutButton>
      </Authenticated>
      <Unauthenticated>
        <p>Must be sign in</p>
        <SignInButton>Sign in !!</SignInButton>
      </Unauthenticated>
    </>
  )
}
