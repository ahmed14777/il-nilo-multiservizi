import { ReactNode } from "react";

/** Accessible section heading. */
export function Heading({ children }: { children: ReactNode }){
  return <h2 className="text-2xl sm:text-3xl font-bold">{children}</h2>;
}
