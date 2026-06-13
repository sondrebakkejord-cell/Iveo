import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "./CookieBanner";
import { LanguageProvider } from "./lang";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://iveo-nine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Iveo — Moderne nettsider og hosting i Norge",
    template: "%s | Iveo",
  },
  description:
    "Iveo lager skreddersydde nettsider for norske bedrifter. Far-og-sønn-team. Levert på én uke fra 1 990 kr. Hosting og support inkludert. AI-løsninger kommer 2026.",
  keywords: [
    "nettside",
    "webdesign",
    "hosting Norge",
    "lage nettside",
    "billig nettside",
    "Next.js Norge",
    "lokal webutvikler",
    "skreddersydd nettside",
    "norsk webbyrå",
    "AI-chatbot bedrift",
    "AI-resepsjonist",
    "Iveo",
  ],
  authors: [{ name: "Sondre Bakkejord" }],
  creator: "Iveo",
  publisher: "Iveo",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Iveo — Moderne nettsider og hosting i Norge",
    description:
      "Far-og-sønn-team som lager nettsider. Levert på én uke fra 1 990 kr. Hosting inkludert.",
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "Iveo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iveo — moderne nettsider for norske bedrifter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iveo — Moderne nettsider og hosting i Norge",
    description:
      "Far-og-sønn-team som lager nettsider. Levert på én uke fra 1 990 kr.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iveo",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    "Norsk teknologiselskap som leverer skreddersydde nettsider og hosting. AI-løsninger kommer 2026.",
  foundingDate: "2026",
  founder: [
    { "@type": "Person", name: "Sondre Bakkejord" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+47-484-72-586",
    contactType: "Customer Service",
    email: "sondrebakkejord@gmail.com",
    availableLanguage: ["Norwegian", "English"],
    areaServed: "NO",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}#business`,
  name: "Iveo",
  image: `${BASE_URL}/icon.svg`,
  url: BASE_URL,
  telephone: "+47-484-72-586",
  email: "sondrebakkejord@gmail.com",
  priceRange: "1990–9990 NOK",
  description:
    "Iveo lager moderne nettsider og tilbyr hosting for norske bedrifter. Leveringstid: én uke.",
  areaServed: { "@type": "Country", name: "Norway" },
  address: { "@type": "PostalAddress", addressCountry: "NO" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NOK",
    lowPrice: "1990",
    highPrice: "9990",
    offerCount: "3",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Iveo",
  url: BASE_URL,
  inLanguage: "nb-NO",
  publisher: {
    "@type": "Organization",
    name: "Iveo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-slate-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Hopp til hovedinnhold
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
