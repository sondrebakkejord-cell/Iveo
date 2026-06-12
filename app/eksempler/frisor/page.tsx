import Link from "next/link";

export default function FrisorSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-stone-50">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Frisør</span>
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-2xl font-light tracking-[0.15em] text-stone-50 uppercase">Bakkejord</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone-300 -mt-0.5">Hair Studio</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm text-stone-50">
            <a href="#tjenester" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#team" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Team</a>
            <a href="#besok" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Besøk oss</a>
            <a href="#bestill" className="px-5 py-2.5 border border-stone-50 text-stone-50 hover:bg-stone-50 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs">
              Bestill time
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — full image with overlay */}
      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=2400&q=85"
          alt="Lyst og varmt frisørsalong-interiør hos Bakkejord Hair Studio"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/40" />
        <div className="relative max-w-7xl mx-auto px-6 pb-24 text-stone-50 w-full">
          <p className="text-xs uppercase tracking-[0.5em] text-stone-300 mb-8">— Et fristed siden 2018 —</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 max-w-4xl" style={{ letterSpacing: "-0.02em", lineHeight: 0.98 }}>
            Ditt fristed.<br />
            <em className="italic font-light">Vår lidenskap.</em>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
            En intim salong med plass til tid, ro og det gode håndverket. Vi tar oss av deg —
            ikke bare håret.
          </p>
          <a href="#bestill" className="inline-block px-10 py-4 bg-stone-50 text-stone-900 hover:bg-stone-200 transition-colors uppercase tracking-[0.3em] text-xs font-medium">
            Bestill time
          </a>
        </div>
      </section>

      {/* Velkomst */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-6">— Velkommen —</p>
          <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight" style={{ letterSpacing: "-0.015em" }}>
            En time hos oss er litt mer enn bare en klipp.
          </h2>
          <div className="space-y-5 text-lg text-stone-700 leading-relaxed">
            <p>
              Bakkejord er en liten salong i sentrum av Bodø, drevet av et lite team av
              dyktige frisører som tror på langsiktig håndverk fremfor rask gjennomstrømming.
            </p>
            <p>
              Vi tar oss tiden det krever — for klippet, for fargeprosessen, for samtalen. Hos
              oss er ingen kunde lik den forrige.
            </p>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">— Tjenester —</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ letterSpacing: "-0.015em" }}>
              Tjenester &amp; priser
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm">Klipp</h3>
              <div className="space-y-4">
                {[
                  ["Dameklipp", "890"],
                  ["Herreklipp", "590"],
                  ["Barneklipp (under 12)", "390"],
                  ["Trim", "490"],
                  ["Skjeggtrim", "350"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-300 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm">Farge</h3>
              <div className="space-y-4">
                {[
                  ["Fullfarge", "fra 1 590"],
                  ["Helstriper / Balayage", "fra 2 290"],
                  ["Lugger / Toning", "fra 990"],
                  ["Glanstoning", "490"],
                  ["Refresh", "fra 1 290"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-300 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm">Behandling</h3>
              <div className="space-y-4">
                {[
                  ["Olaplex-kur", "490"],
                  ["Hodebunnsmassasje (20 min)", "390"],
                  ["Dypbehandling", "590"],
                  ["Keratin-kur", "1 890"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-300 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm">Bryn &amp; vipper</h3>
              <div className="space-y-4">
                {[
                  ["Brynsforming", "350"],
                  ["Brynsfarging", "290"],
                  ["Vippefarging", "290"],
                  ["Brynspakke (form + farge)", "590"],
                  ["Vippeløft", "990"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-300 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center mt-16 text-sm text-stone-600 italic max-w-xl mx-auto">
            Prisene er veiledende — det endelige prises avhenger av hårlengde, fargemengde og
            tidsbruk. Vi gir deg alltid en konsultasjon før vi starter.
          </p>
        </div>
      </section>

      {/* Galleri */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
            ].map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src={img}
                  alt={`Salongdetalj ${i + 1} hos Bakkejord Hair Studio`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-4">— Vårt team —</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ letterSpacing: "-0.015em" }}>
              Stylistene
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sigrid",
                role: "Salongleder · Farge-spesialist",
                bio: "12 år bak stolen. Spesialitet: balayage og mykt overgangsfargearbeid.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
              },
              {
                name: "Marius",
                role: "Senior stylist",
                bio: "Spesialist på herreklipp og presisjon. Klassisk og moderne uttrykk.",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
              },
              {
                name: "Anna",
                role: "Stylist · Bryns- &amp; vippe­tekniker",
                bio: "Tar deg gjennom alt fra dameklipp til perfekte bryn og vippeløft.",
                img: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=700&q=80",
              },
            ].map((p) => (
              <div key={p.name}>
                <div className="aspect-[4/5] overflow-hidden mb-5 bg-stone-800">
                  <img
                    src={p.img}
                    alt={`Frisør ${p.name} hos Bakkejord Hair Studio`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-light mb-1">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-3" dangerouslySetInnerHTML={{ __html: p.role }} />
                <p className="text-sm text-stone-300 leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produkter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1000&q=85"
            alt="Premium hårpleieprodukter på utstilling"
            className="aspect-[4/5] object-cover bg-stone-200"
            loading="lazy"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">— Produkter —</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ letterSpacing: "-0.015em", lineHeight: 1.1 }}>
              Håndplukket for hjemmebruk.
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              Vi fører kun produkter vi selv bruker bak stolen. Vekten ligger på
              skandinaviske og europeiske merker som tar både hår og miljø på alvor.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Spør oss gjerne — vi anbefaler det som faktisk passer ditt hår, ikke det vi
              har på lager.
            </p>
          </div>
        </div>
      </section>

      {/* Besøk */}
      <section id="besok" className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">— Besøk oss —</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ letterSpacing: "-0.015em" }}>
              Vi sees i salongen.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Adresse</p>
              <p className="text-lg text-stone-900">Storgata 12</p>
              <p className="text-lg text-stone-900">8006 Bodø</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Åpningstider</p>
              <p className="text-sm text-stone-700 leading-relaxed">
                Man–tor 09–18<br />
                Fre 09–17<br />
                Lør 10–15
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Kontakt</p>
              <p className="text-lg text-stone-900">75 52 18 90</p>
              <p className="text-sm text-stone-700 mt-1">hei@bakkejordhair.no</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestill */}
      <section id="bestill" className="py-32 px-6 bg-stone-900 text-stone-50 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-6">— Bestill time —</p>
          <h2 className="text-4xl md:text-6xl font-light mb-8" style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Finn ditt fristed.
          </h2>
          <p className="text-lg text-stone-300 mb-12 leading-relaxed">
            Vi tilbyr enkel online-bestilling gjennom Timma. Velg tjeneste, stylist og tid —
            vi sender deg bekreftelse på SMS.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-block px-12 py-4 bg-stone-50 text-stone-900 hover:bg-stone-200 transition-colors uppercase tracking-[0.3em] text-xs font-medium"
            >
              Bestill online
            </a>
            <a
              href="tel:+4775521890"
              className="inline-block px-12 py-4 border border-stone-50/50 text-stone-50 hover:border-stone-50 hover:bg-stone-50/5 transition-colors uppercase tracking-[0.3em] text-xs font-medium"
            >
              Eller ring 75 52 18 90
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-10 px-6 text-center text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Bakkejord Hair Studio · Bodø
      </footer>
    </div>
  );
}
