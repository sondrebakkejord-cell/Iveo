import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "./Breadcrumb";

export const metadata: Metadata = {
  title: "Eksempler — Slik kan nettsiden din se ut",
  description:
    "Fem eksempler på nettsider Iveo kan bygge for små og mellomstore norske bedrifter — restaurant, rørlegger, snekker, tannlege og kafé. Klikk for å se hver side.",
  keywords: [
    "eksempel nettside",
    "demo nettside",
    "lage nettside bedrift",
    "nettside restaurant",
    "nettside frisør",
    "nettside rørlegger",
    "nettside snekker",
    "nettside tannlege",
    "nettside kafé",
  ],
  alternates: { canonical: "https://iveo-nine.vercel.app/eksempler" },
  openGraph: {
    title: "Eksempler — Slik kan nettsiden din se ut | Iveo",
    description: "Fem eksempler på nettsider Iveo kan bygge for norske bedrifter.",
    url: "https://iveo-nine.vercel.app/eksempler",
    type: "website",
  },
};

const examples = [
  {
    slug: "pizza",
    name: "Bakkejord Pizza",
    industry: "Italiensk restaurant",
    desc: "Varm, rustikk italiensk identitet med meny, historien bak og online-bestilling.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-red-700",
    text: "text-amber-50",
  },
  {
    slug: "ror",
    name: "Bakkejord Rør",
    industry: "Rørleggerfirma",
    desc: "Tillit, kompetanse og rask hjelp. Stor telefon, vakttelefon og tjenesteliste.",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-blue-700",
    text: "text-white",
  },
  {
    slug: "snekker",
    name: "Bakkejord Snekker",
    industry: "Snekkerfirma",
    desc: "Håndverk, materialer, portefølje. Lune treaktige toner.",
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-stone-800",
    text: "text-amber-100",
  },
  {
    slug: "tannlege",
    name: "Tannlege Bakkejord",
    industry: "Tannlegekontor",
    desc: "Rolig, trygg og profesjonell. Tjenester, team og online timebestilling.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-teal-600",
    text: "text-white",
  },
  {
    slug: "kafe",
    name: "Bakkejord Kafé",
    industry: "Lokal kafé",
    desc: "Søt, varm og innbydende. Meny, dagens kaker, åpningstider.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-rose-200",
    text: "text-stone-900",
  },
];

export default function ExamplesIndex() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <BreadcrumbSchema
        crumbs={[
          { name: "Iveo", url: "/" },
          { name: "Eksempler", url: "/eksempler" },
        ]}
      />
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-slate-600 hover:text-slate-900 text-sm mb-8 inline-block">← Tilbake til Iveo</Link>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          Fem eksempler.<br />Fem bransjer.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-14">
          Slik kan Iveo skreddersy nettsiden til akkurat din bedrift. Klikk på et eksempel for å
          se hele siden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((e) => (
            <Link
              key={e.slug}
              href={`/eksempler/${e.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`aspect-[4/3] ${e.bg} ${e.text} relative overflow-hidden`}>
                <img
                  src={e.img}
                  alt={e.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs uppercase tracking-widest opacity-80 mb-1">{e.industry}</p>
                  <h3 className="text-2xl font-bold">{e.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-600 leading-relaxed">{e.desc}</p>
                <p className="text-sm font-semibold text-slate-900 mt-3 group-hover:underline">Se nettsiden →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
