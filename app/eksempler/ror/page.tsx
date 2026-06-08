import Link from "next/link";

export default function RorSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-white">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Rør</span>
      </div>

      {/* Emergency bar */}
      <div className="bg-red-600 text-white text-center py-2.5 text-sm font-semibold">
        🚨 Akutt rørleggervakt 24/7 — Ring <a href="tel:+4722334455" className="underline">22 33 44 55</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-blue-700 text-white flex items-center justify-center font-black text-xl">B</div>
            <div>
              <div className="text-xl font-bold">Bakkejord Rør AS</div>
              <div className="text-xs text-slate-500">Sertifisert mesterbedrift</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#tjenester" className="hover:text-blue-700">Tjenester</a>
            <a href="#omoss" className="hover:text-blue-700">Om oss</a>
            <a href="#kontakt" className="hover:text-blue-700">Kontakt</a>
            <a href="tel:+4722334455" className="px-5 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              📞 22 33 44 55
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700/10 text-blue-700 rounded-full text-sm font-semibold mb-6">
              ✓ Lokal i Oslo siden 1998
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1 }}>
              Rørlegger som<br />kommer når<br />du trenger oss.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Akutt eller planlagt — du får alltid en sertifisert rørlegger fra Bakkejord Rør.
              Fast pris før vi starter, ingen overraskelser etterpå.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+4722334455" className="inline-flex items-center gap-2 px-7 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors">
                📞 Ring 22 33 44 55
              </a>
              <a href="#kontakt" className="px-7 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-bold text-lg hover:border-slate-900 transition-colors">
                Be om tilbud
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2"><span className="text-green-600 text-xl">✓</span> Sertifisert</div>
              <div className="flex items-center gap-2"><span className="text-green-600 text-xl">✓</span> Forsikret</div>
              <div className="flex items-center gap-2"><span className="text-green-600 text-xl">✓</span> Fast pris</div>
              <div className="flex items-center gap-2"><span className="text-green-600 text-xl">✓</span> 24/7 vakt</div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85"
              alt="Rørlegger på jobb"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ letterSpacing: "-0.025em" }}>Hva vi gjør</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">Alt en privatperson eller bedrift trenger av rørleggertjenester.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🚨", title: "Akutt rørleggervakt", desc: "Vannlekkasje? Tette rør? Vi rykker ut innen 60 min, hele døgnet.", price: "Fra 1 490,-" },
              { icon: "🛁", title: "Bad og våtrom", desc: "Komplette badrenoveringer fra A til Å. Membran, sluk, fliser, rør.", price: "Tilbud" },
              { icon: "🚿", title: "Service og vedlikehold", desc: "Årlig sjekk av sanitæranlegg, kran-bytte, dusj-reparasjon.", price: "Fra 990,-" },
              { icon: "🔧", title: "Tette avløp og rør", desc: "Spyling med høytrykksrenser, kamerasjekk, rotfjerning.", price: "Fra 1 290,-" },
              { icon: "💧", title: "Varmtvannsbereder", desc: "Reparasjon, bytting eller nyinstallasjon. Vi har alle merker på lager.", price: "Tilbud" },
              { icon: "🏠", title: "Nybygg og rehab", desc: "Rør i hus, rørstrekk, sentralvarme, vannledninger.", price: "Tilbud" },
            ].map((t) => (
              <div key={t.title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{t.desc}</p>
                <p className="text-blue-700 font-bold">{t.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm text-slate-300">år i bransjen</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">8 000+</div>
              <div className="text-sm text-slate-300">fornøyde kunder</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">60 min</div>
              <div className="text-sm text-slate-300">akutt utrykning</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">4,9 / 5</div>
              <div className="text-sm text-slate-300">på Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section id="omoss" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: "-0.025em" }}>Lokale rørleggere, ekte hender.</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Bakkejord Rør AS ble startet i 1998 av Knut Bakkejord. I dag er vi seks rørleggere
            i Oslo og omegn — alle med fagbrev og lang erfaring.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Vi har én regel: du skal aldri lure på hva noe koster før vi starter. Du får
            alltid skriftlig tilbud — eller fast pris over telefonen før vi rykker ut.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.025em" }}>Trenger du oss nå?</h2>
          <p className="text-xl text-blue-100 mb-10">Vi tar telefonen — også på kvelder og helger.</p>
          <a href="tel:+4722334455" className="inline-block text-6xl md:text-7xl font-black mb-8 hover:text-blue-200 transition-colors">
            22 33 44 55
          </a>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:post@bakkejordror.no" className="px-7 py-3.5 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              post@bakkejordror.no
            </a>
            <a href="#" className="px-7 py-3.5 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Send befaringsforespørsel
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-sm">
        © {new Date().getFullYear()} Bakkejord Rør AS · Org.nr 999 888 777 · Storgata 22, Oslo
      </footer>
    </div>
  );
}
