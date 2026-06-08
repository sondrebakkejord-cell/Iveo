import { BackBar } from "../BackBar";

export default function Design5() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-950" style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}>
      <BackBar n={5} name="Premium" />

      <header className="px-8 py-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-amber-900 flex items-center justify-center">
              <span className="text-amber-900 font-bold text-lg">I</span>
            </div>
            <div>
              <div className="text-2xl font-medium tracking-wide">Iveo</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-amber-700">Atelier · Norge</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-amber-800">
            <a href="#" className="hover:text-amber-900">Tjenester</a>
            <a href="#" className="hover:text-amber-900">Filosofi</a>
            <a href="#" className="hover:text-amber-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="px-8 py-20 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-700 mb-12">— Et håndverk —</p>

        <h1 className="text-7xl md:text-9xl font-light mb-12" style={{ letterSpacing: "-0.01em", lineHeight: 0.95 }}>
          Nettsider, <em className="italic">utsøkt</em><br />komponert.
        </h1>

        <div className="w-24 h-px bg-amber-700 mx-auto mb-12"></div>

        <p className="text-2xl leading-relaxed max-w-2xl mx-auto text-amber-900 mb-16" style={{ fontFamily: "'Georgia', serif" }}>
          Vi tar oss tiden det krever. Et far-og-sønn-verksted som lager nettsider med samme
          presisjon som en god urmaker stiller en kaliber.
        </p>

        <a href="#" className="inline-block px-12 py-4 bg-amber-900 text-amber-50 hover:bg-amber-950 transition-colors uppercase tracking-[0.3em] text-sm">
          Forespør konsultasjon
        </a>
      </main>

      <section className="border-t border-amber-200 px-8 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4">I — Nettsider</p>
            <h2 className="text-4xl font-light mb-6">Nettsider & hosting</h2>
            <p className="text-lg leading-relaxed text-amber-900" style={{ fontFamily: "'Georgia', serif" }}>
              Skreddersydd design, kodet med presisjon, hostet av oss. Vi leverer ferdig
              komponert innen syv dager. Daglig backup. 99,9 % oppetid. Support når du trenger.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-4">II — AI</p>
            <h2 className="text-4xl font-light mb-6">Kunstig intelligens</h2>
            <p className="text-lg leading-relaxed text-amber-900" style={{ fontFamily: "'Georgia', serif" }}>
              Snart kommer skreddersydde AI-løsninger. Chatboter trent på din bedrift,
              AI-resepsjonister, automatisering. Først hos våre faste klienter.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-200 px-8 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-700 mb-6">Kontakt</p>
        <p className="text-3xl mb-2">484 72 586</p>
        <p className="text-lg text-amber-800 mb-10" style={{ fontFamily: "'Georgia', serif" }}>sondrebakkejord@gmail.com</p>
        <div className="w-12 h-px bg-amber-700 mx-auto"></div>
      </section>

      <footer className="px-8 py-8 text-center text-xs uppercase tracking-[0.3em] text-amber-700">
        © {new Date().getFullYear()} · Iveo Atelier · Etablert 2026
      </footer>
    </div>
  );
}
