"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ThankYouModal from "../common/ThankYouModal";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startedAt = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const honeyRef = useRef<HTMLInputElement>(null);

  const action = `https://formsubmit.co/${encodeURIComponent(
    siteConfig.contact.email
  )}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // honeypot + time-trap
    if (honeyRef.current?.value) return;
    if (Date.now() - startedAt.current < 1200) {
      setError("Per favore riprova tra un attimo.");
      return;
    }

    try {
      setBusy(true);
      const formEl = formRef.current!;
      const fd = new FormData(formEl);

      // إعدادات FormSubmit
      fd.set("_captcha", "false");
      fd.set("_template", "table");
      fd.set("_subject", `Nuova richiesta — ${siteConfig.brand.name}`);
      fd.set("_cc", "ayaddev99@gmail.com");
      fd.set(
        "_autoresponse",
        "Grazie per averci contattato! Ti risponderemo al più presto."
      );
      if (!fd.get("page_url")) {
        fd.set(
          "page_url",
          typeof window !== "undefined"
            ? window.location.href
            : siteConfig.seo.siteUrl
        );
      }

      const res = await fetch(action, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" }, // يمنع الـ redirect
        mode: "cors",
      });

      if (!res.ok) throw new Error("Invio non riuscito");
      // نجاح: افتح المودال + امسح القيم
      setOpen(true);
      formEl.reset();
      startedAt.current = Date.now();
    } catch (err) {
      console.error(err);
      setError("Invio non riuscito. Riprova tra poco.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <section
        id="contatti"
        className="relative mx-auto w-full max-w-3xl rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-lg backdrop-blur-md sm:p-7"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Richiedi un preventivo
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Risposta rapida in Lombardia —{" "}
              {siteConfig.brand.cities.slice(0, 3).join(" · ")}…
            </p>
          </div>
          <span className="hidden rounded-full bg-[var(--color-primary,_#009FC2)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary,_#009FC2)] sm:inline">
            Gratuito &amp; senza impegno
          </span>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot */}
          <input
            ref={honeyRef}
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* حقول */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group">
              <label className="block text-[13px] font-medium text-slate-700 group-focus-within:text-slate-900">
                Nome*
              </label>
              <input
                id="from_name"
                name="from_name"
                required
                placeholder="Mario Rossi"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary,_#009FC2)] focus:ring-2 focus:ring-[var(--color-primary,_#009FC2)]/20"
              />
            </div>

            <div className="group">
              <label className="block text-[13px] font-medium text-slate-700 group-focus-within:text-slate-900">
                Email*
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                placeholder="mario@email.it"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary,_#009FC2)] focus:ring-2 focus:ring-[var(--color-primary,_#009FC2)]/20"
              />
            </div>

            <div className="group">
              <label className="block text-[13px] font-medium text-slate-700 group-focus-within:text-slate-900">
                Telefono
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="+39 ..."
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary,_#009FC2)] focus:ring-2 focus:ring-[var(--color-primary,_#009FC2)]/20"
              />
            </div>

            <div className="group">
              <label className="block text-[13px] font-medium text-slate-700 group-focus-within:text-slate-900">
                Servizio
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary,_#009FC2)] focus:ring-2 focus:ring-[var(--color-primary,_#009FC2)]/20"
              >
                <option value="">Seleziona…</option>
                <option>Pulizie professionali</option>
                <option>Sanificazione</option>
                <option>Sgomberi</option>
                <option>Imbiancatura</option>
                <option>Lucidatura marmo</option>
                <option>Giardinaggio</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-[13px] font-medium text-slate-700 group-focus-within:text-slate-900">
              Messaggio*
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Raccontaci cosa ti serve..."
              className="mt-1 min-h-[120px] w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary,_#009FC2)] focus:ring-2 focus:ring-[var(--color-primary,_#009FC2)]/20"
            />
          </div>

          <input
            type="hidden"
            name="page_url"
            value={
              typeof window !== "undefined"
                ? window.location.href
                : siteConfig.seo.siteUrl
            }
          />

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-600">
              Inviando il modulo accetti l'uso dei dati per ricontattarti.
            </p>

            <motion.div whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                type="submit"
                disabled={busy}
                className="w-full sm:w-auto rounded-lg bg-[var(--color-primary,_#009FC2)] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary,_#009FC2)]/30"
              >
                {busy ? "Invio in corso…" : "Invia richiesta"}
              </Button>
            </motion.div>
          </div>

          {error && (
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-red-600"
            >
              {error}
            </p>
          )}
        </form>
      </section>

      {/* المودال — يفتح فورًا بعد النجاح */}
      <ThankYouModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
