"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/motion";
import { siteConfig } from "@/config/site";

/** Mobile-first hero – strong copy + clear CTA. */
export default function Hero(){
  const reduce = useReducedMotion();
  return (
    <section id="home" className="bg-gradient-to-b from-slateish/60 to-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:py-12 md:grid-cols-2 md:gap-12">
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            ✅ 10+ anni in {siteConfig.brand.region} · Squadre certificate · Prezzi trasparenti
          </motion.div>
          <motion.h1 {...fadeUp(0.05)} className="mt-3 font-bold leading-tight" style={{ fontSize:"clamp(28px,4vw,48px)" }}>
            Servizi di <span className="text-primary">pulizia</span>, <span className="text-primary">sanificazione</span> e <span className="text-primary">sgomberi</span> in tutta la {siteConfig.brand.region}
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="mt-3 text-slate-600" style={{ fontSize:"clamp(14px,1.6vw,18px)" }}>
            Dalla manutenzione al giardinaggio fino alla lucidatura del marmo. Preventivi chiari, risultati visibili e tempi rapidi.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#preventivo" className="btn-primary">Richiedi preventivo</a>
            <a href="#servizi" className="btn-outline">Vedi servizi</a>
          </motion.div>
        </div>
        <motion.div {...(reduce?{}:scaleIn(0.1))} className="relative w-full">
          <div className="relative aspect-[4/3] sm:aspect-[5/4]">
            <div className="absolute inset-0 rounded-2xl bg-primary-10" />
            <Image src="/hero-cleaning.jpg" alt="Pulizie professionali in Lombardia" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="rounded-2xl object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
