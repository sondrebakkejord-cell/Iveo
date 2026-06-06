"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-300 rounded-full blur-[150px] opacity-30 animate-pulse-glow" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-[150px] opacity-30 animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300 rounded-full blur-[150px] opacity-20 animate-pulse-glow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              I
            </div>
            <span className="text-xl font-bold tracking-tight">Iveo</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tjenester" className="text-sm font-medium hover:text-indigo-600 transition">Tjenester</a>
            <a href="#om-oss" className="text-sm font-medium hover:text-indigo-600 transition">Om oss</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-indigo-600 transition">Kontakt</a>
            <a href="#book" className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all">
              Book et møte
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass border-t border-white/40 px-6 py-4 flex flex-col gap-4">
            <a href="#tjenester" onClick={() => setMenuOpen(false)} className="text-sm font-medium">Tjenester</a>
            <a href="#om-oss" onClick={() => setMenuOpen(false)} className="text-sm font-medium">Om oss</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-sm font-medium">Kontakt</a>
            <a href="#book" onClick={() => setMenuOpen(false)} className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium text-center">
              Book et møte
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-700">Tilgjengelig for nye prosjekter</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Nettsider for{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              fremtiden
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Vi designer, bygger og hoster moderne nettsider — og leverer AI-løsninger som tar bedriften din inn i neste generasjon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a href="#book" className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all">
              Book et gratis møte
            </a>
            <a href="#tjenester" className="px-8 py-4 rounded-full glass text-foreground font-medium hover:scale-105 transition-all">
              Se hva vi tilbyr
            </a>
          </div>
        </div>

        {/* Floating card preview */}
        <div className="relative max-w-5xl mx-auto mt-20 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-3xl opacity-30" />
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-white/60 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Leveringstid", value: "Innen en uke", icon: "⚡" },
                { label: "Support", value: "24/7", icon: "💬" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full glass mb-4 text-xs font-medium text-indigo-600">
              TJENESTER
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Alt du trenger på ett sted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra design og utvikling til hosting og AI — vi tar hånd om hele den digitale reisen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Nettsider",
                desc: "Skreddersydde, moderne nettsider bygget med nyeste teknologi. Raske, responsive og bygget for å konvertere.",
                features: ["Custom design", "Mobiloptimalisert", "SEO-vennlig"],
              },
              {
                icon: "☁️",
                title: "Hosting",
                desc: "Pålitelig hosting på toppmoderne infrastruktur. Vi sørger for at siden din alltid er online og lynrask.",
                features: ["99.9% oppetid", "SSL inkludert", "Daglig backup"],
              },
              {
                icon: "🤖",
                title: "AI-løsninger",
                desc: "Snart kommer skreddersydde AI-produkter som automatiserer arbeidet og gir bedriften din et forsprang.",
                features: ["Chatbots", "Automatisering", "Skreddersydde modeller"],
                badge: "Kommer snart",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative glass rounded-3xl p-8 border border-white/60 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300"
              >
                {service.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-medium shadow-lg">
                    {service.badge}
                  </div>
                )}
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om-oss" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 border border-white/60 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 mb-4 text-xs font-medium text-indigo-600">
                  OM OSS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Far og sønn med en{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    visjon
                  </span>
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  Iveo er et norsk teknologiselskap drevet av et far-og-sønn-team som brenner for å hjelpe bedrifter inn i fremtiden.
                </p>
                <p className="text-gray-600 text-lg">
                  Vi kombinerer erfaring med fersk innsikt i moderne teknologi for å levere løsninger som faktisk gjør en forskjell.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-1 animate-gradient">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-bold bg-gradient-to-br from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                        Iveo
                      </div>
                      <div className="text-sm text-gray-500 mt-2 tracking-widest">EST. 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl blur-3xl opacity-40" />
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Klar for å ta neste steg?
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                  Book et gratis og uforpliktende møte. Vi diskuterer ideene dine og finner den beste løsningen sammen.
                </p>
                <a
                  href="#kontakt"
                  className="inline-block px-10 py-4 rounded-full bg-white text-indigo-600 font-semibold shadow-2xl hover:scale-105 transition-all"
                >
                  Book et møte →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full glass mb-4 text-xs font-medium text-indigo-600">
              KONTAKT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              La oss snakke sammen
            </h2>
            <p className="text-lg text-gray-600">
              Vi svarer raskt — og hjelper deg gjerne med spørsmål.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+4748472586"
              className="group glass rounded-3xl p-8 border border-white/60 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">Telefon</div>
              <div className="text-2xl font-bold group-hover:text-indigo-600 transition">484 72 586</div>
            </a>

            <a
              href="mailto:kontakt@iveo.no"
              className="group glass rounded-3xl p-8 border border-white/60 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 mb-1">E-post</div>
              <div className="text-2xl font-bold group-hover:text-indigo-600 transition">kontakt@iveo.no</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <span className="font-bold">Iveo</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Iveo. Bygger fremtidens nettsider.
          </div>
        </div>
      </footer>
    </div>
  );
}
