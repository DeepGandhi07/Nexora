import { ConversationsLayout } from "@/modules/dashboard/ui/layouts/conversations-layout"
import React from "react"

const Layout = ({ childern }: { childern: React.ReactNode }) => {
  return <ConversationsLayout>{childern}</ConversationsLayout>
}

export default Layout
