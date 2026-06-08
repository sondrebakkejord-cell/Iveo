import { BackBar } from "../BackBar";

export default function Design2() {
  return (
    <div className="min-h-screen bg-yellow-300 text-black" style={{ fontFamily: "'Courier New', monospace" }}>
      <BackBar n={2} name="Brutalist" />

      <header className="border-b-4 border-black px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-black uppercase">IVEO//NO</div>
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase">
            <a href="#" className="border-b-2 border-transparent hover:border-black">[Tjenester]</a>
            <a href="#" className="border-b-2 border-transparent hover:border-black">[Team]</a>
            <a href="#" className="border-b-2 border-transparent hover:border-black">[Kontakt]</a>
          </nav>
        </div>
      </header>

      <main className="px-6 py-12 max-w-6xl mx-auto">
        <div className="border-4 border-black bg-white p-8 md:p-12 mb-8" style={{ boxShadow: "12px 12px 0 0 #000" }}>
          <p className="text-sm font-bold uppercase mb-4">★ FILE_001 // HEADER.TXT</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-6">
            VI BYGGER<br />
            NETTSIDER.<br />
            <span className="bg-black text-yellow-300 px-2 inline-block">PUNKTUM.</span>
          </h1>
          <p className="text-xl font-bold uppercase max-w-2xl">
            Ingen byrå-prat. Ingen «strategisk synergi». Vi koder, vi hoster, vi tar telefonen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border-4 border-black bg-pink-300 p-8" style={{ boxShadow: "8px 8px 0 0 #000" }}>
            <p className="text-xs font-black uppercase mb-3">// SERVICE 01</p>
            <h2 className="text-3xl font-black uppercase mb-4">NETTSIDER + HOSTING</h2>
            <ul className="space-y-2 text-base font-bold uppercase">
              <li>▸ LEVERT PÅ EN UKE</li>
              <li>▸ 99,9% OPPETID</li>
              <li>▸ DAGLIG BACKUP</li>
              <li>▸ SUPPORT 24/7</li>
            </ul>
          </div>
          <div className="border-4 border-black bg-cyan-300 p-8" style={{ boxShadow: "8px 8px 0 0 #000" }}>
            <p className="text-xs font-black uppercase mb-3">// SERVICE 02 [SOON]</p>
            <h2 className="text-3xl font-black uppercase mb-4">AI-LØSNINGER</h2>
            <ul className="space-y-2 text-base font-bold uppercase">
              <li>▸ CHATBOTER</li>
              <li>▸ AI-RESEPSJONIST</li>
              <li>▸ AUTOMATISERING</li>
              <li>▸ KOMMER 2026</li>
            </ul>
          </div>
        </div>

        <div className="border-4 border-black bg-black text-yellow-300 p-8 md:p-12" style={{ boxShadow: "12px 12px 0 0 #000" }}>
          <p className="text-sm font-bold uppercase mb-4">★ FILE_002 // CONTACT.TXT</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase mb-1">TLF:</p>
              <p className="text-4xl font-black">484_72_586</p>
            </div>
            <div>
              <p className="text-xs uppercase mb-1">EMAIL:</p>
              <p className="text-2xl font-black break-all">sondrebakkejord@gmail.com</p>
            </div>
          </div>
          <a href="#" className="inline-block mt-8 bg-yellow-300 text-black border-4 border-yellow-300 px-8 py-4 text-xl font-black uppercase hover:bg-black hover:text-yellow-300 transition-colors">
            ►► BOOK ET MØTE
          </a>
        </div>
      </main>

      <footer className="border-t-4 border-black p-6 text-center text-sm font-bold uppercase">
        © 2026 IVEO//NO :: BUILT_IN_NORWAY
      </footer>
    </div>
  );
}
