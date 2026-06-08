import { BackBar } from "../BackBar";

export default function Design3() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackBar n={3} name="Aurora" />

      {/* Aurora background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-pink-100 to-cyan-100" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-fuchsia-300 rounded-full blur-[180px] opacity-50" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-300 rounded-full blur-[180px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-violet-300 rounded-full blur-[180px] opacity-40" />
      </div>

      <header className="px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">iveo</div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-700 bg-white/40 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/60">
            <a href="#" className="hover:text-slate-900">Tjenester</a>
            <a href="#" className="hover:text-slate-900">Team</a>
            <a href="#" className="hover:text-slate-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="px-6 py-16 max-w-5xl mx-auto">
        <div className="bg-white/30 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-12 md:p-16 mb-8 shadow-2xl">
          <p className="text-sm font-medium text-violet-700 mb-6">✨ Tilgjengelig for nye prosjekter</p>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>
            Nettsider som<br />
            <span className="font-light italic text-violet-700">drømmer</span> seg fram.
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl leading-relaxed">
            Vi er et far-og-sønn-team som lager moderne nettsider, hoster dem, og bygger
            AI-løsninger som kommer rett rundt hjørnet.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#" className="px-7 py-3.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
              Book et møte →
            </a>
            <a href="#" className="px-7 py-3.5 bg-white/60 backdrop-blur-xl border border-white/80 text-slate-900 rounded-full font-semibold hover:bg-white/80 transition-colors">
              Se tjenester
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white/30 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 mb-5"></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Nettsider & hosting</h2>
            <p className="text-slate-700 leading-relaxed">
              Designet, kodet, og hostet av oss. Levert innen en uke. Du trenger aldri tenke på drift.
            </p>
          </div>
          <div className="bg-white/30 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-5"></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">AI-løsninger (snart)</h2>
            <p className="text-slate-700 leading-relaxed">
              Chatboter, AI-resepsjonister, automatisering — bygget rundt akkurat din bedrift.
            </p>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Snakk med oss</h2>
          <p className="text-slate-700 mb-6">Svar samme dag, alltid.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="tel:+4748472586" className="text-2xl font-bold text-slate-900 hover:text-violet-700">484 72 586</a>
            <span className="text-slate-400">·</span>
            <a href="mailto:sondrebakkejord@gmail.com" className="text-lg font-medium text-slate-900 hover:text-violet-700">sondrebakkejord@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Iveo — laget i Norge ✨
      </footer>
    </div>
  );
}
