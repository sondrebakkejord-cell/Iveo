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
            <a href="#bestill" className="px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">Bestill time</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" /></svg>
              4,9 av 5 — 312 Google-anmeldelser
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
              <a href="tel:+4722448811" className="inline-flex items-center gap-2 px-7 py-4 bg-white border-2 border-teal-600 text-teal-700 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                22 44 88 11
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-600">
              {["Ingen ventetid over 5 min", "Akutt-time samme dag", "Avtale med HELFO"].map((label) => (
                <div key={label} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{label}</span>
                </div>
              ))}
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
              {
                title: "Undersøkelse og rens",
                desc: "Årlig sjekk med digital røntgen og skånsom tannrens med ultralyd. Tar 30 minutter.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "Tannbleking",
                desc: "Klinisk bleking med ZOOM!-teknologi. Synlig hvitere tenner etter én time.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
              },
              {
                title: "Fyllinger og kroner",
                desc: "Estetiske kompositt-fyllinger i ekte tannfarge, porselenskroner og innlegg.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m4 0h-.01M12 14h.01" />,
              },
              {
                title: "Implantater",
                desc: "Erstatning av tapte tenner med titanimplantater og porselenskroner. Holdbarhet 25+ år.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
              },
              {
                title: "Barnetannlege",
                desc: "Egen rolig behandlingsstol for barn. Skånsom og pedagogisk tilnærming — også for de minste.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
              },
              {
                title: "Akutt-time",
                desc: "Tannverk eller skade? Ring før kl. 14 — så får du tid samme dag. Også på lørdager.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                urgent: true,
              },
            ].map((t) => (
              <div key={t.title} className={`p-7 rounded-2xl border transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1 ${t.urgent ? "bg-orange-50 border-orange-200" : "bg-teal-50/50 border-teal-100"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${t.urgent ? "bg-orange-500 text-white" : "bg-teal-600 text-white"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{t.icon}</svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{t.title}</h3>
                <p className="text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptom-finner */}
      <section className="py-20 px-6 bg-teal-50/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900" style={{ letterSpacing: "-0.025em" }}>Hva trenger du hjelp med?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl">Velg det som passer, så bestiller vi riktig type time for deg.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: "Tannverk", time: "I dag", urgent: true },
              { label: "Sjekk og rens", time: "Innen 2 uker" },
              { label: "Synlig hull", time: "Innen uka" },
              { label: "Mistet fylling", time: "Innen 3 dager" },
              { label: "Sensitive tenner", time: "Innen 2 uker" },
              { label: "Hvitere tenner", time: "Når du vil" },
              { label: "Skadet tann", time: "I dag", urgent: true },
              { label: "Tannkjøtt blør", time: "Innen uka" },
              { label: "Vurderer implantat", time: "Konsultasjon" },
              { label: "Bare en sjekk", time: "Innen 2 uker" },
            ].map((s) => (
              <button
                key={s.label}
                className={`text-left p-4 rounded-xl border transition-all hover:-translate-y-0.5 ${
                  s.urgent
                    ? "bg-orange-50 border-orange-200 hover:border-orange-400 hover:shadow-md"
                    : "bg-white border-slate-200 hover:border-teal-400 hover:shadow-md"
                }`}
              >
                <p className={`font-bold text-sm mb-1 ${s.urgent ? "text-orange-700" : "text-slate-900"}`}>{s.label}</p>
                <p className={`text-xs ${s.urgent ? "text-orange-600" : "text-slate-500"}`}>{s.time}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tannlegeskrekk */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-widest text-teal-700 font-semibold mb-3">For deg som gruer deg</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Du er ikke alene.<br />
              Vi tar oss tid.
            </h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Tannlegeskrekk rammer 1 av 4 voksne nordmenn. Vi behandler det ikke som en svakhet —
              vi tilpasser oss.
            </p>
            <ul className="space-y-3 text-slate-700">
              {[
                "Du kan be om å se utstyret før vi starter",
                "Vi tar pauser når du trenger dem — alltid",
                "Sedasjon med lystgass tilgjengelig",
                "Du har et &quot;stopp-tegn&quot; vi alltid respekterer",
                "Første konsultasjon er kun samtale, ingen behandling",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 bg-teal-50 rounded-2xl p-7 border border-teal-100">
            <p className="text-5xl font-bold text-teal-700 mb-2">1 av 4</p>
            <p className="text-sm text-slate-600 mb-6">norske voksne har tannlegeskrekk i en eller annen form*</p>
            <p className="text-sm text-slate-700 italic leading-relaxed">
              &ldquo;Jeg hadde ikke vært hos tannlege på 8 år. Anne tok seg tid, forklarte alt før hun
              gjorde noe. Nå går jeg jevnlig.&rdquo;
            </p>
            <p className="text-xs text-slate-500 mt-3">— Marianne, 42</p>
            <p className="text-xs text-slate-400 mt-6">*Folkehelseinstituttet 2023</p>
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
              { name: "Anne Bakkejord", role: "Tannlege, spesialist endodonti", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80", since: "Klinikk-eier siden 2008" },
              { name: "Lars Eriksen", role: "Tannlege", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80", since: "Hos oss siden 2015" },
              { name: "Maria Nygård", role: "Tannpleier", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80", since: "Hos oss siden 2019" },
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
          <p className="text-sm text-slate-500 mt-4">Vi har refusjonsavtale med HELFO på utvalgte behandlinger. Barn 0–18 år dekkes av Den offentlige tannhelsetjenesten (DOT).</p>
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
            <a href="tel:+4722448811" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              22 44 88 11
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
