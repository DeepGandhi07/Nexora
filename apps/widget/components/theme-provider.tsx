"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { Provider } from "jotai"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <ConvexProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexProvider>
  )
}

export { ThemeProvider }
