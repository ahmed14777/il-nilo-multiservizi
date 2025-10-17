import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Minimal card – composition first. */
export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-xl border bg-white shadow-soft", className)} {...rest} />;
}
