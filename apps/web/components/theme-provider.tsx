"use client"

import { useAuth } from "@clerk/nextjs"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")
function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}

export { ThemeProvider }
