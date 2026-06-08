import { BackBar } from "../BackBar";

export default function Design8() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <BackBar n={8} name="Futurisme" dark />

      {/* Grid background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/15 rounded-full blur-[150px]"></div>
      </div>

      <header className="px-6 py-5 border-b border-cyan-500/20 backdrop-blur-md bg-slate-950/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-cyan-400 flex items-center justify-center" style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}>
              <span className="text-cyan-400 font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold tracking-widest text-cyan-100">IVEO</span>
          </div>
          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-cyan-200">
            <a href="#" className="hover:text-cyan-400">▸ Tjenester</a>
            <a href="#" className="hover:text-cyan-400">▸ Team</a>
            <a href="#" className="hover:text-cyan-400">▸ Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="px-6 py-20 max-w-5xl mx-auto relative">
        {/* Decorative chevrons */}
        <div className="absolute left-0 top-20 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"></div>

        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400 mb-8">{`> Initializing future.exe`}</p>

        <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter leading-[0.85]">
          <span className="text-white">FREMTIDEN</span><br />
          <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">ER NETT.</span>
        </h1>

        <p className="text-xl text-cyan-100/80 max-w-2xl mb-12 leading-relaxed">
          Et far-og-sønn-team som bygger nettsider for et neste-generasjons internett.
          Levert på en uke. AI-løsninger kommer rett rundt hjørnet.
        </p>

        <div className="flex flex-wrap gap-4 mb-24">
          <a
            href="#"
            className="relative px-8 py-4 bg-cyan-400 text-slate-950 font-bold uppercase tracking-widest text-sm hover:bg-cyan-300 transition-colors"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            ▸ Initialize Project
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-cyan-400/40 text-cyan-200 hover:border-cyan-400 hover:text-cyan-100 transition-colors uppercase tracking-widest text-sm font-bold"
          >
            ▸ Read Documentation
          </a>
        </div>

        {/* Holographic card grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <div className="relative border border-cyan-400/30 bg-slate-900/50 backdrop-blur-md p-8 hover:border-cyan-400/60 transition-colors">
            <div className="absolute top-0 left-0 w-12 h-px bg-cyan-400"></div>
            <div className="absolute top-0 left-0 w-px h-12 bg-cyan-400"></div>
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-3">MODULE_01</p>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Nettsider // Hosting</h2>
            <p className="text-cyan-100/70 leading-relaxed">
              Quantum-rask leveranse. Skreddersydd design, hostet på Vercel. 99,9 % oppetid,
              SSL og daglig backup standard.
            </p>
          </div>
          <div className="relative border border-fuchsia-400/30 bg-slate-900/50 backdrop-blur-md p-8 hover:border-fuchsia-400/60 transition-colors">
            <div className="absolute top-0 right-0 w-12 h-px bg-fuchsia-400"></div>
            <div className="absolute top-0 right-0 w-px h-12 bg-fuchsia-400"></div>
            <p className="text-xs uppercase tracking-widest text-fuchsia-400 mb-3">MODULE_02 // BETA</p>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">AI Subroutines</h2>
            <p className="text-cyan-100/70 leading-relaxed">
              Neural-trent chatboter. AI-resepsjonist for telefonsamtaler. Autonom lead-håndtering.
              Deployment Q2 2026.
            </p>
          </div>
        </div>

        {/* Contact terminal */}
        <div className="border border-cyan-400/30 bg-slate-900/70 backdrop-blur-md p-8 relative">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 border border-cyan-400/40 text-xs uppercase tracking-widest text-cyan-400">
            ◢ TRANSMISSION CHANNEL
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">▸ FREKVENS</p>
              <p className="text-4xl font-bold tracking-tight">484.72.586</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">▸ NODE</p>
              <p className="text-xl font-bold break-all">sondrebakkejord@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-cyan-400/20 px-6 py-4 text-center text-xs uppercase tracking-widest text-cyan-400/60">
        ◢ © {new Date().getFullYear()} · IVEO.SYS · NORGE · BUILD 2026.06
      </footer>
    </div>
  );
}
