"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Button } from "@workspace/ui/components/button"
import { useMutation } from "convex/react"
import { api } from "../../../../packages/backend/convex/_generated/api"

const DashboardView = () => {
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <p>WEB APP</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button onClick={() => addUser()}>Add</Button>
    </div>
  )
}

export default DashboardView
