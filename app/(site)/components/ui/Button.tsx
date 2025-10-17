import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Generic button primitive – variants kept simple and reusable. */
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  full?: boolean;
};

export function Button({ variant="primary", full, className, ...rest }: Props){
  const base="inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]";
  const variants={
    primary:"px-5 py-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] shadow-sm",
    outline:"px-5 py-3 border border-slate-300 bg-white text-ink hover:bg-slateish",
    ghost:"px-4 py-2 text-ink hover:bg-slateish"
  }[variant];
  return <button className={cn(base, variants, full&&"w-full", className)} {...rest} />;
}
