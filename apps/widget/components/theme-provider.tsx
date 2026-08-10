"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}

export { ThemeProvider }
