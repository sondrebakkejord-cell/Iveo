import Link from "next/link";

export default function SnekkerSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
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
            <a href="#tilbud" className="px-5 py-2.5 bg-amber-900 text-stone-50 rounded-lg hover:bg-amber-950 transition-colors">Be om tilbud</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[600px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1572297870735-3a6816f6cef9?auto=format&fit=crop&w=2000&q=85"
          alt="Snekker som jobber med tre"
          className="absolute inset-0 w-full h-full object-cover"
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
      <section id="tjenester" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Hva vi bygger</h2>
          <p className="text-lg text-stone-600 mb-16 max-w-2xl">Fra små reparasjoner til komplette renoveringer. Vi tar oppdrag der vi kan stå inne for resultatet.</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: "01", title: "Kjøkken", desc: "Skreddersydde kjøkken i massiv eik, ask, valnøtt eller bjørk. Designet for ditt rom, bygget i vårt verksted.", time: "6–10 uker" },
              { num: "02", title: "Bad og våtrom", desc: "Komplette bad-renoveringer med våre samarbeidspartnere på rør og elektro. Vi koordinerer alt.", time: "3–6 uker" },
              { num: "03", title: "Terrasse og uteplass", desc: "Terrasser i kjerneved av furu, lerk eller ipe. Levebbeskyttet, vedlikeholdsfritt design.", time: "2–4 uker" },
              { num: "04", title: "Innredning og møbler", desc: "Bokhyller, garderober, bord, benker, trapper. Tegnet sammen med deg, bygget på mål.", time: "Varierer" },
              { num: "05", title: "Hytter og tilbygg", desc: "Nye hytter, anneks, tilbygg og restaurering. Hele prosessen fra tegning til ferdig.", time: "3–9 mnd" },
              { num: "06", title: "Restaurering", desc: "Gamle hus og hytter som trenger ny pust. Vi respekterer det opprinnelige håndverket.", time: "Varierer" },
            ].map((s) => (
              <div key={s.num} className="border-t border-stone-300 pt-6">
                <p className="text-sm font-mono text-amber-900 mb-3">{s.num}</p>
                <h3 className="text-3xl font-bold mb-3" style={{ letterSpacing: "-0.015em" }}>{s.title}</h3>
                <p className="text-stone-700 mb-4 leading-relaxed">{s.desc}</p>
                <p className="text-sm uppercase tracking-widest text-stone-500">Leveringstid: {s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosjekter */}
      <section id="prosjekter" className="py-24 px-6 bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Utvalgte prosjekter</h2>
          <p className="text-lg text-stone-300 mb-16 max-w-2xl">Nylige arbeider.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80", label: "Kjøkken i hvit eik", place: "Bygdøy, 2025" },
              { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", label: "Bad med integrert servant", place: "Frogner, 2025" },
              { img: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=900&q=80", label: "Terrasse i kjerneved", place: "Nesodden, 2024" },
              { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80", label: "Skreddersydd bokhylle", place: "Grünerløkka, 2024" },
              { img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80", label: "Anneks i Hvaler", place: "Hvaler, 2024" },
              { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", label: "Restaurering av loftshus", place: "Holmenkollen, 2023" },
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

      {/* Tilbud */}
      <section id="tilbud" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
            Har du et prosjekt?
          </h2>
          <p className="text-xl text-stone-700 mb-10 leading-relaxed">
            Send oss en kort beskrivelse, gjerne med bilder. Vi tar gratis befaring i Oslo og
            omegn innen en uke.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:post@bakkejordsnekker.no" className="px-7 py-4 bg-amber-900 text-stone-50 rounded-lg font-bold text-lg hover:bg-amber-950 transition-colors">
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
