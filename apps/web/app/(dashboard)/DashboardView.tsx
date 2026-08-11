"use client"

import { useMutation, useQuery } from "convex/react"
import React from "react"
import { api } from "../../../../packages/backend/convex/_generated/api"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Button } from "@workspace/ui/components/button"

const DashboardView = () => {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6">
      <p>WEB APP</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button onClick={() => addUser()}>Add</Button>
      <p>{JSON.stringify(users)} </p>
    </div>
  )
}

export default DashboardView
