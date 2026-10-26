import { clsx } from "clsx";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "icon";
type StyleProps = { variant?: Variant; size?: Size; className?: string };

export function Button({ variant = "primary", size = "md", className, type = "button", ...props }: ComponentProps<"button"> & StyleProps) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
        {
          primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
          secondary: "border border-border bg-surface text-foreground hover:border-accent hover:bg-border",
          ghost: "text-muted hover:text-foreground",
        }[variant],
        { sm: "min-h-10 px-5 text-sm", md: "min-h-12 px-6 text-base", icon: "size-11" }[size],
        className,
      )}
      {...props}
    />
  );
}
