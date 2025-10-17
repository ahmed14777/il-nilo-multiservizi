"use client";
import { motion } from "framer-motion";
import { Button } from "@/app/(site)/components/ui/Button";
import { useEscape, useFocusTrap, useLockBodyScroll } from "@/lib/hooks";

type NavItem = { href: string; label: string };

export default function MobileMenu({
  onClose,
  items,
}: {
  onClose: () => void;
  // ✅ متوافقة مع siteConfig.nav
  items: ReadonlyArray<NavItem>;
}) {
  useLockBodyScroll(true);
  useEscape(onClose, true);
  const trapRef = useFocusTrap(true);

  return (
    <motion.aside
      className="fixed inset-0 z-50 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        aria-label="Chiudi"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />
      <motion.nav
        ref={trapRef}
        className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white p-6"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        style={{ paddingTop: "max(env(safe-area-inset-top), 1rem)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <ul className="space-y-2">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                onClick={onClose}
                className="block rounded-md px-3 py-3 text-[15px] hover:bg-slateish"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mt-auto pt-6"
          style={{ paddingBottom: "max(env(safe-area-inset-bottom), 12px)" }}
        >
          <a
            href="#preventivo"
            onClick={onClose}
            className="w-full inline-flex"
          >
            <Button full>Richiedi preventivo</Button>
          </a>
          <p className="mt-3 text-xs text-slate-500">10+ anni in Lombardia</p>
        </div>
      </motion.nav>
    </motion.aside>
  );
}
