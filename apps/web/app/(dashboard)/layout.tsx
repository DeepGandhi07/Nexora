import { AuthGuard } from "@/modules/auth/ui/components/auth-guard"
import { OrginizationGuard } from "@/modules/auth/ui/components/organization-guard"
import "@workspace/ui/globals.css"

import React from "react"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <AuthGuard>
      <OrginizationGuard>{children}</OrginizationGuard>
    </AuthGuard>
  )
}

export default Layout
