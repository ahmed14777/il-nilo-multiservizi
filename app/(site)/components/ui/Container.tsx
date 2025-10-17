import { ReactNode } from "react";

/** Layout container – consistent max width/padding across pages. */
export function Container({ children }: { children: ReactNode }){
  return <div className="mx-auto w-full max-w-7xl px-4">{children}</div>;
}
