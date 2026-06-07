"use client";

export default function Logoer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-indigo-600 hover:underline mb-6 inline-block">← Tilbake</a>
        <h1 className="text-4xl font-bold mb-2">Logo-forslag for Iveo</h1>
        <p className="text-gray-600 mb-12">Velg favoritten din — jeg setter den deretter inn i nettsiden.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo 1: Geometric I */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-xs text-gray-500 mb-4">FORSLAG 1 — Geometrisk "I"</div>
            <div className="flex items-center gap-4 mb-8">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <rect x="8" y="8" width="64" height="64" rx="16" fill="url(#g1)"/>
                <rect x="34" y="20" width="12" height="40" rx="2" fill="white"/>
                <circle cx="40" cy="16" r="4" fill="white"/>
              </svg>
              <div>
                <div className="text-4xl font-bold tracking-tight">Iveo</div>
                <div className="text-xs text-gray-500 tracking-widest">TECHNOLOGIES</div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64" rx="16" fill="url(#g1)"/>
                <rect x="34" y="20" width="12" height="40" rx="2" fill="white"/>
                <circle cx="40" cy="16" r="4" fill="white"/>
              </svg>
              <span className="text-white text-xl font-bold">Iveo</span>
            </div>
          </div>

          {/* Logo 2: Infinity loop / wave */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-xs text-gray-500 mb-4">FORSLAG 2 — Bølge/Flow</div>
            <div className="flex items-center gap-4 mb-8">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4f46e5"/>
                    <stop offset="50%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <path d="M 10 50 Q 25 20, 40 50 T 70 50" stroke="url(#g2)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                <circle cx="10" cy="50" r="6" fill="#4f46e5"/>
                <circle cx="70" cy="50" r="6" fill="#06b6d4"/>
              </svg>
              <div>
                <div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Iveo</div>
                <div className="text-xs text-gray-500 tracking-widest">DIGITAL FLOW</div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 80 80">
                <path d="M 10 50 Q 25 20, 40 50 T 70 50" stroke="url(#g2)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                <circle cx="10" cy="50" r="6" fill="#4f46e5"/>
                <circle cx="70" cy="50" r="6" fill="#06b6d4"/>
              </svg>
              <span className="text-white text-xl font-bold">Iveo</span>
            </div>
          </div>

          {/* Logo 3: Hexagon tech */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-xs text-gray-500 mb-4">FORSLAG 3 — Tech Hexagon</div>
            <div className="flex items-center gap-4 mb-8">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#0ea5e9"/>
                  </linearGradient>
                </defs>
                <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" fill="url(#g3)"/>
                <polygon points="40,18 60,29 60,51 40,62 20,51 20,29" fill="white" opacity="0.15"/>
                <text x="40" y="50" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="system-ui">I</text>
              </svg>
              <div>
                <div className="text-4xl font-bold tracking-tight">Iveo</div>
                <div className="text-xs text-indigo-600 tracking-widest font-semibold">FUTURE TECH</div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 80 80">
                <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" fill="url(#g3)"/>
                <text x="40" y="50" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="system-ui">I</text>
              </svg>
              <span className="text-white text-xl font-bold">Iveo</span>
            </div>
          </div>

          {/* Logo 4: Orbit / circles */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <div className="text-xs text-gray-500 mb-4">FORSLAG 4 — Orbit/Sirkler</div>
            <div className="flex items-center gap-4 mb-8">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="32" fill="none" stroke="url(#g4)" strokeWidth="3" opacity="0.3"/>
                <circle cx="40" cy="40" r="22" fill="none" stroke="url(#g4)" strokeWidth="3" opacity="0.6"/>
                <circle cx="40" cy="40" r="12" fill="url(#g4)"/>
                <circle cx="40" cy="8" r="5" fill="#06b6d4"/>
                <circle cx="68" cy="55" r="4" fill="#4f46e5"/>
              </svg>
              <div>
                <div className="text-4xl font-bold tracking-tight">iveo</div>
                <div className="text-xs text-gray-500 tracking-[0.3em]">N · O · R · W · A · Y</div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="url(#g4)" strokeWidth="3" opacity="0.3"/>
                <circle cx="40" cy="40" r="22" fill="none" stroke="url(#g4)" strokeWidth="3" opacity="0.6"/>
                <circle cx="40" cy="40" r="12" fill="url(#g4)"/>
                <circle cx="40" cy="8" r="5" fill="#06b6d4"/>
                <circle cx="68" cy="55" r="4" fill="#4f46e5"/>
              </svg>
              <span className="text-white text-xl font-bold">iveo</span>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Hvilken liker du?</h2>
          <p className="text-gray-600">Si fra hvilket nummer du vil bruke (1, 2, 3 eller 4), så bygger jeg den inn i nettsiden — både i header og favicon. Vi kan også justere farger eller blande elementer fra flere.</p>
        </div>
      </div>
    </div>
  );
}
