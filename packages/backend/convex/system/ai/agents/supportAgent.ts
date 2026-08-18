import { google } from "@ai-sdk/google"
import { Agent } from "@convex-dev/agent"
import { components } from "../../../_generated/api"

export const supportAgent = new Agent(components.agent, {
  name: "Nexora Agent",
  chat: google.chat("gemini-3.6-flash"),
  instructions: "You are customer support agent",
})
