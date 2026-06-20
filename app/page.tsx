"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import Chatbot from "./Chatbot";
import ParticleHero from "./components/ParticleHero";
import { LogoFull } from "./Logo";
import { LanguageToggle, useT } from "./lang";

const PHONE_HUMAN = "+47 484 72 586";
const PHONE_TEL = "+4748472586";
const EMAIL = "sondrebakkejord@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang } = useT();

  return (
    <div className="relative min-h-screen" style={{ background: "var(--background)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-7 py-3.5 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <LogoFull size={34} />
          </a>
          <div className="hidden md:flex items-center gap-7 text-[11px] tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>
            <a href="#om-oss" className="hover:text-[var(--accent)] transition-colors">{lang === "no" ? "OM OSS" : "ABOUT"}</a>
            <a href="#tjenester" className="hover:text-[var(--accent)] transition-colors">{lang === "no" ? "TJENESTER" : "SERVICES"}</a>
            <a href="#kontakt" className="hover:text-[var(--accent)] transition-colors">{lang === "no" ? "KONTAKT" : "CONTACT"}</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.05em] font-medium px-3.5 py-1.5 rounded-full transition-colors"
              style={{ background: "var(--accent)", color: "var(--background)" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_HUMAN}
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meny"
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
                <span className={`h-0.5 w-full transition-opacity ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--ink)" }} />
                <span className={`h-0.5 w-full transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden glass-dark border-t px-7 py-5 flex flex-col gap-4 text-[12px] tracking-[0.15em]" style={{ borderColor: "var(--border)", color: "var(--ink-soft)" }}>
            <a href="#om-oss" onClick={() => setMenuOpen(false)}>{lang === "no" ? "OM OSS" : "ABOUT"}</a>
            <a href="#tjenester" onClick={() => setMenuOpen(false)}>{lang === "no" ? "TJENESTER" : "SERVICES"}</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)}>{lang === "no" ? "KONTAKT" : "CONTACT"}</a>
            <a href={`tel:${PHONE_TEL}`} onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full self-start font-medium text-[12px] tracking-[0.05em]" style={{ background: "var(--accent)", color: "var(--background)" }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_HUMAN}
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-[560px] overflow-hidden">
          <ParticleHero />
          <div className="absolute left-7 top-[110px] right-7 pointer-events-none">
            <div className="text-[11px] tracking-[0.25em] mb-4 animate-fade-up" style={{ color: "rgba(106,217,229,0.85)" }}>
              {lang === "no" ? "LITEN NORSK FAMILIEBEDRIFT" : "SMALL NORWEGIAN FAMILY BUSINESS"}
            </div>
            <h1
              className="serif animate-fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 3.6rem)",
                lineHeight: 1,
                maxWidth: "440px",
                color: "var(--ink)",
                animationDelay: "0.1s",
              }}
            >
              {lang === "no" ? (
                <>Nettsider som <em style={{ fontStyle: "italic", color: "var(--accent)" }}>lever</em>.</>
              ) : (
                <>Websites that <em style={{ fontStyle: "italic", color: "var(--accent)" }}>live</em>.</>
              )}
            </h1>
            <p
              className="mt-4 text-[13px] leading-[1.6] animate-fade-up"
              style={{ color: "var(--ink-soft)", maxWidth: "320px", animationDelay: "0.2s" }}
            >
              {lang === "no"
                ? "Skreddersøm for bedrifter. Du ser hva du får før du sier ja."
                : "Custom-built for businesses. You see what you get before you commit."}
            </p>
          </div>
        </div>

        {/* Demo-løfte band */}
        <div
          className="px-7 py-6 border-t border-b flex items-center justify-between gap-6"
          style={{
            background: "var(--accent-soft)",
            borderColor: "var(--border-strong)",
          }}
        >
          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>→</span>
            <span className="serif text-[16px] md:text-[19px]" style={{ color: "var(--ink)" }}>
              {lang === "no" ? (
                <>Du får en <em style={{ fontStyle: "italic", color: "var(--accent)" }}>ferdig demo-nettside</em> før du kjøper noe som helst.</>
              ) : (
                <>You get a <em style={{ fontStyle: "italic", color: "var(--accent)" }}>finished demo site</em> before you buy anything.</>
              )}
            </span>
          </div>
          <span className="hidden md:inline text-[10px] tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            {lang === "no" ? "INGEN BINDING" : "NO COMMITMENT"}
          </span>
        </div>
      </section>

      {/* 01 Om oss */}
      <section id="om-oss" className="px-7 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto">
        <div>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "rgba(106,217,229,0.85)" }}>01</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{lang === "no" ? "OM OSS" : "ABOUT"}</div>
        </div>
        <div>
          {/* Founders row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-2">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold border-2"
                   style={{ background: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--background)" }}>SB</div>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold border-2"
                   style={{ background: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--background)" }}>TB</div>
            </div>
            <div>
              <div className="text-[13px] font-medium" style={{ color: "var(--ink)" }}>Sondre &amp; Tony Bakkejord</div>
              <div className="text-[11px]" style={{ color: "var(--ink-mute)" }}>
                {lang === "no" ? "Grunnleggere · Iveo" : "Founders · Iveo"}
              </div>
            </div>
          </div>

          <div className="serif text-[19px] md:text-[22px] leading-[1.4] mb-4" style={{ color: "var(--ink)" }}>
            {t.who.p1}
          </div>
          <p className="text-[14px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
            {t.who.p2}
          </p>

          {/* Stats row */}
          <dl className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <div>
              <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.established}</dt>
              <dd className="serif text-[22px]" style={{ color: "var(--ink)" }}>2026</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.location}</dt>
              <dd className="serif text-[22px]" style={{ color: "var(--ink)" }}>{t.who.locationValue}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.deliveryTime}</dt>
              <dd className="serif text-[22px]" style={{ color: "var(--ink)" }}>{t.who.deliveryValue}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 02 Tjenester */}
      <section
        id="tjenester"
        className="px-7 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "rgba(106,217,229,0.85)" }}>02</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{lang === "no" ? "TJENESTER" : "SERVICES"}</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {(lang === "no" ? [
            { name: "Strategi", body: "Vi finner ut hva som faktisk konverterer for din bransje." },
            { name: "Design", body: "Skreddersydd visuell identitet. Ingen maler, ingen tema." },
            { name: "Utvikling", body: "Rask, robust kode. SEO-klar fra dag én." },
            { name: "Lansering", body: "Vi tar oss av domene, hosting og overlevering." },
          ] : [
            { name: "Strategy", body: "We figure out what actually converts for your industry." },
            { name: "Design", body: "Custom visual identity. No templates, no themes." },
            { name: "Development", body: "Fast, robust code. SEO-ready from day one." },
            { name: "Launch", body: "We handle domain, hosting, and delivery." },
          ]).map((s) => (
            <div key={s.name}>
              <div className="serif text-[22px]" style={{ color: "var(--ink)" }}>{s.name}</div>
              <p className="text-[12.5px] leading-[1.6] mt-2" style={{ color: "var(--ink-soft)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="px-7 py-16 md:py-20 max-w-6xl mx-auto border-t grid md:grid-cols-[1fr_2fr] gap-10"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "rgba(106,217,229,0.85)" }}>03</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{lang === "no" ? "KONTAKT" : "CONTACT"}</div>

          <p className="mt-6 text-[14px] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>
            {t.contact.body}
          </p>

          <div className="mt-6 space-y-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 rounded-xl p-3.5 border transition-colors hover:border-[var(--border-strong)]"
               style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.2em]" style={{ color: "var(--ink-mute)" }}>{t.contact.phone.toUpperCase()}</div>
                <div className="font-medium text-[14px]" style={{ color: "var(--ink)" }}>{PHONE_HUMAN}</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-xl p-3.5 border transition-colors hover:border-[var(--border-strong)]"
               style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] tracking-[0.2em]" style={{ color: "var(--ink-mute)" }}>{t.contact.email.toUpperCase()}</div>
                <div className="font-medium text-[13px] break-all" style={{ color: "var(--ink)" }}>{EMAIL}</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-7 py-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.2em]"
        style={{ borderColor: "var(--border)", color: "var(--ink-mute)" }}
      >
        <span>© IVEO {new Date().getFullYear()} — {lang === "no" ? "NORGE" : "NORWAY"}</span>
        <span>{EMAIL.toUpperCase()} · {PHONE_HUMAN}</span>
      </footer>

      {/* Mobile sticky CTA */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 text-center py-3.5 rounded-full font-semibold shadow-2xl flex items-center justify-center gap-2 text-[13px]"
        style={{ background: "var(--accent)", color: "var(--background)" }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {PHONE_HUMAN}
      </a>

      <Chatbot />
    </div>
  );
}
