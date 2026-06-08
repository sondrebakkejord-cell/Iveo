import { BackBar } from "../BackBar";

export default function Design6() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <BackBar n={6} name="Swiss" />

      <header className="border-b border-black px-8 py-5">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3">
            <div className="text-2xl font-bold tracking-tight">iveo</div>
          </div>
          <div className="col-span-6 text-xs uppercase tracking-widest">001 — Norge — Anno 2026</div>
          <div className="col-span-3 text-right">
            <nav className="flex gap-6 justify-end text-xs uppercase">
              <a href="#">Index</a>
              <a href="#">Info</a>
              <a href="#">Tlf</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-20">
            <h1 className="text-[10vw] font-bold leading-none tracking-tighter">
              Nettsider.<br />Ingenting mer.
            </h1>
          </div>

          <div className="col-span-12 md:col-span-3 border-t-2 border-black pt-4 mb-12">
            <p className="text-xs uppercase tracking-wider mb-2">01 / Index</p>
            <p className="text-sm leading-relaxed">
              Et far-og-sønn-team. Et tilbud: nettside, ferdig, hostet. Innen en uke.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-5 border-t-2 border-black pt-4 mb-12">
            <p className="text-xs uppercase tracking-wider mb-2">02 / Stack</p>
            <p className="text-sm leading-relaxed">
              Next.js. React. Tailwind. Vercel. Verktøyene Netflix bruker, brukt skikkelig.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-9 border-t-2 border-black pt-4 mb-12">
            <p className="text-xs uppercase tracking-wider mb-2">03 / Pris</p>
            <p className="text-sm leading-relaxed">
              Vurderes per prosjekt. Ring oss, så finner vi ut av det sammen. Ingen byrå-pakker.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-4 border-t-2 border-black pt-12 mb-12">
            <div className="col-span-12 md:col-span-6">
              <p className="text-xs uppercase tracking-wider mb-3">A / Nettsider og hosting</p>
              <h2 className="text-5xl font-bold mb-4 tracking-tight">Nettsider, hosting.</h2>
              <p className="text-base leading-relaxed max-w-md">
                Skreddersydd design. Mobilvennlig. SEO. SSL. Daglig backup. 99,9 % oppetid.
                Vi tar telefonen direkte.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-xs uppercase tracking-wider mb-3">B / AI — kommer</p>
              <h2 className="text-5xl font-bold mb-4 tracking-tight">AI-løsninger.</h2>
              <p className="text-base leading-relaxed max-w-md">
                Chatboter. AI-resepsjonist. Automatisering. Først hos faste kunder, deretter
                bredt. Q2 2026.
              </p>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-4 border-t-2 border-black pt-12">
            <div className="col-span-12 md:col-span-6">
              <p className="text-xs uppercase tracking-wider mb-3">Kontakt</p>
              <p className="text-5xl font-bold tracking-tight mb-2">484 72 586</p>
              <p className="text-base">sondrebakkejord@gmail.com</p>
            </div>
            <div className="col-span-12 md:col-span-6 flex md:justify-end items-end">
              <a href="#" className="inline-block bg-black text-white px-12 py-5 text-lg font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
                Book →
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-black px-8 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 text-xs uppercase tracking-widest">
          <div className="col-span-6">© {new Date().getFullYear()} Iveo</div>
          <div className="col-span-6 text-right">Norge — 65°N 12°Ø</div>
        </div>
      </footer>
    </div>
  );
}
