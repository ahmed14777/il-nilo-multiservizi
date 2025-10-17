import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import ServicesGrid from "./components/services/ServicesGrid";
import Section from "./components/sections/Section";
import { Card } from "./components/ui/Card";
import ContactForm from "./components/forms/ContactForm";
import { siteConfig } from "@/config/site";

/** Home page – production ready and conversion-focused. */
export default function HomePage() {
  return (
    <main id="main" className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="servizi" title="I nostri servizi">
        <ServicesGrid />
      </Section>

      <Section id="contatti" title="Contatti">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-6 scroll-mt-24 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Contatti & Operatività
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Operiamo in tutta la{" "}
              <strong className="text-[var(--color-primary,_#009FC2)]">
                {siteConfig.brand.region}
              </strong>{" "}
              — {siteConfig.brand.cities.join(", ")}.
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[var(--color-primary,_#009FC2)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9m-9 0a1 1 0 001 1h6a1 1 0 001-1m-8 0h8"
                  />
                </svg>
                <span>{siteConfig.contact.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[var(--color-primary,_#009FC2)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 8.5A2.5 2.5 0 014.5 6h15A2.5 2.5 0 0122 8.5v7a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 15.5v-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 8l-10 6L2 8"
                  />
                </svg>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[var(--color-primary,_#009FC2)] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[var(--color-primary,_#009FC2)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.35 4.05a1 1 0 01-.45 1.2l-2.1 1.26a11.05 11.05 0 005.02 5.02l1.26-2.1a1 1 0 011.2-.45l4.05 1.35a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                  />
                </svg>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary,_#009FC2)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-3 text-xs text-slate-500">
              <p>
                <strong>Orari:</strong> Lun–Sab 8:00–19:00
              </p>
              <p>
                <strong>Email rapida:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline hover:text-[var(--color-primary,_#009FC2)]"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </Card>
          <Card className="p-4 scroll-mt-24" id="preventivo">
            <ContactForm />
          </Card>
        </div>
      </Section>

      <footer className="mt-12 border-t py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {siteConfig.brand.name}
          </p>
          <p className="text-xs text-slate-500">
            SEO · Lombardia · Pulizie · Sanificazione · Sgomberi
          </p>
        </div>
      </footer>
    </main>
  );
}
