export const siteConfig = {
  brand: {
    name: "IL NILO Multiservizi",
    short: "IL NILO",
    region: "Lombardia",
    cities: [
      "Milano",
      "Monza",
      "Bergamo",
      "Brescia",
      "Varese",
      "Como",
      "Pavia",
    ],
  },
  theme: {
    primary: "#009FC2",
    primaryLight: "#48C8D2",
    ink: "#0f172a",
    canvas: "#ffffff",
    soft: "#F3F7FA",
  },
  contact: {
    phone: "+393804694981",
    email: "ayaddev99@gmail.com",
    address: "Milano, Lombardia",
    whatsapp: "+393804694981",
    whatsappDefaultMsg:
      "Ciao! Vorrei un preventivo per pulizie/sanificazione/sgomberi in Lombardia.",
  },
  nav: [
    { href: "#servizi", label: "Servizi" },
    { href: "#contatti", label: "Contatti" },
  ],
  seo: {
    title:
      "Pulizie, Sanificazione e Sgomberi in Lombardia | IL NILO Multiservizi",
    description:
      "Servizi professionali di pulizie, sanificazione e sgomberi in tutta la Lombardia. Preventivi rapidi e gratuiti.",
    keywords: [
      "pulizie Lombardia",
      "pulizie Milano",
      "sanificazione Lombardia",
      "sgomberi Milano",
      "impresa pulizie",
      "imbiancatura",
      "lucidatura marmo",
    ],
    siteUrl: "https://www.il-nilo.com",
    ogImage: "/og.jpg",
  },
} as const;
export type SiteConfig = typeof siteConfig;
