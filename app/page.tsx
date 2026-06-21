"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import Chatbot from "./Chatbot";
import GlassSiteHero from "./components/GlassSiteHero";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";
import { LogoFull } from "./Logo";
import { LanguageToggle, useT } from "./lang";

const PHONE_HUMAN = "+47 484 72 586";
const PHONE_TEL = "+4748472586";
const EMAIL = "sondrebakkejord@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang } = useT();
  const no = lang === "no";

  return (
    <div className="relative min-h-screen" style={{ background: "var(--background)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-7 py-3.5 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <LogoFull size={34} />
          </a>
          <div className="hidden md:flex items-center gap-7 text-[11px] tracking-[0.15em]" style={{ color: "var(--ink-soft)" }}>
            <a href="#handverk" className="hover:text-[var(--accent)] transition-colors">{no ? "HÅNDVERK" : "CRAFT"}</a>
            <a href="#om-oss" className="hover:text-[var(--accent)] transition-colors">{no ? "OM OSS" : "ABOUT"}</a>
            <a href="#tjenester" className="hover:text-[var(--accent)] transition-colors">{no ? "TJENESTER" : "SERVICES"}</a>
            <a href="#kontakt" className="hover:text-[var(--accent)] transition-colors">{no ? "KONTAKT" : "CONTACT"}</a>
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
            <button className="p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meny" aria-expanded={menuOpen}>
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
            <a href="#handverk" onClick={() => setMenuOpen(false)}>{no ? "HÅNDVERK" : "CRAFT"}</a>
            <a href="#om-oss" onClick={() => setMenuOpen(false)}>{no ? "OM OSS" : "ABOUT"}</a>
            <a href="#tjenester" onClick={() => setMenuOpen(false)}>{no ? "TJENESTER" : "SERVICES"}</a>
            <a href="#kontakt" onClick={() => setMenuOpen(false)}>{no ? "KONTAKT" : "CONTACT"}</a>
            <a href={`tel:${PHONE_TEL}`} onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full self-start font-medium text-[12px] tracking-[0.05em]" style={{ background: "var(--accent)", color: "var(--background)" }}>
              {PHONE_HUMAN}
            </a>
          </div>
        )}
      </nav>

      {/* ===================== HERO — cinematic, full height ===================== */}
      <section className="relative" style={{ minHeight: "100svh" }}>
        <div className="absolute inset-0 overflow-hidden">
          <GlassSiteHero />
        </div>
        {/* fade to bg at the bottom so the scene melts into the page */}
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
             style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }} />

        <div className="relative max-w-6xl mx-auto px-7 flex flex-col justify-center" style={{ minHeight: "100svh" }}>
          <Parallax speed={0.12} className="pointer-events-none">
            <div className="text-[11px] tracking-[0.25em] mb-4 animate-fade-up" style={{ color: "var(--accent)" }}>
              {no ? "LITEN NORSK FAMILIEBEDRIFT" : "SMALL NORWEGIAN FAMILY BUSINESS"}
            </div>
            <h1 className="serif animate-fade-up" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", lineHeight: 0.98, maxWidth: "12ch", color: "var(--ink)", animationDelay: "0.1s" }}>
              {no ? (<>Nettsider som <em style={{ fontStyle: "italic", color: "var(--accent)" }}>lever</em>.</>)
                  : (<>Websites that <em style={{ fontStyle: "italic", color: "var(--accent)" }}>live</em>.</>)}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.65] animate-fade-up" style={{ color: "var(--ink-soft)", maxWidth: "46ch", animationDelay: "0.2s" }}>
              {no ? "Skreddersøm for bedrifter. Du ser hva du får før du sier ja."
                  : "Custom-built for businesses. You see what you get before you commit."}
            </p>
          </Parallax>

          {/* scroll cue */}
          <div className="absolute left-7 bottom-8 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <span className="scroll-dot" aria-hidden="true" />
            <span className="text-[10px] tracking-[0.25em]" style={{ color: "var(--ink-mute)" }}>
              {no ? "RULL" : "SCROLL"}
            </span>
          </div>
        </div>
      </section>

      {/* Demo-løfte band */}
      <Reveal as="div" className="px-7 py-6 border-t border-b flex items-center justify-between gap-6"
              style={{ background: "var(--accent-soft)", borderColor: "var(--border-strong)" }}>
        <div className="flex items-center gap-4">
          <span className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>→</span>
          <span className="serif text-[16px] md:text-[19px]" style={{ color: "var(--ink)" }}>
            {no ? (<>Du får en <em style={{ fontStyle: "italic", color: "var(--accent)" }}>ferdig demo-nettside</em> før du kjøper noe som helst.</>)
                : (<>You get a <em style={{ fontStyle: "italic", color: "var(--accent)" }}>finished demo site</em> before you buy anything.</>)}
          </span>
        </div>
        <span className="hidden md:inline text-[12px]" style={{ color: "var(--ink-soft)", fontStyle: "italic", fontFamily: "var(--font-serif)" }}>
          {no ? "Ingen binding." : "No commitment."}
        </span>
      </Reveal>

      {/* ===================== STATEMENT scene ===================== */}
      <section className="relative overflow-hidden px-7 py-28 md:py-40">
        <Parallax speed={0.25} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full"
               style={{ background: "radial-gradient(circle, rgba(106,217,229,0.10), transparent 65%)" }} />
        </Parallax>
        <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 1 }}>
          <Reveal>
            <p className="serif text-[26px] md:text-[40px] leading-[1.25]" style={{ color: "var(--ink)" }}>
              {no ? (<>De fleste nettsider <em style={{ color: "var(--accent)" }}>forteller</em>. De beste <em style={{ color: "var(--accent)" }}>får deg til å føle noe</em>.</>)
                  : (<>Most websites <em style={{ color: "var(--accent)" }}>tell</em>. The best ones <em style={{ color: "var(--accent)" }}>make you feel something</em>.</>)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-[14px] leading-[1.7] mx-auto" style={{ color: "var(--ink-soft)", maxWidth: "52ch" }}>
              {no ? "Det er forskjellen mellom en mal og noe som er bygget for akkurat din bedrift."
                  : "That's the difference between a template and something built for your business alone."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== THE CRAFT — storytelling beats ===================== */}
      <section id="handverk" className="relative overflow-hidden px-7 py-20 md:py-28 border-t" style={{ borderColor: "var(--border)" }}>
        <Parallax speed={-0.12} className="absolute -right-32 top-10 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="w-[420px] h-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(106,217,229,0.08), transparent 65%)" }} />
        </Parallax>

        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 1 }}>
          <Reveal>
            <div className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>{no ? "HÅNDVERKET" : "THE CRAFT"}</div>
            <h2 className="serif mt-3 text-[28px] md:text-[40px] leading-[1.05]" style={{ color: "var(--ink)", maxWidth: "16ch" }}>
              {no ? (<>Detaljene som får en side til å <em style={{ color: "var(--accent)" }}>føles dyr</em>.</>)
                  : (<>The details that make a site <em style={{ color: "var(--accent)" }}>feel expensive</em>.</>)}
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {(no ? [
              { n: "01", t: "Storytelling", b: "Siden utfolder seg mens du scroller — ikke alt på én gang. Hvert avsnitt får sitt øyeblikk." },
              { n: "02", t: "Dybde & parallax", b: "Lag beveger seg i ulik takt, så siden føles tredimensjonal i stedet for flat." },
              { n: "03", t: "Bevegelse & 3D", b: "Sanntidsgrafikk bygd i nettleseren, ikke pakkebilder. Det du ser her er kode." },
              { n: "04", t: "Besatt av detaljer", b: "Skrift, luft og timing finjustert til det sitter. Det er det som skiller proff fra mal." },
            ] : [
              { n: "01", t: "Storytelling", b: "The page unfolds as you scroll — not all at once. Every section gets its moment." },
              { n: "02", t: "Depth & parallax", b: "Layers move at different speeds, so the page feels three-dimensional, not flat." },
              { n: "03", t: "Motion & 3D", b: "Real-time graphics built in the browser, not stock images. What you see here is code." },
              { n: "04", t: "Obsessive detail", b: "Type, spacing and timing tuned until it feels right. That's what separates crafted from template." },
            ]).map((item, i) => (
              <Reveal key={item.n} delay={i * 90}>
                <div className="flex gap-5">
                  <div className="serif text-[20px] pt-1" style={{ color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{item.n}</div>
                  <div>
                    <div className="serif text-[22px] md:text-[24px]" style={{ color: "var(--ink)" }}>{item.t}</div>
                    <p className="mt-2 text-[13.5px] leading-[1.65]" style={{ color: "var(--ink-soft)", maxWidth: "42ch" }}>{item.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 01 OM OSS ===================== */}
      <section id="om-oss" className="px-7 py-20 md:py-28 grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto border-t" style={{ borderColor: "var(--border)" }}>
        <Reveal>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>01</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{no ? "OM OSS" : "ABOUT"}</div>
        </Reveal>
        <div>
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-2">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold border-2" style={{ background: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--background)" }}>SB</div>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold border-2" style={{ background: "var(--surface-2)", color: "var(--accent)", borderColor: "var(--background)" }}>TB</div>
              </div>
              <div>
                <div className="text-[13px] font-medium" style={{ color: "var(--ink)" }}>Sondre &amp; Tony Bakkejord</div>
                <div className="text-[11px]" style={{ color: "var(--ink-mute)" }}>{no ? "Grunnleggere · Iveo" : "Founders · Iveo"}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="serif text-[19px] md:text-[22px] leading-[1.4] mb-4" style={{ color: "var(--ink)" }}>{t.who.p1}</div>
            <p className="text-[14px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>{t.who.p2}</p>
          </Reveal>
          <Reveal delay={160}>
            <dl className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <div>
                <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.established}</dt>
                <dd className="serif text-[22px]" style={{ color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>2026</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.location}</dt>
                <dd className="serif text-[22px]" style={{ color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{t.who.locationValue}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.2em] mb-1" style={{ color: "var(--ink-mute)" }}>{t.who.deliveryTime}</dt>
                <dd className="serif text-[22px]" style={{ color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>{t.who.deliveryValue}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ===================== 02 TJENESTER ===================== */}
      <section id="tjenester" className="px-7 py-20 md:py-28 grid md:grid-cols-[1fr_2fr] gap-10 max-w-6xl mx-auto border-t" style={{ borderColor: "var(--border)" }}>
        <Reveal>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>02</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{no ? "TJENESTER" : "SERVICES"}</div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {(no ? [
            { name: "Strategi", body: "Vi finner ut hva siden faktisk skal gjøre for deg." },
            { name: "Design", body: "Skreddersydd visuell identitet. Ingen maler, ingen tema." },
            { name: "Utvikling", body: "Rask, robust kode. Bygd så Google finner deg." },
            { name: "Lansering", body: "Vi tar oss av domene, hosting og overlevering." },
          ] : [
            { name: "Strategy", body: "We figure out what the site should actually do for you." },
            { name: "Design", body: "Custom visual identity. No templates, no themes." },
            { name: "Development", body: "Fast, robust code. Built so Google finds you." },
            { name: "Launch", body: "We handle domain, hosting, and delivery." },
          ]).map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div className="serif text-[22px]" style={{ color: "var(--ink)" }}>{s.name}</div>
              <p className="text-[12.5px] leading-[1.6] mt-2" style={{ color: "var(--ink-soft)" }}>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== KONTAKT ===================== */}
      <section id="kontakt" className="px-7 py-20 md:py-28 max-w-6xl mx-auto border-t grid md:grid-cols-[1fr_2fr] gap-10" style={{ borderColor: "var(--border)" }}>
        <Reveal>
          <div className="text-[11px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>03</div>
          <div className="text-[11px] tracking-[0.2em] mt-2" style={{ color: "var(--ink-mute)" }}>{no ? "KONTAKT" : "CONTACT"}</div>
          <p className="mt-6 text-[14px] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>{t.contact.body}</p>
          <div className="mt-6 space-y-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 rounded-xl p-3.5 border transition-colors hover:border-[var(--border-strong)]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
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
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-xl p-3.5 border transition-colors hover:border-[var(--border-strong)]" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
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
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="px-7 py-7 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-[12px]" style={{ borderColor: "var(--border)", color: "var(--ink-soft)" }}>
        <span>© Iveo {new Date().getFullYear()} — {no ? "Norge" : "Norway"}</span>
        <span>{EMAIL} · {PHONE_HUMAN}</span>
      </footer>

      {/* Mobile sticky CTA */}
      <a href={`tel:${PHONE_TEL}`} className="md:hidden fixed bottom-4 left-4 right-4 z-40 text-center py-3.5 rounded-full font-semibold shadow-2xl flex items-center justify-center gap-2 text-[13px]" style={{ background: "var(--accent)", color: "var(--background)" }}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {PHONE_HUMAN}
      </a>

      <Chatbot />
    </div>
  );
}
