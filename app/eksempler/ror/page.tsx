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
      <div className="bg-red-600 text-white text-center py-2.5 text-sm font-semibold flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        Akutt rørleggervakt — døgnet rundt på <a href="tel:+4722334455" className="underline ml-1">22 33 44 55</a>
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
            <a href="tel:+4722334455" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              22 33 44 55
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-700/10 text-blue-700 rounded-full text-sm font-semibold mb-6">
<svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Lokal i Oslo siden 1998
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
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> Ring 22 33 44 55
              </a>
              <a href="#kontakt" className="px-7 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-bold text-lg hover:border-slate-900 transition-colors">
                Be om tilbud
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              {["Sertifisert mesterbrev", "Forsikret", "Fast pris før vi starter", "24/7 vakt"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{label}</span>
                </div>
              ))}
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
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />,
                title: "Akutt rørleggervakt",
                desc: "Vannlekkasje? Tette rør? Vi rykker ut innen 60 minutter, døgnet rundt — også i ferier.",
                price: "Fra 1 490,-",
                urgent: true,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11h14M5 11l-1 8a2 2 0 002 2h12a2 2 0 002-2l-1-8" />,
                title: "Bad og våtrom",
                desc: "Komplett badrenovering — membran, sluk, fliser, rør. Vi koordinerer alle håndverkerne.",
                price: "Tilbud",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "Service og vedlikehold",
                desc: "Årlig sjekk, kran-bytte, pakninger, vannlås. Forebygg lekkasje før den oppstår.",
                price: "Fra 990,-",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: "Tette avløp",
                desc: "Høytrykksspyling, kamerakontroll, rotfjerning fra avløpsrør og hovedledning.",
                price: "Fra 1 290,-",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: "Varmtvannsbereder",
                desc: "Reparasjon, bytting eller nyinstallasjon. Vi har OSO, Høiax og Atlantic på lager.",
                price: "Tilbud",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                title: "Nybygg og rehab",
                desc: "Rørstrekk, sentralvarme, vannledninger — fra arkitekttegning til ferdig nøkkel.",
                price: "Tilbud",
              },
            ].map((t) => (
              <div key={t.title} className={`group bg-slate-50 rounded-2xl p-7 border transition-all hover:bg-white hover:shadow-md ${t.urgent ? "border-red-200 hover:border-red-400" : "border-slate-100 hover:border-blue-300"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${t.urgent ? "bg-red-600 text-white" : "bg-blue-700 text-white"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{t.icon}</svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{t.desc}</p>
                <p className={`font-bold ${t.urgent ? "text-red-600" : "text-blue-700"}`}>{t.price}</p>
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
