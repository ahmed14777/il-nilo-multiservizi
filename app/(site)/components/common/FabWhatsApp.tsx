"use client";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { withUTM } from "@/lib/utm";

/** Build a WhatsApp deep-link with a pre-filled message (safe). */
function buildWaLink(phone: string = "", text?: string, fallback = false) {
  const trimmed = (phone || "").trim();
  if (!trimmed) return ""; // guard

  const num = trimmed.replace(/[^\d+]/g, "").replace(/^\+/, "");
  if (!num) return ""; // guard: invalid after sanitize

  const msg = text ? encodeURIComponent(text) : "";
  const base = fallback
    ? `https://api.whatsapp.com/send?phone=${num}`
    : `https://wa.me/${num}`;
  return base + (msg ? (fallback ? `&text=${msg}` : `?text=${msg}`) : "");
}

/** Floating WhatsApp button — refined design, safe-area aware, and accessible. */
export default function FabWhatsApp({
  phone,
  defaultMessage,
  label = "WhatsApp",
  showBadge = true,
  offset = 24, // px offset from edges
}: {
  phone?: string; // optional: component won't render if missing/invalid
  defaultMessage?: string;
  label?: string;
  showBadge?: boolean;
  offset?: number;
}) {
  const prefersReduced = useReducedMotion();

  // Build href only if phone is valid
  const href = useMemo(() => {
    if (!phone) return "";
    const primary = buildWaLink(phone, defaultMessage);
    return primary ? withUTM(primary, "whatsapp_fab") : "";
  }, [phone, defaultMessage]);

  // If phone is missing or link couldn't be built, don't render the FAB.
  if (!href) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat su WhatsApp"
      className="group fixed z-[60] inline-flex items-center justify-center"
      style={{
        right: `max(env(safe-area-inset-right), ${offset}px)`,
        bottom: `max(env(safe-area-inset-bottom), ${offset}px)`,
      }}
      initial={false}
      whileHover={!prefersReduced ? { scale: 1.08 } : undefined}
      whileTap={!prefersReduced ? { scale: 0.95 } : undefined}
    >
      {/* Main circular button */}
      <div
        className={[
          "relative flex h-[60px] w-[60px] items-center justify-center rounded-full text-white",
          "shadow-lg shadow-emerald-800/25 ring-1 ring-black/10",
          "bg-[linear-gradient(135deg,#25D366_0%,#128C7E_100%)]",
          "transition-all duration-300",
        ].join(" ")}
      >
        {/* Official WhatsApp SVG (crisp & centered) */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[30px] w-[30px] fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.296-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.613-.922-2.207-.243-.584-.49-.505-.672-.514l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zM12.561 22.666h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.258c.001-5.45 4.436-9.884 9.887-9.884 2.64 0 5.12 1.03 6.988 2.899a9.825 9.825 0 0 1 2.897 6.985c-.003 5.45-4.437 9.884-9.888 9.884zM20.52 3.48C18.41 1.37 15.76.2 12.93.2 6.48.2 1.05 5.63 1.05 12.08c0 2.11.55 4.17 1.6 5.98L1 24l6.1-1.6a11 11 0 0 0 5.83 1.6h0c6.45 0 11.88-5.43 11.88-11.88 0-3.18-1.24-6.17-3.47-8.34z" />
        </svg>

        {/* Subtle pulse (respects prefers-reduced-motion) */}
        {!prefersReduced && (
          <span className="absolute -z-10 h-[60px] w-[60px] animate-[ping_2.5s_ease_infinite] rounded-full bg-emerald-400/30" />
        )}
      </div>

      {/* Tooltip label on md+ screens */}
      <div className="pointer-events-none ml-3 hidden select-none overflow-hidden rounded-full bg-slate-900/90 px-3 py-2 text-xs text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 md:block">
        {label}
        {showBadge && (
          <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-[2px] text-[10px] text-emerald-200">
            Risposta rapida
          </span>
        )}
      </div>

      <span className="sr-only">Apri chat WhatsApp</span>
    </motion.a>
  );
}
