"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import Chatbot from "./Chatbot";
import ParticleHero from "./components/ParticleHero";
import { LogoFull } from "./Logo";
import { LanguageToggle } from "./lang";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen" style={{ background: "var(--background)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-7 py-3.5 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <LogoFull size={34} />
          </a>
          <div className="hidden md:flex items-center gap-7 text-[11px] tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>
            <a href="#om-oss" className="hover:text-[var(--accent)] transition-colors">OM OSS</a>
            <a href="#tjenester" className="hover:text-[var(--accent)] transition-colors">TJENESTER</a>
            <a href="#kontakt" className="hover:text-[var(--accent)] transition-colors">KONTAKT</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#kontakt"
              className="inline-flex text-[11px] tracking-[0.1em] px-3 py-1.5 rounded-full border transition-colors"
              style={{ color: "var(--accent)", borderColor: "var(--border-strong)" }}
            >
              BOOK
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
            <a href="#om-oss" onClick={() => setMenuOpen(false)}>OM OSS</a>
            <a href="#tjenester" onClick={() => setMenuOpen(false)}>TJENESTER</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)}>KONTAKT</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="px-3 py-1.5 rounded-full border self-start" style={{ color: "var(--accent)", borderColor: "var(--border-strong)" }}>
              BOOK
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
              LITEN NORSK FAMILIEBEDRIFT
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
              Nettsider som <em style={{ fontStyle: "italic", color: "var(--accent)" }}>lever</em>.
            </h1>
            <p
              className="mt-4 text-[13px] leading-[1.6] animate-fade-up"
              style={{ color: "var(--ink-soft)", maxWidth: "320px", animationDelay: "0.2s" }}
            >
              Skreddersøm for bedrifter. Du ser hva du får før du sier ja.
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
              Du får en <em style={{ fontStyle: "italic", color: "var(--accent)" }}>ferdig demo-nettside</em> før du kjøper noe som helst.
            </span>
          </div>
          <span className="hidden md:inline text-[10px] tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
            INGEN BINDING
          </span>
        </div>
      </section>

      {/* 01 Om oss */}
      <section id="om-oss" className="px-7 py-16 md:py-20 grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto">
        <div>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "rgba(106,217,229,0.85)" }}>01</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>OM OSS</div>
        </div>
        <div className="serif text-[22px] md:text-[26px] leading-[1.35]" style={{ color: "var(--ink)" }}>
          Vi er et ungt firma — Sondre og Tony Bakkejord. Vi bygger nettsider{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>skreddersydd</em>, ikke fra mal. Og du ser hva du får før du sier ja.
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
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>TJENESTER</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Strategi", body: "Vi finner ut hva som faktisk konverterer for din bransje." },
            { name: "Design", body: "Skreddersydd visuell identitet. Ingen maler, ingen tema." },
            { name: "Utvikling", body: "Rask, robust kode. SEO-klar fra dag én." },
            { name: "Lansering", body: "Vi tar oss av domene, hosting og overlevering." },
          ].map((s) => (
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
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>KONTAKT</div>
          <div className="mt-8 space-y-3 text-[13px]" style={{ color: "var(--ink-soft)" }}>
            <a href="tel:+4748472586" className="block hover:text-[var(--accent)] transition-colors">+47 484 72 586</a>
            <a href="mailto:sondrebakkejord@gmail.com" className="block hover:text-[var(--accent)] transition-colors break-all">sondrebakkejord@gmail.com</a>
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
        <span>© IVEO {new Date().getFullYear()}</span>
        <span>SONDREBAKKEJORD@GMAIL.COM</span>
      </footer>

      <Chatbot />
    </div>
  );
}
