"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLockBodyScroll, useEscape, useFocusTrap } from "@/lib/hooks";

/**
 * Modal di ringraziamento — centrato, bloccando lo scroll.
 */
export default function ThankYouModal({
  open,
  onClose,
  title = "Grazie!",
  subtitle = "La tua richiesta è stata inviata correttamente. Ti contatteremo presto.",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}) {
  useLockBodyScroll(open);
  useEscape(onClose, open);
  const trapRef = useFocusTrap(open);

  // ضمان أن الصفحة لا تتحرك حتى باللمس
  useEffect(() => {
    if (!open) return;
    const preventScroll = (e: TouchEvent) => e.preventDefault();
    document.body.addEventListener("touchmove", preventScroll, {
      passive: false,
    });
    return () => document.body.removeEventListener("touchmove", preventScroll);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            ref={trapRef}
            className="relative mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl sm:mx-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

              <motion.button
                onClick={onClose}
                whileTap={{ scale: 0.96 }}
                className="mt-6 w-full rounded-lg bg-[var(--color-primary,_#009FC2)] px-4 py-2.5 text-sm font-medium text-white shadow-md transition hover:brightness-110"
              >
                Chiudi
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
