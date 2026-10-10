// Find Organization Id

import { ConvexError } from "convex/values"
import { ActionCtx, QueryCtx } from "./_generated/server"

export const getOrganizationId = async (ctx: QueryCtx | ActionCtx) => {
  const identity = await ctx.auth.getUserIdentity()

  if (identity === null) {
    throw new ConvexError({
      code: "UNAUTHORIZED",
      message: "Identity not found",
    })
  }

  const organization = identity.o as
    | {
        id?: string
        rol?: string
        slg?: string
      }
    | undefined

  const orgId = organization?.id

  if (!orgId) {
    throw new ConvexError({
      code: "UNAUTHORIZED",
      message: "Organization not found",
    })
  }

  return orgId
}
