import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
  secondary: "border-transparent bg-slate-200 text-slate-900 hover:bg-slate-200/80 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-700/80",
  destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-600 dark:hover:bg-red-600",
  outline: "text-slate-950 dark:text-slate-50"
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
