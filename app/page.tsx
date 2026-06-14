"use client";

import { useState } from "react";
import { LogoFull } from "./Logo";
import ContactForm from "./ContactForm";
import ReviewForm from "./ReviewForm";
import { useT, LanguageToggle } from "./lang";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useT();

  const examples = [
    { slug: "pizza", name: "Bakkejord Pizza", industry: t.examples.industries.restaurant, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
    { slug: "ror", name: "Bakkejord Rør", industry: t.examples.industries.plumber, img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80" },
    { slug: "snekker", name: "Bakkejord Snekker", industry: t.examples.industries.carpenter, img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80" },
    { slug: "tannlege", name: "Tannlege Bakkejord", industry: t.examples.industries.dentist, img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80" },
    { slug: "kafe", name: "Bakkejord Kafé", industry: t.examples.industries.cafe, img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
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
            <a href="#hva-vi-gjor" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">{t.nav.whatWeDo}</a>
            <a href="#eksempler" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">{t.nav.examples}</a>
            <a href="#hvem-vi-er" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">{t.nav.whoWeAre}</a>
            <a href="#kontakt" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">{t.nav.contact}</a>
            <LanguageToggle />
            <a
              href="tel:+4748472586"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +47 484 72 586
            </a>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.nav.openMenu}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-slate-900 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-slate-900 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden glass border-t border-slate-200/40 px-6 py-4 flex flex-col gap-4">
            <a href="#hva-vi-gjor" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">{t.nav.whatWeDo}</a>
            <a href="#eksempler" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">{t.nav.examples}</a>
            <a href="#hvem-vi-er" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">{t.nav.whoWeAre}</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-700">{t.nav.contact}</a>
            <a href="tel:+4748472586" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold text-center">
              +47 484 72 586
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="main" className="relative pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-700">{t.hero.badge}</span>
            </div>

            <h1
              className="font-bold text-slate-900 mb-7 animate-fade-up"
              style={{
                fontSize: "clamp(2.75rem, 6vw, 5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                animationDelay: "0.08s",
              }}
            >
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>

            <p
              className="text-slate-600 max-w-2xl mb-8 animate-fade-up"
              style={{
                fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                lineHeight: 1.55,
                animationDelay: "0.16s",
              }}
            >
              {t.hero.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                {t.hero.primaryCta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#hva-vi-gjor"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Visuell støtte — abstrakt nettside-mockup */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-up" style={{ animationDelay: "0.32s" }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-200/40 via-cyan-200/30 to-purple-200/30 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 bg-white border border-slate-200 rounded text-[10px] px-2 py-1 text-slate-500 font-mono">
                    dinbedrift.no
                  </div>
                </div>
                {/* Mockup body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500" />
                    <div className="h-3 w-20 bg-slate-200 rounded" />
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="h-4 w-3/4 bg-slate-900 rounded" />
                    <div className="h-4 w-2/3 bg-slate-900 rounded" />
                    <div className="h-2 w-full bg-slate-200 rounded mt-3" />
                    <div className="h-2 w-5/6 bg-slate-200 rounded" />
                    <div className="h-2 w-4/6 bg-slate-200 rounded" />
                  </div>
                  <div className="flex gap-2 pt-3">
                    <div className="h-7 px-5 bg-slate-900 rounded-md flex items-center">
                      <div className="h-2 w-12 bg-white/40 rounded" />
                    </div>
                    <div className="h-7 px-5 border border-slate-200 rounded-md flex items-center">
                      <div className="h-2 w-10 bg-slate-300 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold rotate-3 shadow-lg">
                {t.hero.deliveredBadge}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — 3 steps to remove "what happens next" friction */}
      <section className="relative py-20 px-6 bg-slate-50/60 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-3">{t.process.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              {t.process.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.process.steps.map((s, i) => (
              <div key={s.step} className="relative bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                {i < t.process.steps.length - 1 && (
                  <svg className="hidden md:block absolute -right-3 top-10 text-slate-300 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="hva-vi-gjor" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              {t.what.title}
            </h2>
            <p className="text-lg text-slate-600">
              {t.what.body}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {/* Service 1 */}
            <article className="relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{t.what.availableNow}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.what.websiteTitle}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t.what.websiteBody}
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {t.what.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-900 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* AI banner — kompakt "kommer snart" */}
            <article className="relative bg-slate-900 rounded-2xl p-6 md:p-7 border border-slate-800 text-white overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-5">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-lg font-bold">{t.what.aiTitle}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">{t.what.aiSoon}</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      {t.what.aiBody}
                    </p>
                  </div>
                </div>
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
                {t.examples.title}
              </h2>
              <p className="text-lg text-slate-600">
                {t.examples.body}
              </p>
            </div>
            <a
              href="/eksempler"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              {t.examples.seeAll}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {examples.map((e) => (
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
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">{t.examples.seeExample}</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500 text-center mt-10">
            {t.examples.footnote}
          </p>
        </div>
      </section>

      {/* Who we are — narrative, not card */}
      <section id="hvem-vi-er" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold border-2 border-white shadow-sm">SB</div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-white flex items-center justify-center text-sm font-bold border-2 border-white shadow-sm">TB</div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 leading-tight">Sondre &amp; Tony Bakkejord</p>
                  <p className="text-xs text-slate-500">Far og sønn · Iveo</p>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                {t.who.title1}
                <br />
                {t.who.title2}
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>{t.who.p1}</p>
                <p>{t.who.p2}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <dl className="space-y-5 border-l border-slate-200 pl-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">{t.who.established}</dt>
                  <dd className="text-2xl font-bold text-slate-900">2026</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">{t.who.location}</dt>
                  <dd className="text-2xl font-bold text-slate-900">{t.who.locationValue}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">{t.who.deliveryTime}</dt>
                  <dd className="text-2xl font-bold text-slate-900">{t.who.deliveryValue}</dd>
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
                  {t.book.title1}
                  <br />
                  {t.book.title2}
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {t.book.body}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
                >
                  {t.book.sendForm}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a
                  href="tel:+4748472586"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {t.book.orCall}
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
              {t.contact.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {t.contact.body}
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
                  <p className="text-xs text-slate-500 font-medium">{t.contact.phone}</p>
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
                  <p className="text-xs text-slate-500 font-medium">{t.contact.email}</p>
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

      {/* Anmeldelser / Tilbakemelding */}
      <section id="tilbakemelding" className="relative py-24 px-6 bg-slate-50/60 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold mb-4">{t.feedback.eyebrow}</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-5"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.05 }}
            >
              {t.feedback.title1}
              <br />
              {t.feedback.title2}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t.feedback.body}
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t.feedback.anon}</span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-6 pb-28 md:pb-10 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <LogoFull size={28} />
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Iveo. {t.footer}
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href="#kontakt"
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-slate-900 text-white text-center py-3.5 rounded-full font-semibold shadow-2xl shadow-slate-900/30 flex items-center justify-center gap-2"
      >
        {t.mobileCta}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
