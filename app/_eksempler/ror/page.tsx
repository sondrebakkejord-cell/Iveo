import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "../Breadcrumb";

export const metadata: Metadata = {
  title: "Bakkejord Rør — Eksempel på rørlegger-nettside",
  description:
    "Eksempel på nettside for rørlegger — med tjenester, kontakt og vakttid. Demo laget av Iveo.",
  keywords: ["nettside rørlegger", "rørlegger Norge", "demo rørlegger", "lage nettside rørlegger"],
  alternates: { canonical: "https://iveo-nine.vercel.app/eksempler/ror" },
  openGraph: { title: "Bakkejord Rør — Eksempel | Iveo", description: "Eksempel på rørlegger-nettside bygget av Iveo.", url: "https://iveo-nine.vercel.app/eksempler/ror", type: "website" },
};

export default function RorSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <BreadcrumbSchema crumbs={[{ name: "Iveo", url: "/" }, { name: "Eksempler", url: "/eksempler" }, { name: "Rørlegger", url: "/eksempler/ror" }]} />
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-white">
        <Link href="/eksempler" className="hover:opacity-80">← Tilbake</Link>
        <span className="mx-2 opacity-50">·</span>
        <span>Eksempel: Bakkejord Rør</span>
      </div>

      {/* Emergency bar */}
      <div className="bg-amber-500 text-amber-950 text-center py-2.5 text-sm font-bold flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-40 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900" />
        </span>
        AKUTT DØGNVAKT — Ring <a href="tel:+4722334455" className="underline">22 33 44 55</a>
      </div>

      {/* Trust strip */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 tracking-wide">
          <span className="flex items-center gap-2"><svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Lokal familiebedrift</span>
          <span className="flex items-center gap-2"><svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Arbeidsgaranti 2 år</span>
          <span className="flex items-center gap-2"><svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Fast pris før vi starter</span>
          <span className="flex items-center gap-2"><svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Mester · NRL-sertifisert</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b-2 border-slate-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-black text-2xl">B</div>
            <div>
              <div className="text-xl font-extrabold leading-tight">BAKKEJORD RØR</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-bold -mt-0.5">Far &amp; sønn · Siden 1998</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-7 text-sm font-bold">
            <a href="#tjenester" className="hover:text-amber-700">Tjenester</a>
            <a href="#omoss" className="hover:text-amber-700">Om oss</a>
            <a href="#omrader" className="hover:text-amber-700">Områder</a>
            <a href="#anmeldelser" className="hover:text-amber-700">Anmeldelser</a>
            <a href="tel:+4722334455" className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-amber-950 rounded-full hover:bg-amber-400 transition-colors font-extrabold">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              22 33 44 55
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 70%, #3b82f6 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Klar til utrykning nå
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]" style={{ letterSpacing: "-0.03em" }}>
              Rørleggeren<br />
              som kommer<br />
              <span className="text-amber-400">før vannet stiger.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Bakkejord Rør har vært en lokal familiebedrift i Oslo siden 1998.
              Knut og sønnen Magnus, pluss seks dyktige rørleggere — alle med fagbrev og mesterbrev.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+4722334455" className="inline-flex items-center gap-2 px-7 py-4 bg-amber-500 text-amber-950 rounded-full font-extrabold text-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Ring 22 33 44 55
              </a>
              <a href="#kontakt" className="px-7 py-4 bg-white text-slate-900 rounded-full font-extrabold text-lg hover:bg-slate-100 transition-colors">
                Book befaring
              </a>
            </div>

            {/* Trust ratings */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" /></svg>
                  ))}
                </div>
                <span className="font-bold text-white">4,9</span>
                <span className="text-slate-400">— 412 anmeldelser</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-white font-bold">8 000+</span>
                <span>fornøyde kunder</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-white font-bold">60 min</span>
                <span>akutt utrykning</span>
              </div>
            </div>
          </div>

          {/* Owner card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=85"
                alt="Mesterrørlegger Knut og Magnus Bakkejord — far og sønn — på jobb hos kunde"
                className="w-full aspect-[4/5] object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/85 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Eiere</p>
                <p className="text-2xl font-extrabold">Knut &amp; Magnus Bakkejord</p>
                <p className="text-slate-300 text-sm">Far og sønn · Mesterrørleggere</p>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-amber-500 text-amber-950 px-4 py-2 rounded-lg font-extrabold text-sm rotate-3 shadow-lg">
              Lokal i 27 år
            </div>
          </div>
        </div>
      </section>

      {/* Special offer */}
      <section className="bg-amber-500 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-900">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold opacity-70">Vårens kampanje</p>
              <p className="text-2xl font-extrabold leading-tight">−500 kr på årlig sanitærsjekk</p>
              <p className="text-sm opacity-80">For nye kunder · gjelder ut juni</p>
            </div>
          </div>
          <a href="#kontakt" className="px-7 py-3 bg-slate-900 text-amber-400 rounded-full font-extrabold hover:bg-slate-800 transition-colors whitespace-nowrap">
            Bestill nå →
          </a>
        </div>
      </section>

      {/* Brand partnerships */}
      <section className="py-10 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-6">Vi installerer og servicerer kun A-merker</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-400">
            {["OSO", "Høiax", "Geberit", "Grohe", "Damixa", "Ifö", "Atlantic"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">Tjenester</p>
          <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ letterSpacing: "-0.025em" }}>Hva vi gjør best</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">Fra akutt vannlekkasje til komplett badrenovering — vi tar alt en privatperson eller bedrift trenger.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />,
                title: "Akutt rørleggervakt",
                desc: "Vannlekkasje? Tette rør? Vi rykker ut innen 60 minutter, døgnet rundt — også i helger og ferier.",
                price: "Fra 2 290,-",
                urgent: true,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11h14M5 11l-1 8a2 2 0 002 2h12a2 2 0 002-2l-1-8" />,
                title: "Bad og våtrom",
                desc: "Komplett badrenovering — membran, sluk, fliser, rør. Vi koordinerer alle håndverkerne.",
                price: "Tilbud",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "Service og vedlikehold",
                desc: "Årlig sjekk, kran-bytte, pakninger, vannlås. Forebygg lekkasje før den oppstår.",
                price: "Fra 1 290,-",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: "Tette avløp",
                desc: "Høytrykksspyling, kamerakontroll, rotfjerning fra avløpsrør og hovedledning.",
                price: "Fra 1 790,-",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: "Varmtvannsbereder",
                desc: "Reparasjon, bytting eller nyinstallasjon. Vi har OSO, Høiax og Atlantic på lager.",
                price: "Tilbud",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                title: "Nybygg og rehab",
                desc: "Rørstrekk, sentralvarme, vannledninger — fra arkitekttegning til ferdig nøkkel.",
                price: "Tilbud",
              },
            ].map((t) => (
              <div key={t.title} className={`group bg-white rounded-2xl p-7 border-2 transition-all hover:shadow-lg ${t.urgent ? "border-amber-500 hover:border-amber-600" : "border-slate-200 hover:border-slate-900"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${t.urgent ? "bg-amber-500 text-amber-950" : "bg-slate-900 text-white"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{t.icon}</svg>
                </div>
                <h3 className="text-xl font-extrabold mb-2">{t.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <p className={`font-extrabold ${t.urgent ? "text-amber-700" : "text-slate-900"}`}>{t.price}</p>
                  <span className={`text-xs font-bold ${t.urgent ? "text-amber-700" : "text-slate-500"}`}>LES MER →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="anmeldelser" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">Anmeldelser</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-0.025em" }}>Vår beste markedsføring</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">412 anmeldelser — 4,9 av 5 i snitt på Google.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Hilde Mehlum",
                place: "Frogner",
                tech: "Magnus",
                text: "Vannlekkasje midt på natten. Magnus var her på 45 minutter, fant feilen, ordnet det. Pris akkurat som han sa over telefonen — ingen overraskelser.",
              },
              {
                name: "Tor Eivind Bjerke",
                place: "Lambertseter",
                tech: "Knut og Sigurd",
                text: "Helt ny vannledning og nytt bad. Knut tegnet, Sigurd bygde. Ferdig på 4 uker, og kvaliteten er feilfri. Anbefales på det sterkeste.",
              },
              {
                name: "Astrid Nordli",
                place: "Bærum",
                tech: "Sigurd",
                text: "Tett avløp i over et halvt år. Sigurd fant problemet på 15 min med kamera, fikset det. Hyggelig, ryddig og rimelig. Vi bruker dem igjen.",
              },
            ].map((r) => (
              <div key={r.name} className="bg-slate-800 border border-slate-700 rounded-2xl p-7">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" /></svg>
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-sm text-slate-400">{r.place} · Hjulpet av {r.tech}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://google.com" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold">
              Les alle 412 anmeldelser på Google →
            </a>
          </div>
        </div>
      </section>

      {/* Slik fungerer en utrykning */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">Prosess</p>
          <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ letterSpacing: "-0.025em" }}>Slik fungerer en utrykning</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">Fra du ringer til vi går — du vet alltid hva som skjer.</p>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: "1", title: "Du ringer", time: "0 min", desc: "Vi tar telefonen 24/7. Beskriver problemet kort, vi vurderer hva som trengs." },
              { step: "2", title: "Vi rykker ut", time: "Innen 60 min", desc: "Nærmeste ledige rørlegger setter seg i bilen — med komplett verktøy og delelager." },
              { step: "3", title: "Fast pris", time: "På stedet", desc: "Vi inspiserer, gir deg skriftlig pris. Du sier ja eller nei før vi rører noe." },
              { step: "4", title: "Ferdig og ryddet", time: "Samme dag", desc: "Vi rydder etter oss og dokumenterer arbeidet. Garanti i 2 år på alt vi gjør." },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 h-full">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-3xl font-black text-amber-500">{s.step}</span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-2 py-1 rounded">{s.time}</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
                {i < 3 && (
                  <svg className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-slate-300 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Områder */}
      <section id="omrader" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">Områder vi dekker</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ letterSpacing: "-0.025em" }}>Vi dekker hele Oslo &amp; omegn</h2>
            <p className="text-lg text-slate-600 mb-8">Nærmeste rørlegger får oppdraget. Inntil 30 min kjøretid fra Oslo sentrum, inkludert kveld og helg.</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Oslo sentrum", "Frogner", "Bygdøy", "Majorstuen",
                "Grünerløkka", "St. Hanshaugen", "Sagene", "Sofienberg",
                "Lambertseter", "Holmenkollen", "Røa", "Voksenkollen",
                "Bærum", "Asker", "Lørenskog", "Nesodden",
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a8 8 0 00-8 8c0 5.4 7 12 7 12s7-6.6 7-12a6 6 0 00-6-8z" /></svg>
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <p className="text-amber-400 text-sm uppercase tracking-widest font-bold mb-3">Bor du utenfor?</p>
            <h3 className="text-2xl font-black mb-4">Ring oss likevel.</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Vi tar ofte ekstra-oppdrag i Drammen, Lillestrøm og Follo hvis vi har kapasitet.
              Ring og hør — det koster ingenting.
            </p>
            <a href="tel:+4722334455" className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 text-amber-950 rounded-full font-extrabold hover:bg-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Ring 22 33 44 55
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">Vanlige spørsmål</p>
          <h2 className="text-4xl md:text-5xl font-black mb-10" style={{ letterSpacing: "-0.025em" }}>Det folk lurer på</h2>

          <div className="space-y-3">
            {[
              {
                q: "Hva gjør jeg ved akutt vannlekkasje før dere kommer?",
                a: "Steng hovedstoppekran umiddelbart (vanligvis i kjeller eller bod). Fjern verdisaker fra området. Ring oss på 22 33 44 55 — vi guider deg gjennom resten på telefon mens vi er på vei.",
              },
              {
                q: "Hvor mye koster en akuttutrykning?",
                a: "Fra 2 290 kr på kveld/helg, inkluderer fremmøte og første time. Vi gir deg alltid skriftlig fast pris på selve reparasjonen før vi starter — ingen åpne timepriser som ruser i taket.",
              },
              {
                q: "Dekker forsikringen min utgiftene?",
                a: "Ved akutt skade dekker husforsikringen normalt utbedring av skadevolder (lekkasje) og følgeskader. Vi dokumenterer alt med foto og skriftlig rapport så forsikringssaken går lett.",
              },
              {
                q: "Er dere medlem av Rørentreprenørene Norge (NRL)?",
                a: "Ja. Alle rørleggerne våre har fagbrev, og vi er sertifisert mesterbedrift med 10 millioner i ansvarsforsikring.",
              },
              {
                q: "Kan dere garantere arbeidet?",
                a: "Vi gir 2 års garanti på alt utført arbeid. På materialer følger vi produsentens garanti (typisk 5–10 år på blandebatterier og berederen).",
              },
            ].map((item) => (
              <details key={item.q} className="group bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
                <summary className="cursor-pointer p-5 font-extrabold text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <span>{item.q}</span>
                  <svg className="w-5 h-5 text-amber-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section id="omoss" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">Om oss</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ letterSpacing: "-0.025em" }}>Familiebedriften med ekte hender.</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Bakkejord Rør AS ble startet i 1998 av Knut Bakkejord. Sønnen Magnus kom inn i firmaet i 2014
            etter endt mesterbrev. I dag er vi seks rørleggere i Oslo og omegn — alle med fagbrev.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Vi har én regel: du skal aldri lure på hva noe koster før vi starter. Du får
            alltid skriftlig tilbud — eller fast pris over telefonen før vi rykker ut.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400 font-bold mb-3">Kontakt</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ letterSpacing: "-0.025em" }}>Trenger du oss nå?</h2>
          <p className="text-xl text-slate-300 mb-10">Vi tar telefonen — også på kvelder og helger.</p>
          <a href="tel:+4722334455" className="inline-block text-6xl md:text-8xl font-black mb-8 text-amber-400 hover:text-amber-300 transition-colors">
            22 33 44 55
          </a>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:post@bakkejordror.no" className="px-7 py-3.5 bg-amber-500 text-amber-950 rounded-full font-extrabold hover:bg-amber-400 transition-colors">
              post@bakkejordror.no
            </a>
            <a href="#" className="px-7 py-3.5 border-2 border-white text-white rounded-full font-extrabold hover:bg-white/10 transition-colors">
              Send befaringsforespørsel
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-sm pb-24 md:pb-8">
        © {new Date().getFullYear()} Bakkejord Rør AS · Org.nr 999 888 777 · Storgata 22, Oslo · Sertifisert mesterbedrift
      </footer>

      {/* Sticky mobile akutt button */}
      <a
        href="tel:+4722334455"
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-amber-500 text-amber-950 text-center py-4 rounded-full font-extrabold text-lg shadow-2xl shadow-amber-500/40 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        Akutt? Ring 22 33 44 55
      </a>
    </div>
  );
}
