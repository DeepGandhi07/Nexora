"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react"
import { AuthLayout } from "../layouts/auth-layout"
import { SignInView } from "../views/sign-in-view"
import Image from "next/image"

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <Image
            src="/logo.gif"
            alt=""
            width={50}
            height={50}
            loading="eager"
            unoptimized
          />
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  )
}
