import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex max-w-md min-w-0 flex-col items-center justify-center gap-4 text-sm leading-loose">
        <p>Hello World/web</p>
        <Button>Button</Button>
      </div>
    </div>
  )
}
