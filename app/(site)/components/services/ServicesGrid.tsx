"use client";
import { useState } from "react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

/** Grid + modal controller – isolates state nicely. */
export default function ServicesGrid(){
  const [active, setActive]=useState<string|undefined>(undefined);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s=> <ServiceCard key={s.slug} s={s} onOpen={setActive} />)}
      </div>
      <ServiceModal active={active} onClose={()=>setActive(undefined)} />
    </>
  );
}
