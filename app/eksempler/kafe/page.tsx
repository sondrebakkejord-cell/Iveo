import Link from "next/link";

export default function KafeSite() {
  return (
    <div className="min-h-screen bg-rose-50 text-rose-950" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-rose-50" style={{ fontFamily: "system-ui, sans-serif" }}>
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Kafé</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-rose-50/95 backdrop-blur-sm border-b border-rose-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-3xl italic font-medium text-rose-900">Bakkejord</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-rose-900/65 -mt-1" style={{ fontFamily: "system-ui, sans-serif" }}>kafé · siden 2018</div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-rose-900/75" style={{ fontFamily: "system-ui, sans-serif" }}>
            <a href="#meny" className="hover:text-rose-900">Meny</a>
            <a href="#dagens" className="hover:text-rose-900">Dagens</a>
            <a href="#besok" className="hover:text-rose-900">Besøk oss</a>
            <a href="#besok" className="px-5 py-2 bg-rose-900 text-rose-50 rounded-full hover:bg-rose-950 transition-colors">Reservér bord</a>
          </div>
        </div>
      </nav>

      {/* Open status bar */}
      <div className="bg-rose-200/60 border-b border-rose-200 px-6 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
          </span>
          <span className="font-semibold text-rose-900">Åpent nå</span>
          <span className="text-rose-900/60">— stenger 18:00</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rose-700 mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>— En liten kafé på hjørnet —</p>
            <h1 className="text-7xl md:text-9xl font-medium mb-6" style={{ letterSpacing: "-0.02em", lineHeight: 0.95 }}>
              Latte,<br /><em className="italic">kanelbolle</em>,<br />god prat.
            </h1>
            <p className="text-xl md:text-2xl text-rose-900/75 leading-relaxed max-w-md">
              Et lite, varmt sted i Grünerløkka. Hjemmebakt hver morgen, kaffe brent av små
              norske brennerier, og bord du gjerne sitter ved en hel ettermiddag.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Latte med hjerte"
              className="rounded-3xl shadow-xl"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="absolute -bottom-6 -left-6 bg-rose-200 px-6 py-4 rounded-2xl shadow-lg" style={{ transform: "rotate(-3deg)", fontFamily: "system-ui, sans-serif" }}>
              <p className="text-xs uppercase tracking-widest text-rose-900">Åpent nå</p>
              <p className="text-2xl font-bold text-rose-900">08–18</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meny */}
      <section id="meny" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-700 mb-4 text-center" style={{ fontFamily: "system-ui, sans-serif" }}>— Liten meny, gjort bra —</p>
          <h2 className="text-5xl md:text-7xl font-medium text-center mb-16" style={{ letterSpacing: "-0.02em" }}>Hva vi byr på</h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-3xl font-medium mb-6 text-rose-900 italic">Til koppen</h3>
              <ul className="space-y-4">
                {[
                  ["Filterkaffe", "39"],
                  ["Espresso", "39"],
                  ["Cortado", "49"],
                  ["Cappuccino", "55"],
                  ["Latte", "59"],
                  ["Chai latte", "65"],
                  ["Sjokolade m/krem", "65"],
                ].map(([item, p]) => (
                  <li key={item} className="flex justify-between border-b border-rose-200 pb-2 text-lg">
                    <span>{item}</span>
                    <span className="text-rose-900 font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-6 text-rose-900 italic">Bakerens beste</h3>
              <ul className="space-y-4">
                {[
                  ["Kanelbolle (dagens)", "45"],
                  ["Skolebrød", "39"],
                  ["Sjokoladekake", "55"],
                  ["Gulrotkake m/frosting", "65"],
                  ["Sitronterte", "59"],
                  ["Brownie", "49"],
                  ["Croissant", "45"],
                ].map(([item, p]) => (
                  <li key={item} className="flex justify-between border-b border-rose-200 pb-2 text-lg">
                    <span>{item}</span>
                    <span className="text-rose-900 font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 pt-8">
              <h3 className="text-3xl font-medium mb-6 text-rose-900 italic text-center">Lunsj — 11 til 15</h3>
              <ul className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                {[
                  ["Avocado toast m/posjert egg", "139"],
                  ["Open sandwich m/laks", "149"],
                  ["Tomatsuppe m/grillet ost", "129"],
                  ["Mormors vafler m/syltetøy", "89"],
                  ["Grønn salat m/feta", "129"],
                  ["Bagel m/kremost og laks", "139"],
                ].map(([item, p]) => (
                  <li key={item} className="flex justify-between border-b border-rose-200 pb-2 text-lg">
                    <span>{item}</span>
                    <span className="text-rose-900 font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dagens */}
      <section id="dagens" className="py-20 px-6 bg-rose-200/60">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-700 mb-4" style={{ fontFamily: "system-ui, sans-serif" }}>— I dag, fra ovnen —</p>
          <h2 className="text-5xl md:text-7xl font-medium mb-12" style={{ letterSpacing: "-0.02em" }}>Dagens bakst</h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", title: "Kardemommeboller", desc: "Med ekte kardemomme, fersk gjær og smør fra Røros." },
              { img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80", title: "Bringebærsnitter", desc: "Sprøtt mørdeig-bunn, hjemmelaget bringebærsyltetøy, glaze." },
              { img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80", title: "Sitronkake", desc: "Saftig, syrlig, med drysset av flormelis." },
            ].map((d) => (
              <div key={d.title} className="bg-rose-50 rounded-3xl overflow-hidden">
                <div className="aspect-square">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium mb-2 italic">{d.title}</h3>
                  <p className="text-rose-900/75">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokale leverandører */}
      <section className="py-20 px-6 bg-rose-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-700 mb-4" style={{ fontFamily: "system-ui, sans-serif" }}>— Hvor det kommer fra —</p>
          <h2 className="text-5xl md:text-6xl font-medium mb-12" style={{ letterSpacing: "-0.02em" }}>Lokale leverandører</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Melken",
                supplier: "Eli og Tor på Hadeland",
                desc: "Fra Tunet Gård, 40 minutter unna. 18 kuer, ekte gress.",
              },
              {
                title: "Kaffebønnene",
                supplier: "Talor & Jørgen Coffee",
                desc: "Brent i Pilestredet hver onsdag morgen. Direkte-handel med små farmer i Etiopia og Colombia.",
              },
              {
                title: "Smøret",
                supplier: "Rørosmeieriet",
                desc: "Tradisjonelt kjernet. Vi bruker det i alt — kanelbollene merker du forskjellen på.",
              },
            ].map((l) => (
              <div key={l.title} className="bg-white rounded-3xl p-7 border border-rose-200">
                <p className="text-xs uppercase tracking-widest text-rose-700 font-semibold mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>{l.title}</p>
                <h3 className="text-2xl font-medium mb-3 italic">{l.supplier}</h3>
                <p className="text-rose-900/75 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-rose-900/65 italic max-w-2xl mx-auto">
            Vi tror på å vite hvor maten kommer fra. Spør oss gjerne — vi forteller gjerne mer.
          </p>
        </div>
      </section>

      {/* Besøk */}
      <section id="besok" className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-rose-700 mb-4" style={{ fontFamily: "system-ui, sans-serif" }}>— Stikk innom —</p>
            <h2 className="text-5xl md:text-6xl font-medium mb-6" style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>Vi ser deg snart.</h2>

            <dl className="space-y-5 text-lg">
              <div>
                <dt className="text-xs uppercase tracking-widest text-rose-700 mb-1" style={{ fontFamily: "system-ui, sans-serif" }}>Adresse</dt>
                <dd>Markveien 39, 0554 Oslo</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-rose-700 mb-1" style={{ fontFamily: "system-ui, sans-serif" }}>Åpningstider</dt>
                <dd>Man–fre 08–18<br />Lør–søn 09–17</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-rose-700 mb-1" style={{ fontFamily: "system-ui, sans-serif" }}>Telefon</dt>
                <dd className="text-3xl text-rose-900">23 24 25 26</dd>
              </div>
            </dl>
          </div>
          <div className="bg-rose-900 text-rose-50 p-10 rounded-3xl">
            <h3 className="text-3xl font-medium mb-4 italic">Reservér bord</h3>
            <p className="mb-8 text-rose-100" style={{ fontFamily: "system-ui, sans-serif" }}>For grupper på 6+ anbefaler vi å reservere.</p>
            <a href="tel:+4723242526" className="block w-full bg-rose-50 text-rose-900 text-center py-4 rounded-full font-bold text-xl hover:bg-rose-100 transition-colors mb-3" style={{ fontFamily: "system-ui, sans-serif" }}>
              Ring 23 24 25 26
            </a>
            <a href="mailto:hei@bakkejordkafe.no" className="block w-full border-2 border-rose-50 text-rose-50 text-center py-4 rounded-full font-bold text-lg hover:bg-rose-50/10 transition-colors" style={{ fontFamily: "system-ui, sans-serif" }}>
              hei@bakkejordkafe.no
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-rose-100 text-rose-900/70 py-8 px-6 text-center text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
        <p>© {new Date().getFullYear()} Bakkejord Kafé · Markveien 39, Oslo</p>
        <p className="text-xs mt-1 italic" style={{ fontFamily: "Georgia, serif" }}>vi ses i morgen</p>
      </footer>
    </div>
  );
}
