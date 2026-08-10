import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname

  if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
    return NextResponse.next()
  }

  await auth.protect()

  return NextResponse.next()
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk frontend API routes
    "/__clerk/(.*)",
  ],
}
