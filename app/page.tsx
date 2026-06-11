"use client";

import { useState } from "react";
import { LogoFull } from "./Logo";
import ContactForm from "./ContactForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva koster en nettside hos Iveo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En komplett nettside hos Iveo starter fra 1 990 kr engangs, pluss 99 kr i måneden for hosting og småjusteringer. Større endringer faktureres etter avtale.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor lang tid tar det å få en nettside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iveo leverer ferdige nettsider innen én uke. Større prosjekter med e-handel eller spesialfunksjoner kan ta 2–3 uker.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er inkludert i hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hosting inkluderer SSL-sertifikat, daglig backup, 99,9 % oppetid, mobiloptimalisering, og e-postsupport. Småjusteringer som åpningstider og priser er også inkludert.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilken teknologi bruker Iveo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iveo bygger med Next.js, React og Tailwind CSS — samme stack som Netflix, TikTok og Vercel. Dette gir lynraske sider med god SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Kan Iveo lage AI-løsninger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Iveo lanserer skreddersydde AI-løsninger i 2026 — chatboter trent på din bedrift, AI-resepsjonister som tar telefoner, og automatisering av leads og kundeoppfølging.",
      },
    },
    {
      "@type": "Question",
      name: "Hvem står bak Iveo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iveo er et far-og-sønn-team etablert i 2026. Sondre Bakkejord og hans far driver firmaet sammen fra Norge.",
      },
    },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background effects — restrained, mask-faded */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-32 left-1/3 w-[520px] h-[520px] bg-indigo-300/50 rounded-full blur-[140px] animate-pulse-soft" />
        <div className="absolute top-1/2 -right-32 w-[480px] h-[480px] bg-cyan-300/40 rounded-full blur-[140px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <LogoFull size={38} />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hva-vi-gjor" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Hva vi gjør</a>
            <a href="#eksempler" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Eksempler</a>
            <a href="#hvem-vi-er" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Hvem vi er</a>
            <a href="#kontakt" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Kontakt</a>
            <a
              href="tel:+4748472586"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +47 484 72 586
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Åpne meny"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-slate-900 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-slate-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-slate-900 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden glass border-t border-slate-200/40 px-6 py-4 flex flex-col gap-4">
            <a href="#hva-vi-gjor" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">Hva vi gjør</a>
            <a href="#eksempler" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">Eksempler</a>
            <a href="#hvem-vi-er" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">Hvem vi er</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">Kontakt</a>
            <a href="tel:+4748472586" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold text-center">
              +47 484 72 586
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="main" className="relative pt-36 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-700">Tar imot nye prosjekter</span>
          </div>

          <h1
            className="font-bold text-slate-900 mb-7 animate-fade-up"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              animationDelay: "0.08s",
            }}
          >
            Nettsider som faktisk
            <br />
            jobber for deg.
          </h1>

          <p
            className="text-slate-600 max-w-2xl mb-10 animate-fade-up"
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              lineHeight: 1.55,
              animationDelay: "0.16s",
            }}
          >
            Et far-og-sønn-team i Norge som designer og hoster nettsider med samme stack som
            Netflix og TikTok. Levert på en uke. AI-løsninger kommer rett bak.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <a
              href="tel:+4748472586"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Ring +47 484 72 586
            </a>
            <a
              href="#hva-vi-gjor"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Se hva vi tilbyr
            </a>
          </div>

          {/* Inline social proof — replaces hero-metric template */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.32s" }}>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">Bygget med</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-600">
              <span className="font-semibold">Next.js</span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold">React</span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold">Tailwind</span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold">Vercel</span>
              <span className="text-slate-300">·</span>
              <span className="font-semibold">Claude AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — two-up, not 3-card grid */}
      <section id="hva-vi-gjor" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              To tjenester. Begge gjort skikkelig.
            </h2>
            <p className="text-lg text-slate-600">
              Vi har bevisst valgt å holde tilbudet smalt. Du får full oppmerksomhet på det vi
              faktisk er gode på — ikke en menypakke med ti halvgode produkter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service 1 */}
            <article className="relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Tilgjengelig nå</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nettsider og hosting</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Skreddersydd nettside bygget på Next.js, hostet på Vercel. Vi leverer på en uke
                og tar drift, oppdateringer og support etterpå. Du trenger aldri å åpne en
                kontrollpanel.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  "Custom design — ikke en mal",
                  "99,9 % oppetid, SSL og daglig backup",
                  "SEO-vennlig fra første linje kode",
                  "24/7 support på norsk",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Service 2 — visually distinct, not a clone */}
            <article className="relative bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 text-white overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">Snart</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI-løsninger</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Snart kommer skreddersydde AI-produkter — chatboter som svarer kunder hele
                  døgnet, AI-resepsjonister som tar telefonen, og automatisering av
                  rutineoppgaver. Prøv chatboten nede til høyre. Den lever allerede.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {[
                    "Chatboter trent på din bedrift",
                    "AI som tar telefoner som resepsjonist",
                    "Automatisering av leads og e-post",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Examples — five industry mockups, prominent */}
      <section id="eksempler" className="relative py-24 px-6 bg-slate-50/60 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Slik ser det ut hos kundene våre.
              </h2>
              <p className="text-lg text-slate-600">
                Fem ekte eksempler på nettsider vi kan bygge — én for hver bransje. Klikk på et
                eksempel for å se hele siden.
              </p>
            </div>
            <a
              href="/eksempler"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              Se alle fem →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                slug: "pizza",
                name: "Bakkejord Pizza",
                industry: "Restaurant",
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "ror",
                name: "Bakkejord Rør",
                industry: "Rørlegger",
                img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "snekker",
                name: "Bakkejord Snekker",
                industry: "Snekker",
                img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "tannlege",
                name: "Tannlege Bakkejord",
                industry: "Tannlege",
                img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
              },
              {
                slug: "kafe",
                name: "Bakkejord Kafé",
                industry: "Kafé",
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
              },
            ].map((e) => (
              <a
                key={e.slug}
                href={`/eksempler/${e.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] uppercase tracking-widest opacity-80 mb-0.5">{e.industry}</p>
                    <p className="font-bold text-sm leading-tight">{e.name}</p>
                  </div>
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">Se eksempel</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500 text-center mt-10">
            Dette er reelle design — bygget på faktisk kode, ikke statiske bilder. Akkurat slik vi bygger nettsiden din.
          </p>
        </div>
      </section>

      {/* Who we are — narrative, not card */}
      <section id="hvem-vi-er" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Et team på to.
                <br />
                Pappa og sønn.
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Iveo er drevet av Sondre og hans far. Vi startet fordi vi var lei av å se
                  norske bedrifter betale 80&nbsp;000 kr for nettsider som ser ut som de er fra
                  2015.
                </p>
                <p>
                  Vi bygger med Next.js, React og Tailwind — samme stack som Netflix, TikTok
                  og Vercel. Forskjellen er at du får oss direkte på telefonen, ikke en
                  kundetjeneste i tre ledd.
                </p>
                <p className="text-slate-900 font-semibold">
                  Vi skriver koden. Vi tar telefonen. Det er det.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <dl className="space-y-5 border-l border-slate-200 pl-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Etablert</dt>
                  <dd className="text-2xl font-bold text-slate-900">2026</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Lokasjon</dt>
                  <dd className="text-2xl font-bold text-slate-900">Norge</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Leveringstid</dt>
                  <dd className="text-2xl font-bold text-slate-900">Innen 1 uke</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-slate-900 rounded-2xl p-10 md:p-14 overflow-hidden">
            <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                  Ring oss.
                  <br />
                  Uten salgsprat.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Vi hører hva du trenger, du hører om vi er riktige.
                  Ingen forventning, ingen forpliktelse.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+4748472586"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Ring +47 484 72 586
                </a>
                <a
                  href="mailto:sondrebakkejord@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Eller send e-post
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Snakk med oss.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Fyll ut skjemaet, eller ring direkte. Du får svar samme dag.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+4748472586"
                className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Telefon</p>
                  <p className="font-bold text-slate-900">+47 484 72 586</p>
                </div>
              </a>

              <a
                href="mailto:sondrebakkejord@gmail.com"
                className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium">E-post</p>
                  <p className="font-bold text-slate-900 text-sm break-all">sondrebakkejord@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-6 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <LogoFull size={28} />
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Iveo. Laget i Norge.
          </div>
        </div>
      </footer>
    </div>
  );
}
