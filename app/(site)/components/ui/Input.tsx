import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Consistent inputs with proper focus states. */
export function Input(props: InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className={cn("w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-[var(--color-primary)]", props.className)} />;
}
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>){
  return <textarea {...props} className={cn("w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-[var(--color-primary)]", props.className)} />;
}
