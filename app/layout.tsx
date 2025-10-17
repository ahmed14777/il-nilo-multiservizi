import "./../styles/globals.css";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import FabWhatsApp from "./(site)/components/common/FabWhatsApp";
import SkipLink from "./(site)/components/common/SkipLink";
import { LocalBusinessJsonLd } from "@/lib/schema";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const vars: React.CSSProperties = {
    ["--color-primary" as any]: siteConfig.theme.primary,
    ["--color-primary-light" as any]: siteConfig.theme.primaryLight,
    ["--color-ink" as any]: siteConfig.theme.ink,
    ["--color-soft" as any]: siteConfig.theme.soft,
    ["--color-canvas" as any]: siteConfig.theme.canvas,
  };

  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content={siteConfig.theme.primary} />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body style={vars} className="antialiased">
        <SkipLink />
        {children}
        <FabWhatsApp
          phone={siteConfig.contact.whatsapp}
          defaultMessage={siteConfig.contact.whatsappDefaultMsg}
        />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
