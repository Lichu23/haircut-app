import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function InfoCutTime() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="rounded-2xl border-black"  asChild>
          <Button>i</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Cut time 30min</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
