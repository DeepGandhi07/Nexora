// import { clerkMiddleware } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"

// const isRoutePrefix = (pathname: string, route: string) =>
//   pathname === route || pathname.startsWith(`${route}/`)

// const isPublicRoute = (pathname: string) =>
//   isRoutePrefix(pathname, "/sign-in") || isRoutePrefix(pathname, "/sign-up")

// const isOrgFreeRoute = (pathname: string) =>
//   isPublicRoute(pathname) || isRoutePrefix(pathname, "/org-selection")

// export default clerkMiddleware(async (auth, req) => {
//   const pathname = req.nextUrl.pathname
//   const { userId, orgId } = await auth()

//   if (!isPublicRoute(pathname)) {
//     await auth.protect()
//   }

//   if (userId && !orgId && !isOrgFreeRoute(pathname)) {
//     const searchParams = new URLSearchParams({ redirectUrl: req.url })

//     const orgSelection = new URL(
//       `/org-selection?${searchParams.toString()}`,
//       req.url
//     )

//     return NextResponse.redirect(orgSelection)
//   }

//   return NextResponse.next()
// })
// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//     // Always run for Clerk frontend API routes
//     "/__clerk/(.*)",
//   ],
// }
import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
}
