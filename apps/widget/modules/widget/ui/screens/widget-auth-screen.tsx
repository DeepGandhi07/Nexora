"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "convex/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

import { WidgetHeader } from "@/modules/widget/ui/components/widget-header"
import { api } from "../../../../../../packages/backend/convex/_generated/api"
import { Doc } from "../../../../../../packages/backend/convex/_generated/dataModel"
import { useAtomValue, useSetAtom } from "jotai"
import {
  contactSessionIdAtomFamily,
  organizationIdAtom,
} from "../../atoms/widget-atoms"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
})

type FormValues = z.infer<typeof formSchema>

export const WidgetAuthScreen = () => {
  const organizationId = useAtomValue(organizationIdAtom)
  const setContactSessionId = useSetAtom(
    contactSessionIdAtomFamily(organizationId || "")
  )
  const createContactSession = useMutation(api.public.contactSessions.create)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    if (!organizationId) {
      return
    }

    try {
      const metadata: Doc<"contactSessions">["metadata"] = {
        //   const metadata = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages?.join(","),
        platform: navigator.platform,
        vendor: navigator.vendor,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        cookieEnabled: navigator.cookieEnabled,
        referrer: document.referrer || "direct",
        currentUrl: window.location.href,
      }

      const contactSessionId = await createContactSession({
        ...values,
        organizationId,
        metadata,
      })

      setContactSessionId(contactSessionId)
    } catch (error) {
      console.error("Failed to create contact session:", error)
    }
  }

  return (
    <div className="flex h-full flex-col bg-background">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi there! 👋</p>
          <p className="text-lg"> Let&apos;s get you started</p>
        </div>
      </WidgetHeader>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-4 p-4"
      >
        <FieldGroup>
          <Field data-invalid={!!form.formState.errors.name}>
            <FieldLabel htmlFor="name">Name</FieldLabel>

            <Input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              className="h-10 bg-background"
              aria-invalid={!!form.formState.errors.name}
              {...form.register("name")}
            />

            <FieldError>{form.formState.errors.name?.message}</FieldError>
          </Field>

          <Field data-invalid={!!form.formState.errors.email}>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <Input
              id="email"
              type="email"
              placeholder="e.g. john.doe@example.com"
              className="h-10 bg-background"
              aria-invalid={!!form.formState.errors.email}
              {...form.register("email")}
            />

            <FieldError>{form.formState.errors.email?.message}</FieldError>
          </Field>
        </FieldGroup>

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Please wait..." : "Continue"}
        </Button>
      </form>
    </div>
  )
}
