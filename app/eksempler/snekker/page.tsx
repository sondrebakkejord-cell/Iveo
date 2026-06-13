import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../Breadcrumb";

export const metadata: Metadata = {
  title: "Bakkejord Snekker — Eksempel på snekker-nettside",
  description:
    "Slik kan en snekker-nettside se ut — med portefølje, materialer og prisindikator. Eksempel laget av Iveo.",
  keywords: ["nettside snekker", "snekker Norge", "mockup snekker", "lage nettside snekker"],
  alternates: { canonical: "https://iveo-nine.vercel.app/eksempler/snekker" },
  openGraph: { title: "Bakkejord Snekker — Eksempel | Iveo", description: "Eksempel på snekker-nettside bygget av Iveo.", url: "https://iveo-nine.vercel.app/eksempler/snekker", type: "website" },
};

export default function SnekkerSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <BreadcrumbSchema crumbs={[{ name: "Iveo", url: "/" }, { name: "Eksempler", url: "/eksempler" }, { name: "Snekker", url: "/eksempler/snekker" }]} />
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-amber-50">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Snekker</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold text-amber-900">Bakkejord</div>
            <div className="text-sm uppercase tracking-widest text-stone-500">Snekker</div>
          </div>
          <div className="hidden md:flex gap-7 text-sm font-medium">
            <a href="#tjenester" className="hover:text-amber-900">Tjenester</a>
            <a href="#prosjekter" className="hover:text-amber-900">Prosjekter</a>
            <a href="#tilbud" className="px-5 py-2.5 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-950 transition-colors">Be om tilbud</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[600px] flex items-end overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=2000&q=85"
          alt="Snekker som måler opp og jobber med massiv tre i Bakkejords verksted"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-16 text-amber-50">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-6">— Snekker siden 2003 —</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 0.95 }}>
            Tre, mål, hånd.<br />Bygget for å vare.
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Et snekkerverksted i Oslo som tar tiden det krever. Vi leverer kjøkken, bad, hytter, terrasser og innredning av kvalitet som holder seg i 50 år.
          </p>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-amber-950 text-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Hva vi bygger</h2>
          <p className="text-lg text-amber-100/70 mb-16 max-w-2xl">Vi tar oppdrag der vi kan stå inne for resultatet. Smått som stort.</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: "Kjøkken", desc: "Skreddersydde kjøkken i massiv eik, ask, valnøtt eller bjørk. Tegnet sammen med deg, bygget i vårt verksted i Maridalen.", time: "6–10 uker", material: "Massiv eik · Ask · Valnøtt" },
              { title: "Bad og våtrom", desc: "Komplette bad-renoveringer med faste samarbeidspartnere på rør og elektro. Vi tar koordineringen — du forholder deg til oss.", time: "3–6 uker", material: "Membranklassen og fliser etter ønske" },
              { title: "Terrasse og uteplass", desc: "Terrasser bygget i kjerneved av furu, lerk eller ipe. Vi monterer skjult, så ingen skruer titter opp.", time: "2–4 uker", material: "Kjerneved furu · Lerk · Ipe" },
              { title: "Innredning og møbler", desc: "Bokhyller, garderober, langbord, trapper. Vi tegner først, du godkjenner — så kappes treet.", time: "Varierer", material: "Massiv eller finert" },
              { title: "Hytter og tilbygg", desc: "Anneks, tilbygg, nybygg. Hele prosessen fra arkitekttegning til ferdig nøkkel.", time: "3–9 mnd", material: "Norsk tre, lokal entreprenør" },
              { title: "Restaurering", desc: "Gamle hus som trenger nytt liv. Vi respekterer det opprinnelige håndverket — moderniserer kun det som må.", time: "Varierer", material: "Originalmaterialer der mulig" },
            ].map((s) => (
              <div key={s.title} className="border-t border-amber-900/30 pt-6">
                <h3 className="text-3xl font-bold mb-3 text-amber-50" style={{ letterSpacing: "-0.015em" }}>{s.title}</h3>
                <p className="text-amber-100/80 mb-4 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <span className="text-amber-300/90"><span className="text-amber-200/50">Leveres på:</span> {s.time}</span>
                  <span className="text-amber-300/90"><span className="text-amber-200/50">Materialer:</span> {s.material}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosjekter */}
      <section id="prosjekter" className="py-24 px-6 bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Typiske prosjekter</h2>
          <p className="text-lg text-stone-300 mb-16 max-w-2xl">Eksempler på prosjekter vi tar — fra kjøkken og bad til anneks og restaurering.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80", label: "Kjøkken i hvit eik", place: "Bygdøy, 2025" },
              { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80", label: "Bad med integrert servant", place: "Frogner, 2025" },
              { img: "https://images.unsplash.com/photo-1572276965237-7c2517d35e22?auto=format&fit=crop&w=900&q=80", label: "Terrasse i kjerneved", place: "Nesodden, 2024" },
              { img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80", label: "Skreddersydd bokhylle", place: "Grünerløkka, 2024" },
              { img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80", label: "Anneks i Hvaler", place: "Hvaler, 2024" },
              { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80", label: "Restaurering av loftshus", place: "Holmenkollen, 2023" },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-bold text-lg">{p.label}</p>
                <p className="text-stone-400 text-sm">{p.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosess */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Slik jobber vi</h2>
          <p className="text-lg text-stone-700 mb-16 max-w-2xl">Fra første samtale til ferdig montert — du vet alltid hvor vi står.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { n: "01", title: "Befaring", desc: "Vi kommer hjem til deg, måler opp, hører ønsker. Gratis i Oslo." },
              { n: "02", title: "Tegning og tilbud", desc: "Skreddersydd skisse og skriftlig tilbud — vanligvis innen en uke." },
              { n: "03", title: "Produksjon", desc: "Vi bygger i vårt verksted. Du får billedoppdateringer underveis." },
              { n: "04", title: "Montering", desc: "Vi monterer, ferdigstiller, rydder. Du får 5 års garanti på alt arbeid." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-7 border border-amber-900/15">
                <p className="text-3xl font-bold text-amber-900/30 mb-3 font-mono">{s.n}</p>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-stone-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materialer */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Materialer vi jobber med</h2>
          <p className="text-lg text-stone-700 mb-16 max-w-2xl">Tre er ikke bare tre. Riktig valg holder i generasjoner.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Eik",
                latin: "Quercus robur",
                desc: "Hardt, lyst og elegant. Standardvalg for kjøkken og møbler som skal vare. Tåler fukt godt med riktig behandling.",
                use: "Kjøkken · Bord · Trapper",
                color: "from-amber-100 to-amber-50",
              },
              {
                name: "Valnøtt",
                latin: "Juglans regia",
                desc: "Mørkt, premium-uttrykk. Stabilt og lett å bearbeide. Praktisk talt unikt i nyanser — ingen to plater er like.",
                use: "Spesialmøbler · Bokhyller · Detaljer",
                color: "from-amber-900 to-amber-800",
              },
              {
                name: "Lerk",
                latin: "Larix decidua",
                desc: "Norsk klassiker for utearbeider. Naturlig motstandsdyktig mot råte og insekter — krever lite vedlikehold.",
                use: "Terrasser · Fasader · Hytter",
                color: "from-orange-200 to-amber-200",
              },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden border border-amber-900/15">
                <div className={`h-32 bg-gradient-to-br ${m.color}`} />
                <div className="p-7">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-2xl font-bold">{m.name}</h3>
                    <span className="text-sm italic text-stone-500">{m.latin}</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-4">{m.desc}</p>
                  <p className="text-sm text-amber-900 font-semibold">Brukes til: {m.use}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-amber-900 text-amber-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">FSC-sertifisert tre fra norske skoger</h3>
              <p className="text-stone-700">Vi henter materialene fra Mjøsen Skog og Skogeierforbundet — sporbar fra trestubben til ferdig produkt. Aldri tropisk hardtre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tilbud */}
      <section id="tilbud" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            Har du et prosjekt?
          </h2>
          <p className="text-xl text-stone-800 mb-10 leading-relaxed">
            Send oss en kort beskrivelse, gjerne med bilder. Vi tar gratis befaring i Oslo og
            omegn innen en uke.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:post@bakkejordsnekker.no" className="px-7 py-4 bg-amber-900 text-amber-50 rounded-lg font-bold text-lg hover:bg-amber-950 transition-colors">
              post@bakkejordsnekker.no
            </a>
            <a href="tel:+4722556677" className="px-7 py-4 border-2 border-stone-900 text-stone-900 rounded-lg font-bold text-lg hover:bg-stone-900 hover:text-stone-50 transition-colors">
              📞 22 55 66 77
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-8 px-6 text-center text-sm">
        © {new Date().getFullYear()} Bakkejord Snekker AS · Sertifisert mesterbrev · Oslo
      </footer>
    </div>
  );
}
