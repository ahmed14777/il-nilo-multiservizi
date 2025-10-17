"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Service } from "@/data/services";

/** Clickable service summary card with image. */
export default function ServiceCard({
  s,
  onOpen,
}: {
  s: Service;
  onOpen: (slug: string) => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(s.slug)}
      className="group text-left overflow-hidden rounded-xl border bg-white shadow-soft transition-shadow hover:shadow-lg"
      aria-label={`Apri dettagli servizio ${s.title}`}
    >
      {/* ✅ صورة الخدمة */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={s.image}
          alt={s.alt ?? s.title}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{s.title}</h3>
          <span className="rounded-full bg-primary-10 px-2 py-1 text-xs text-primary">
            Scopri
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-600">{s.short}</p>
        <ul className="mt-3 space-y-1 text-xs text-slate-600">
          {s.points.slice(0, 3).map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>
    </motion.button>
  );
}
