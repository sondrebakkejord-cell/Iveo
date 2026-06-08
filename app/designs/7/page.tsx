import { BackBar } from "../BackBar";

export default function Design7() {
  return (
    <div className="min-h-screen bg-indigo-600 text-white">
      <BackBar n={7} name="Drenched" dark />

      <header className="px-6 py-5 border-b border-indigo-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">iveo</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-indigo-200">Tjenester</a>
            <a href="#" className="hover:text-indigo-200">Team</a>
            <a href="#" className="hover:text-indigo-200">Kontakt</a>
            <a href="#" className="px-4 py-1.5 bg-white text-indigo-700 rounded-full font-semibold hover:bg-indigo-50 transition-colors">Book →</a>
          </nav>
        </div>
      </header>

      <main className="px-6 py-20 max-w-6xl mx-auto">
        <div className="inline-block px-3 py-1 bg-indigo-500/50 border border-indigo-400 rounded-full text-sm font-medium mb-8">
          ● Tar imot prosjekter
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8" style={{ letterSpacing: "-0.04em", lineHeight: 0.9 }}>
          Lilla<br />
          er det nye<br />
          <span className="text-indigo-300">grå.</span>
        </h1>

        <p className="text-2xl text-indigo-100 max-w-2xl mb-12 leading-relaxed">
          Vi lager nettsider som tør å være noe. Bygget av et far-og-sønn-team i Norge.
          Levert på en uke.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#" className="px-8 py-4 bg-white text-indigo-700 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors">
            Book et møte
          </a>
          <a href="#" className="px-8 py-4 bg-indigo-500/50 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-indigo-500/70 transition-colors">
            Ring 484 72 586
          </a>
        </div>

        <div className="mt-32 grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-700 border-2 border-indigo-400 rounded-3xl p-10">
            <div className="text-6xl mb-6">01</div>
            <h2 className="text-3xl font-bold mb-4">Nettsider & hosting</h2>
            <p className="text-indigo-200 text-lg leading-relaxed mb-6">
              Custom design, hostet av oss, levert på en uke. Vi tar drift, oppdateringer og support.
            </p>
            <ul className="space-y-2 text-indigo-100">
              <li>→ 99,9 % oppetid</li>
              <li>→ Daglig backup</li>
              <li>→ SSL inkludert</li>
              <li>→ Support når du trenger</li>
            </ul>
          </div>
          <div className="bg-white text-indigo-900 rounded-3xl p-10">
            <div className="text-6xl mb-6 text-indigo-300">02</div>
            <h2 className="text-3xl font-bold mb-4">AI — kommer snart</h2>
            <p className="text-indigo-700 text-lg leading-relaxed mb-6">
              Chatboter trent på din bedrift. AI-resepsjonister som tar telefoner. Automatisering.
            </p>
            <ul className="space-y-2 text-indigo-800">
              <li>→ Chatbot 24/7</li>
              <li>→ AI-telefonsvarer</li>
              <li>→ Lead-automatisering</li>
              <li>→ Q2 2026</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-indigo-200 text-lg mb-4">Ring direkte:</p>
          <p className="text-5xl md:text-7xl font-black tracking-tight mb-4">484 72 586</p>
          <p className="text-indigo-200 text-lg">eller sondrebakkejord@gmail.com</p>
        </div>
      </main>

      <footer className="border-t border-indigo-500 px-6 py-6 text-center text-indigo-200">
        © {new Date().getFullYear()} Iveo · Lilla og stolt av det
      </footer>
    </div>
  );
}
