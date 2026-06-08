import { BackBar } from "../BackBar";

export default function Design4() {
  return (
    <div className="min-h-screen bg-zinc-950 text-emerald-400" style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
      <BackBar n={4} name="Terminal" dark />

      <div className="border-b border-emerald-900/50 px-6 py-3 bg-black/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">$</span>
            <span className="text-zinc-400">iveo</span>
            <span className="text-emerald-400">@norway</span>
            <span className="text-zinc-500">~/</span>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="text-zinc-500">tjenester.sh</span>
            <span className="text-zinc-500">team.md</span>
            <span className="text-zinc-500">kontakt.json</span>
          </div>
        </div>
      </div>

      <main className="px-6 py-12 max-w-5xl mx-auto">
        <div className="text-sm mb-8 space-y-1">
          <p><span className="text-zinc-500">{'>'}</span> <span className="text-emerald-300">boot iveo --mode production</span></p>
          <p className="text-zinc-500">[OK] system initialized</p>
          <p className="text-zinc-500">[OK] norge connected</p>
          <p className="text-zinc-500">[OK] far + son online</p>
        </div>

        <pre className="text-[10px] md:text-xs leading-tight text-emerald-500 mb-10 overflow-x-auto">
{`██╗██╗   ██╗███████╗ ██████╗
██║██║   ██║██╔════╝██╔═══██╗
██║██║   ██║█████╗  ██║   ██║
██║╚██╗ ██╔╝██╔══╝  ██║   ██║
██║ ╚████╔╝ ███████╗╚██████╔╝
╚═╝  ╚═══╝  ╚══════╝ ╚═════╝`}
        </pre>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
          Nettsider, kompilert.
        </h1>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl leading-relaxed">
          Far-og-sønn-team. Next.js, Tailwind, Vercel. Levert på en uke.
          <span className="text-emerald-400"> $</span> ingen byrå-tull.
        </p>

        <div className="mb-12 space-y-3 font-mono text-sm">
          <p><span className="text-emerald-500">▸</span> <span className="text-zinc-300">npx create-iveo nettside</span></p>
          <p className="pl-4 text-zinc-500">└─ designer + koder + hoster</p>
          <p><span className="text-emerald-500">▸</span> <span className="text-zinc-300">iveo ai --coming-soon</span></p>
          <p className="pl-4 text-zinc-500">└─ chatboter, ai-resepsjonist, automatisering</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="border border-emerald-900/60 bg-emerald-950/20 rounded-lg p-6">
            <p className="text-xs text-emerald-600 mb-2">// service.web</p>
            <h2 className="text-xl font-bold text-white mb-3">nettsider + hosting</h2>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li>⎯ levert: 7 dager</li>
              <li>⎯ oppetid: 99.9%</li>
              <li>⎯ ssl + backup: ✓</li>
              <li>⎯ support: 24/7</li>
            </ul>
          </div>
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg p-6">
            <p className="text-xs text-zinc-500 mb-2">// service.ai [pending]</p>
            <h2 className="text-xl font-bold text-zinc-400 mb-3">ai_solutions</h2>
            <ul className="text-sm text-zinc-500 space-y-1">
              <li>⎯ chatbot.trained()</li>
              <li>⎯ phone_ai.receptionist()</li>
              <li>⎯ leads.automate()</li>
              <li>⎯ status: deploying...</li>
            </ul>
          </div>
        </div>

        <div className="border border-emerald-900/60 bg-black p-8 rounded-lg">
          <p className="text-xs text-emerald-600 mb-4">// contact.json</p>
          <pre className="text-sm text-emerald-300 leading-relaxed">
{`{
  "tlf":    "+47 484 72 586",
  "email":  "sondrebakkejord@gmail.com",
  "respond_within": "same_day",
  "language": ["no", "en"]
}`}
          </pre>
          <a href="#" className="inline-block mt-6 px-6 py-3 bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors rounded">
            $ ./book-meeting.sh →
          </a>
        </div>
      </main>

      <footer className="border-t border-emerald-900/50 px-6 py-4 text-center text-xs text-zinc-600">
        <span className="text-emerald-500">$</span> exit 0 — built in norge, 2026
      </footer>
    </div>
  );
}
