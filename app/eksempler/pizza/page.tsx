import Link from "next/link";

export default function PizzaSite() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-950" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-amber-50">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Pizza</span>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold tracking-tight text-red-700">Bakkejord</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-stone-600 -mt-1">Pizzeria · 1995</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#meny" className="hover:text-red-700">Meny</a>
            <a href="#historie" className="hover:text-red-700">Vår historie</a>
            <a href="#besok" className="hover:text-red-700">Besøk oss</a>
            <a href="#bestill" className="px-4 py-2 bg-red-700 text-amber-50 rounded-full hover:bg-red-800 transition-colors">Bestill</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=2000&q=85"
          alt="Italiensk pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 text-amber-50">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-6">— Autentisk italiensk siden 1995 —</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ letterSpacing: "-0.02em", lineHeight: 0.95 }}>
            Steinovnsbakt.<br /><em className="italic font-normal">Hjemmelaget.</em>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-xl mb-8 leading-relaxed">
            En liten familiedrevet pizzeria med oppskrifter rett fra Napoli. Surdeig, hele 36 timers heving, ekte mozzarella di bufala.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#bestill" className="px-8 py-4 bg-red-700 text-white rounded-full font-semibold text-lg hover:bg-red-800 transition-colors">
              Bestill nå →
            </a>
            <a href="#meny" className="px-8 py-4 border-2 border-amber-100 text-amber-50 rounded-full font-semibold text-lg hover:bg-amber-50 hover:text-amber-950 transition-colors">
              Se menyen
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-amber-100">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" /></svg>
                ))}
              </div>
              <span className="font-semibold">4,8</span>
              <span className="text-amber-200">— 487 Google-anmeldelser</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-200">Vi leverer også via</span>
              <span className="bg-amber-50/10 border border-amber-50/20 px-3 py-1 rounded-full text-xs font-semibold">Foodora</span>
              <span className="bg-amber-50/10 border border-amber-50/20 px-3 py-1 rounded-full text-xs font-semibold">Wolt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meny */}
      <section id="meny" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-red-700 mb-4 text-center">Il Menu</p>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16" style={{ letterSpacing: "-0.025em" }}>Pizze classiche</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { name: "Margherita", desc: "San Marzano-tomat, mozzarella di bufala, fersk basilikum, ekstra virgin olje.", price: "189", tags: ["V"] },
              { name: "Diavola", desc: "Sterk salami, pikante chili, mozzarella, hvitløk.", price: "219", tags: [] },
              { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmesan, taleggio.", price: "229", tags: ["V"] },
              { name: "Prosciutto e Funghi", desc: "Prosciutto cotto, sjampinjong, mozzarella, oregano.", price: "229", tags: [] },
              { name: "Capricciosa", desc: "Prosciutto, artisjokk, sopp, oliven, mozzarella.", price: "239", tags: [] },
              { name: "Calabrese", desc: "Nduja, capocollo, mozzarella, kalabriske oliven.", price: "249", tags: [] },
            ].map((p) => (
              <div key={p.name} className="border-b border-amber-200 pb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    {p.tags.includes("V") && <span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded" title="Vegetarisk">V</span>}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-red-700">{p.price}</span>
                    <span className="text-sm text-amber-800/60">kr</span>
                  </div>
                </div>
                <p className="text-amber-900/70 italic">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-amber-900/70">
            <span className="flex items-center gap-1.5"><span className="text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded">V</span> Vegetarisk</span>
            <span>Glutenfri bunn +20 kr</span>
            <span>Laktosefri ost +15 kr</span>
          </div>

          <p className="text-center mt-8 text-amber-900/70 italic">
            Alle pizzaer bakes i steinovn ved 450°C i 90 sekunder.
          </p>

          {/* Pizza of the week */}
          <div className="mt-16 bg-red-700 text-amber-50 rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-2">— Ukens pizza —</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>Pera e Gorgonzola</h3>
              <p className="text-amber-100 leading-relaxed mb-4">
                Karamellisert pære, gorgonzola dolce, valnøtt, honning og fersk timian. Vår
                signaturpizza denne uken — kun 50 om dagen.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">249</span>
                <span className="text-amber-200">kr — bestill før den tar slutt</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-amber-50 text-red-700 rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest mb-1">Uke 23</p>
                <p className="text-5xl font-bold">28</p>
                <p className="text-sm">pizzaer igjen i dag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historie */}
      <section id="historie" className="py-20 px-6 bg-stone-900 text-amber-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=1000&q=80"
            alt="Pizzaiolo som lager pizza"
            className="rounded-2xl w-full h-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-4">— La nostra storia —</p>
            <h2 className="text-5xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Tre generasjoner.<br /><em className="italic font-normal">Én oppskrift.</em>
            </h2>
            <p className="text-lg text-amber-100/90 leading-relaxed mb-4">
              Nonno Giuseppe åpnet pizzeriet i 1995 etter å ha tatt med seg oppskriftene fra
              Napoli til Norge. I dag drives stedet av sønnesønnen Marco — men ovnen, deigen
              og hjertet er det samme.
            </p>
            <p className="text-lg text-amber-100/90 leading-relaxed italic">
              "Ekte pizza er ikke komplisert. Den krever bare tid, ekte råvarer og kjærlighet."
            </p>
          </div>
        </div>
      </section>

      {/* Besøk */}
      <section id="besok" className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-red-700 mb-4">— Besøk oss —</p>
            <h2 className="text-5xl font-bold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>Velkommen<br />til bordet.</h2>
            <dl className="space-y-4 text-lg">
              <div>
                <dt className="text-amber-800/60 text-sm uppercase tracking-widest mb-1">Adresse</dt>
                <dd>Storgata 14, 0182 Oslo</dd>
              </div>
              <div>
                <dt className="text-amber-800/60 text-sm uppercase tracking-widest mb-1">Åpningstider</dt>
                <dd>Man–tor 15–22<br />Fre–lør 14–23<br />Søn 14–21</dd>
              </div>
              <div>
                <dt className="text-amber-800/60 text-sm uppercase tracking-widest mb-1">Telefon</dt>
                <dd className="text-3xl font-bold text-red-700">22 12 34 56</dd>
              </div>
            </dl>
          </div>
          <div id="bestill" className="bg-red-700 text-amber-50 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-4">Bestill take-away</h3>
            <p className="mb-6 text-amber-100">Klar til avhenting på 20 minutter.</p>
            <a href="tel:+4722123456" className="block w-full bg-amber-50 text-red-700 text-center py-4 rounded-full font-bold text-xl hover:bg-amber-100 transition-colors mb-3">
              Ring 22 12 34 56
            </a>
            <a href="#" className="block w-full border-2 border-amber-50 text-amber-50 text-center py-4 rounded-full font-bold text-lg hover:bg-amber-50/10 transition-colors">
              Bestill online
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-amber-100/70 py-8 px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Bakkejord Pizzeria · Storgata 14, Oslo</p>
        <p className="text-xs mt-1 italic">Buon appetito</p>
      </footer>
    </div>
  );
}
