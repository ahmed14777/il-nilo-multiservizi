"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/services";
import { Button } from "../ui/Button";
import { useEscape, useFocusTrap, useLockBodyScroll } from "@/lib/hooks";

/** Fullscreen bottom-sheet for immersive service details with image banner + smooth close-to-scroll behavior. */
export default function ServiceModal({
  active,
  onClose,
}: {
  active?: string;
  onClose: () => void;
}) {
  const service = services.find((s) => s.slug === active);
  const open = !!service;

  useLockBodyScroll(open);
  useEscape(onClose, open);
  const trapRef = useFocusTrap(open);

  // ✅ وظيفة الانتقال بعد الإغلاق
  const handlePreventivoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose(); // يقفل المودال أولاً
    setTimeout(() => {
      const el = document.getElementById("preventivo");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400); // بعد خروج الأنيميشن (حوالي 0.4 ثانية)
  };

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* خلفية شفافة */}
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          {/* ✅ مودال سفلي */}
          <motion.div
            ref={trapRef}
            className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl rounded-t-2xl bg-white overflow-hidden shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="svc-title"
          >
            {/* ✅ صورة الخدمة في الأعلى */}
            {service.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt ?? service.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            )}

            {/* محتوى النص */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3
                  id="svc-title"
                  className="text-xl font-semibold text-slate-900"
                >
                  {service.title}
                </h3>
                <button
                  onClick={onClose}
                  className="h-9 w-9 rounded-md hover:bg-slateish"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <p className="mt-2 text-slate-600">{service.short}</p>

              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {service.points.map((p, i) => (
                  <li
                    key={i}
                    className="rounded-md bg-slateish px-3 py-2 text-slate-700"
                  >
                    • {p}
                  </li>
                ))}
              </ul>

              {/* ✅ الزر الذي يغلق المودال ثم يذهب للـ preventivo */}
              <div className="mt-5 inline-flex">
                <Button onClick={handlePreventivoClick}>
                  Richiedi preventivo per {service.title}
                </Button>
              </div>

              {/* SEO keywords */}
              <div className="sr-only">
                {service.keywords.join(", ")} · Lombardia · Milano · Monza ·
                Bergamo · Brescia · Varese
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
