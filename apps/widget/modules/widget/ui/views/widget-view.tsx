"use client"

import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen"
import { useAtomValue } from "jotai"
import { screenAtom } from "../../atoms/widget-atoms"
import WidgetErrorScreen from "../screens/widget-error-screen"
import WidgetLoadingScreen from "../screens/widget-loading-screen"
import { WidgetSelectionScreen } from "../screens/widget-selection-screen"
import { WidgetChatScreen } from "../screens/widget-chat-screen"
import { WidgetInboxScreen } from "../screens/widget-inbox-screen"

interface Props {
  organizationId: string
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom)

  const screenComponents = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    auth: <WidgetAuthScreen />,
    voice: <p>TODO: Voice</p>,
    inbox: <WidgetInboxScreen />,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    contact: <p>TODO: Contact</p>,
  }
  return (
    // TODO: Confirm whether or not "min-h-screen" and "min-w-screen" is needed
    <main className="flex h-full min-h-screen flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  )
}
