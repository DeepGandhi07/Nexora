import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { ConversationsPanel } from "../components/conversations-panel"

export const ConversationsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ResizablePanelGroup className="h-full" orientation="horizontal">
      <ResizablePanel defaultSize="30%" minSize="20%" maxSize="40%">
        <ConversationsPanel />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize="70%">{children}</ResizablePanel>
    </ResizablePanelGroup>
  )
}
