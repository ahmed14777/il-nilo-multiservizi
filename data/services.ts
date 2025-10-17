// data/services.ts
export type Service = {
  slug: string;
  title: string;
  short: string;
  points: string[];
  keywords: string[];
  image: string; // ✅ new
  alt?: string; // ✅ optional
};

export const services: Service[] = [
  {
    slug: "pulizie",
    title: "Pulizie professionali",
    short: "Condomini, uffici, appartamenti.",
    points: [
      "Programmi periodici",
      "Materiali certificati",
      "Sopralluogo gratuito",
    ],
    keywords: [
      "pulizie Lombardia",
      "pulizie Milano",
      "pulizie uffici Milano",
      "impresa pulizie Lombardia",
    ],
    image: "/images/servizi/pulizia.png",
    alt: "Operatore di pulizie in ufficio a Milano",
  },
  {
    slug: "giardinaggio",
    title: "Servizi di Giardinaggio",
    short: "Manutenzione e cura di giardini e aree verdi.",
    points: [
      "Taglio erba e potatura siepi",
      "Irrigazione e trattamenti stagionali",
      "Pulizia e smaltimento del verde",
    ],
    keywords: [
      "giardinaggio Lombardia",
      "manutenzione giardini Milano",
      "cura del verde Lombardia",
      "servizi giardinaggio professionali",
    ],
    image: "/images/servizi/giardinaggio.png",
    alt: "Giardiniere professionale che cura un giardino a Milano",
  },
  {
    slug: "sanificazione",
    title: "Sanificazione",
    short: "Ambienti sani e sicuri.",
    points: [
      "Prodotti a norma",
      "Attrezzature professionali",
      "Certificazione intervento",
    ],
    keywords: [
      "sanificazione Lombardia",
      "igienizzazione ambienti",
      "sanificazione Milano",
    ],
    image: "/images/servizi/sanificazione.jpg",
    alt: "Sanificazione ambientale con dispositivi professionali",
  },
  {
    slug: "sgomberi",
    title: "Sgomberi rapidi",
    short: "Case, cantine, solai, uffici.",
    points: ["Smaltimento autorizzato", "Tempi rapidi", "Preventivo chiaro"],
    keywords: ["sgomberi Lombardia", "sgombero Milano", "sgomberi rapidi"],
    image: "/images/servizi/sgombero.png",
    alt: "Sgombero locale con team e furgone",
  },
  {
    slug: "imbiancatura",
    title: "Imbiancatura",
    short: "Rinnovo pareti e colori.",
    points: ["Protezione ambienti", "Finiture precise", "Tempi certi"],
    keywords: ["imbiancatura Milano", "imbianchino Lombardia"],
    image: "/images/servizi/imbiancatura.png",
    alt: "Imbianchino che tinteggia una parete con rullo",
  },
  {
    slug: "lucidatura-marmo",
    title: "Lucidatura marmo",
    short: "Ripristino lucentezza.",
    points: ["Levigatura", "Crystallizzazione", "Manutenzione"],
    keywords: ["lucidatura marmo Lombardia", "lucidatura pavimenti Milano"],
    image: "/images/servizi/lucidatura-marmo.png",
    alt: "Lucidatura di pavimento in marmo",
  },
];
