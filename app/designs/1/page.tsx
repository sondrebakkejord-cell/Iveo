import { BackBar } from "../BackBar";

export default function Design1() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "'Georgia', 'Iowan Old Style', serif" }}>
      <BackBar n={1} name="Editorial" />

      <header className="border-b border-stone-300 px-8 py-5">
        <div className="max-w-4xl mx-auto flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl italic tracking-tight">iveo</h1>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mt-0.5">est. 2026 — norge</p>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:underline underline-offset-4">Hva vi gjør</a>
            <a href="#" className="hover:underline underline-offset-4">Hvem vi er</a>
            <a href="#" className="hover:underline underline-offset-4">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="px-8 py-20">
        <article className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-6">Utgave nr. 1 — Vår 2026</p>
          <h1 className="text-6xl md:text-8xl leading-[0.95] mb-10" style={{ letterSpacing: "-0.02em" }}>
            <em className="italic">Nettsider</em><br />
            for folk som<br />
            <em className="italic">leser</em> nøye.
          </h1>

          <div className="flex items-center gap-4 mb-12 text-sm text-stone-600">
            <span className="w-12 h-px bg-stone-400"></span>
            <span>Av Sondre Bakkejord & far</span>
          </div>

          <p className="text-2xl leading-relaxed mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>
            Et far-og-sønn-verksted i Norge som lager nettsider i samme håndverkstradisjon som de
            beste magasinene — gjennomtenkt, lesbar, varig.
          </p>

          <hr className="my-16 border-stone-300" />

          <div className="grid md:grid-cols-2 gap-12 text-base leading-relaxed">
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">Kapittel 1</h2>
              <h3 className="text-2xl mb-3">Nettsider og hosting</h3>
              <p className="text-stone-700">
                Skreddersydd, mobiloptimalisert og levert på en uke. Daglig backup, 99,9 % oppetid,
                SSL inkludert. Du ringer oss direkte når du trenger noe — vi har ingen
                kundetjeneste-meny i tre ledd.
              </p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-3">Kapittel 2</h2>
              <h3 className="text-2xl mb-3">AI-løsninger — snart</h3>
              <p className="text-stone-700">
                Vi arbeider med chatboter trent på din bedrift, AI-resepsjonister som tar telefoner
                hele døgnet, og automatisering av kunde-leads. Først ute hos våre faste kunder.
              </p>
            </div>
          </div>

          <hr className="my-16 border-stone-300" />

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500 mb-4">Ta kontakt</p>
            <p className="text-3xl mb-2">484 72 586</p>
            <p className="text-lg text-stone-700">sondrebakkejord@gmail.com</p>
            <a href="#" className="inline-block mt-8 px-8 py-3 border border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-colors uppercase tracking-widest text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
              Book et møte
            </a>
          </div>
        </article>
      </main>

      <footer className="border-t border-stone-300 px-8 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Iveo · Trykt i Norge
      </footer>
    </div>
  );
}
