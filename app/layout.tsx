import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iveo — Nettsider, hosting og AI",
  description: "Iveo lager moderne nettsider, tilbyr hosting og bygger AI-løsninger for fremtiden. Far-og-sønn-team i Norge.",
  keywords: ["nettside", "hosting", "AI", "Iveo", "Norge", "webutvikling", "Next.js"],
  openGraph: {
    title: "Iveo — Nettsider, hosting og AI",
    description: "Far-og-sønn-team som lager moderne nettsider. Levert på en uke.",
    type: "website",
    locale: "no_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
