import Link from "next/link";

export default function TannlegeSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-white">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Tannlege Bakkejord</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">TB</div>
            <div>
              <div className="font-bold text-lg leading-tight">Tannlege Bakkejord</div>
              <div className="text-xs text-slate-500">Privat tannklinikk · Oslo</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#tjenester" className="hover:text-teal-700">Tjenester</a>
            <a href="#team" className="hover:text-teal-700">Vårt team</a>
            <a href="#priser" className="hover:text-teal-700">Priser</a>
            <a href="#bestill" className="px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">Bestill time →</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              ⭐ 4,9 av 5 — 312 anmeldelser
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900" style={{ letterSpacing: "-0.025em", lineHeight: 1 }}>
              Tannhelse,<br />uten frykt.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              En liten privatklinikk på Frogner som tar tiden det krever. Vi forklarer alt,
              jobber forsiktig og setter aldri inn noe vi ikke ville hatt selv.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#bestill" className="px-7 py-4 bg-teal-600 text-white rounded-full font-bold text-lg hover:bg-teal-700 transition-colors">
                Bestill time online
              </a>
              <a href="tel:+4722448811" className="px-7 py-4 bg-white border-2 border-teal-600 text-teal-700 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors">
                📞 22 44 88 11
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-600">
              <div>✓ Ingen ventetid &gt; 5 min</div>
              <div>✓ Akutt-time samme dag</div>
              <div>✓ Avtaler med HELFO</div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
              alt="Tannlegekontor"
              className="rounded-3xl shadow-2xl shadow-teal-900/10"
            />
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900" style={{ letterSpacing: "-0.025em" }}>Tjenester</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">Full tannhelse for hele familien — barn, voksne og eldre.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🦷", title: "Undersøkelse og rens", desc: "Årlig sjekk med moderne røntgen og profesjonell tannrens." },
              { icon: "✨", title: "Tannbleking", desc: "Trygg, klinisk bleking — synlig resultat etter første time." },
              { icon: "🔧", title: "Fyllinger og kroner", desc: "Estetiske kompositt-fyllinger, porselenskroner og innlegg." },
              { icon: "🪥", title: "Implantater", desc: "Erstatning av tapte tenner med titan-implantater og kroner." },
              { icon: "👶", title: "Barnetannlege", desc: "Skånsom behandling tilpasset barn. Gratis under 18 år." },
              { icon: "🚨", title: "Akutt-tannlege", desc: "Tannverk? Vi tar deg inn samme dag — også på lørdager." },
            ].map((t) => (
              <div key={t.title} className="p-7 rounded-2xl bg-teal-50/50 border border-teal-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{t.title}</h3>
                <p className="text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900" style={{ letterSpacing: "-0.025em" }}>Møt teamet</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">Tre tannleger med over 40 års samlet erfaring.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Anne Bakkejord", role: "Tannlege, spesialist endodonti", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80", since: "Klinikk-eier siden 2008" },
              { name: "Lars Eriksen", role: "Tannlege", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80", since: "Hos oss siden 2015" },
              { name: "Maria Nygård", role: "Tannpleier", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80", since: "Hos oss siden 2019" },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-teal-700 font-medium">{p.role}</p>
                  <p className="text-xs text-slate-500 mt-1">{p.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900" style={{ letterSpacing: "-0.025em" }}>Åpne priser</h2>
          <p className="text-lg text-slate-600 mb-12">Ingen overraskelser. Du får alltid pris før vi starter.</p>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {[
              { item: "Undersøkelse + røntgen", price: "850,-" },
              { item: "Tannrens (30 min)", price: "990,-" },
              { item: "Komposittfylling", price: "fra 1 290,-" },
              { item: "Porselenskrone", price: "fra 8 500,-" },
              { item: "Hjemme-bleking (sett)", price: "3 990,-" },
              { item: "Klinisk bleking", price: "5 990,-" },
              { item: "Implantat (inkl. krone)", price: "fra 24 900,-" },
              { item: "Akutt-time", price: "1 290,-" },
            ].map((p) => (
              <div key={p.item} className="flex justify-between items-center px-6 py-4 border-b border-slate-100 last:border-b-0 hover:bg-teal-50/40">
                <span className="text-slate-900">{p.item}</span>
                <span className="font-semibold text-slate-900">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-4">Vi har avtale med HELFO. Barn under 18 år gratis.</p>
        </div>
      </section>

      {/* Book */}
      <section id="bestill" className="py-20 px-6 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.025em" }}>Bestill time</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-xl mx-auto">Online eller på telefon — du får bekreftelse på SMS innen 10 minutter.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-white text-teal-700 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors">
              Bestill online
            </a>
            <a href="tel:+4722448811" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              📞 22 44 88 11
            </a>
          </div>
          <div className="mt-12 text-teal-100">
            <p className="font-semibold mb-1">Adresse</p>
            <p>Bygdøy Allé 22, 0265 Oslo</p>
            <p className="text-sm mt-2 text-teal-200">Man–fre 08–18 · Lør 09–14</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-sm">
        © {new Date().getFullYear()} Tannlege Bakkejord AS · Org.nr 999 111 222
      </footer>
    </div>
  );
}
