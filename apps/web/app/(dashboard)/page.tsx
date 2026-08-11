import { auth } from "@clerk/nextjs/server"
import DashboardView from "./DashboardView"

export default async function Page() {
  await auth.protect()
  return <DashboardView />
}
