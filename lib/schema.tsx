"use client";
import { siteConfig } from "@/config/site";

/** LocalBusiness JSON-LD for local SEO */
export function LocalBusinessJsonLd(){
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand.name,
    areaServed: siteConfig.brand.region,
    address: { "@type":"PostalAddress", addressLocality:"Milano", addressRegion:"Lombardia", addressCountry:"IT" },
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    image: `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`,
    description: siteConfig.seo.description
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
