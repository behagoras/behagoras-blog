import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/cn"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-[rgba(232,96,76,0.06)] text-[var(--text-secondary)] hover:border-[var(--coral)] hover:text-[var(--text-primary)] hover:bg-[var(--coral-glow)]",
        coral:
          "border-[var(--coral)] bg-[var(--coral-glow)] text-[var(--coral)]",
        teal:
          "border-[var(--teal)] bg-[var(--teal-glow)] text-[var(--teal)]",
        navy:
          "border-[var(--navy)] bg-[rgba(26,35,50,0.06)] text-[var(--navy)]",
        outline:
          "border-[var(--border)] text-[var(--text-secondary)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
