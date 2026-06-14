# Iveo Handover — Komplett kontekst

> **Les denne filen først.** Den inneholder alt en ny Claude-sesjon trenger for å jobbe videre uten å lære opp på nytt.

---

## 👤 Hvem brukeren er

- **Navn:** Sondre Bakkejord
- **Bedrift:** Iveo (liten familiebedrift — Sondre + pappa Tony)
- **Pappa:** Tony Bakkejord
- **Bor i:** Bodø-området (adresse Prestmarkveien 162, 8073 Bodø)
- **GitHub:** [@sondrebakkejord-cell](https://github.com/sondrebakkejord-cell)
- **E-post:** sondrebakkejord@gmail.com (skal til kontakt@iveo.no senere)
- **Telefon:** +47 484 72 586

---

## 🏢 Iveo — Bedriftens kjerne

### Tilbud
1. **Nettsider + hosting** (samlet pakke) — live
2. **AI-løsninger** (chatbots, AI-resepsjonist, automatisering) — kommer

### Posisjonering
- **Verdiøkning, IKKE billig** — vi nevner ikke pris i hero
- Liten familiebedrift (Sondre + Tony Bakkejord) — personlig service
- Levert på 1 uke
- Ingen byrå-tull, ingen mellommenn

### Forretningsmodell
- **Mockup-first**: Bygg mockup → send til kunde → de sier ja → bygg ferdig
- **Hybrid hosting**: Kunden eier domenet, Iveo hoster
- **Recurring revenue**: 99 kr/mnd hosting + smårettelser

### Prisstrategi (faser)
| Fase | Kunder | Engangs | Hosting |
|------|--------|---------|---------|
| 1 (mnd 1-2) | 0-3 | 1 990 kr | 99 kr/mnd (gratis 6 mnd) |
| 2 (mnd 3-6) | 4-8 | 3 990-5 900 kr | 149 kr/mnd |
| 3 (mnd 6+) | 9+ | 5 900-9 900 kr | 199 kr/mnd |

Aldri lov fast pris uten å se prosjektet. **Pris diskuteres etter mockup**.

---

## 🌐 Tekniske eiendeler

### Iveo-nettsiden
- **GitHub:** `sondrebakkejord-cell/Iveo` (også fungerer fra `sondrebakkejord-cell/iveo`)
- **Vercel-prosjekt:** `iveo` (linket til GitHub, auto-deploy aktivert)
- **Live URL:** `iveo-nine.vercel.app`
- **Domene:** `iveo.no` (Domeneshop, Vercel-nameservere satt)
- **Lokal mappe:** `/Users/sondrebakkejord/Documents/test-nettside/`

### Byfrisør'n Vesterålen (mockup for cold outreach)
- **GitHub:** `sondrebakkejord-cell/byfrisorn-vesteralen`
- **Vercel:** Deployes via CLI — bør kobles til GitHub for auto-deploy
- **Lokal mappe:** `/Users/sondrebakkejord/Documents/byfrisorn-vesteralen/`
- **Status:** Live på Vercel CLI-URL. **Trenger Vercel→GitHub-kobling for å auto-deploye nye endringer.**

### Miljøvariabler (Vercel — Iveo-prosjektet)
```
ANTHROPIC_API_KEY=sk-ant-...    (for chatbot)
RESEND_API_KEY=re_...            (for skjema-e-poster)
NOTIFY_EMAIL=sondrebakkejord@gmail.com
```

### Tekniske detaljer
- **Stack:** Next.js 16, React, TypeScript, Tailwind CSS v4
- **Hosting:** Vercel (gratis Hobby-plan)
- **Analytics:** @vercel/analytics + @vercel/speed-insights
- **E-post:** Resend (via `onboarding@resend.dev` til kontakt@iveo.no kjøpes)
- **Chatbot:** Claude Haiku 4.5 + Resend lead-varsling

---

## 🎨 Nettsiden — struktur (`app/page.tsx`)

Seksjoner i rekkefølge:
1. **Nav** (sticky, glass) — Hva vi gjør, Eksempler, Hvem vi er, Kontakt + Ring-knapp
2. **Hero** — "Nettsider som faktisk jobber for deg" + visuell mockup
3. **Slik kan vi hjelpe deg** — 1 stort kort (Nettsider+Hosting) + 1 banner (AI-løsninger Snart)
4. **Eksempler** — 6 mini-kort som linker til /eksempler/[bransje]
5. **Hvem vi er** — "Bakkejord & Bakkejord" (kort, faktuell)
6. **Book CTA** — "Få en gratis mockup" → scroller til skjema
7. **Kontakt** — ContactForm med spam-protection + telefon/e-post-kort
8. **Anmeldelser** — ReviewForm med stjerner
9. **Footer** + Sticky mobile CTA

### 6 eksempel-nettsider (`app/eksempler/[bransje]/page.tsx`)
- `/pizza` — Bakkejord Pizza (italiensk restaurant, varm)
- `/ror` — Bakkejord Rør (rørlegger, blå/gul, Bear's Plumbing-inspirert)
- `/snekker` — Bakkejord Snekker (mørk tre-stemning, materiale-guide)
- `/tannlege` — Tannlege Bakkejord (teal, profesjonell, symptom-finner)
- `/kafe` — Bakkejord Kafé (rosa Cormorant, lokale leverandører)
- `/frisor` — Bakkejord Hair Studio (krem/sort, Escape-inspirert, premium)

Alle har samme grunnstruktur men ulike fargevalg + bransje-spesifikt innhold.

### Andre filer
- `app/Chatbot.tsx` — Chatbot UI (ikke aktiv på hovedsiden, men kode finnes)
- `app/ContactForm.tsx` — kontakt-skjema med "gratis mockup"-løfte
- `app/ReviewForm.tsx` — anmeldelses-skjema med stjerner
- `app/api/chat/route.ts` — Claude API + Resend
- `app/api/contact/route.ts` — Resend for kontakt-skjema
- `app/api/review/route.ts` — Resend for anmeldelser
- `app/Logo.tsx` — Iveo-logo (orbit-design + pil opp)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`
- `public/llms.txt` — for AI-crawlere (GPTBot, ClaudeBot, Perplexity)

---

## ✍️ Tone og innhold — KRITISKE PREFERANSER

Brukeren er **veldig sensitiv på klisjeer og overselling**. Følg disse strengt:

### ❌ Aldri bruk
- "Vi liker å bygge ting som funker"
- "Vi er passionerte/lidenskapelige"
- "Rundt kjøkkenbordet"
- "Én kunde av gangen"
- "Vi tar oss tid"
- "99,9 % oppetid"
- "Bygget med Claude/Next.js/TikTok/Netflix-stack" (synlig på siden)
- "Verdens beste...", "transformerende...", "synergi..."
- "Vi skriver koden. Vi tar telefonen. Det er det."
- Em-dash i copy (`—` er OK; `--` ikke)
- Marketing-buzzwords ("leverage", "empower", "supercharge")

### ✅ Bruk
- Direkte, faktuell norsk
- Korte setninger
- Konkrete tall (1 uke, ikke "rask")
- "Sondre og Tony" eller "Bakkejord & Bakkejord"
- "Liten familiebedrift" (IKKE "far-og-sønn-team" lenger — endret juni 2026)
- Ikke nevne roller hvem-gjør-hva
- Eksempler er **EKSEMPLER**, ikke ekte kunder

### Hero-overskrift (ikke endre uten å spørre)
> "Nettsider som faktisk jobber for deg."

### "Hvem vi er" — gjeldende tekst
> Bakkejord & Bakkejord.
>
> Iveo er en liten familiebedrift drevet av Sondre og Tony Bakkejord. Vi har gått sammen om å bygge et selskap som lager nettsider folk faktisk liker å bruke.
>
> Vi tar oss av hele veien — fra første idé til ferdig nettside, med drift og support i etterkant. Snart kommer også egne AI-løsninger.

---

## 🛠 Installerte Skills (`.agents/skills/`)

627+ skills tilgjengelig. **Bruk dem aktivt** — tenk "hvilken skill passer her" før hver oppgave.

### Design
- **impeccable** ⭐ — Hovedskill. Anti-AI-slop. Kjør `detect.mjs` etter design-endringer.
- **ui-ux-pro-max** — 161 fargepaletter, designsystem-generator
- **design-taste-frontend** — Layout/typografi/spacing
- **brandkit, ckm-brand** — Brand-identitet
- **high-end-visual-design, minimalist-ui** — Stil-spesifikke
- **image-to-code, redesign-existing-projects**

### Markedsføring & Copy
- **copywriting** ⭐ — Bruk for tekst-endringer
- **copy-editing** — Polish eksisterende
- **marketing-psychology** ⭐ — Klisjé-deteksjon
- **cro** — Conversion rate optimization
- **emails** — E-postsekvenser
- **marketing-ideas, marketing-plan, content-strategy**

### SEO (`claude-seo`)
- **seo-technical** ⭐ — Tekniske sjekker
- **seo-schema** — JSON-LD
- **seo-sxo** — Search Experience Optimization
- **seo-local** — Lokal SEO
- **seo-geo** — AI-søk optimalisering

### Sales (`sales-skills/sales`)
- **prospecting** ⭐ — Lead-generering metodikk (4 kategorier: no-site/social-only/weak/has-site)
- **cold-email, cold-email-sequence-generator**
- **customer-research, icp-deep-scanner**
- **inbound-lead-qualifier, lead-scoring-model**
- **prospect-research-compiler**
- 100+ sales-* integrasjoner

### OneWave AI (172 skills)
- **lead-magnets, lead-scoring-model**
- **workflow-automator**
- **weekly-business-report**

### Bruk skills ved å:
1. Vurdere hvilken skill som passer oppgaven
2. Lese `SKILL.md` for instruksjoner
3. Følge skill-spesifikke skript (f.eks. `impeccable/scripts/detect.mjs`)

### 📋 Komplett oversikt over alle 791 skills

Se **`SKILLS.md`** i samme mappe (`/Users/sondrebakkejord/Documents/test-nettside/SKILLS.md`).

Filen lister hver eneste installerte skill, sortert etter kategori. Når du er usikker på om en spesifikk skill finnes, sjekk SKILLS.md først.

**Snarvei for å sjekke en spesifikk skill:**
```bash
ls /Users/sondrebakkejord/Documents/test-nettside/.agents/skills/[skill-navn]
cat /Users/sondrebakkejord/Documents/test-nettside/.agents/skills/[skill-navn]/SKILL.md
```

---

## 🔍 Lead-generering — Den vi har funnet ut

### Hva som FUNGERER
1. **WebSearch** for å finne bedrifter ("frisør Sortland", "tannlege Bodø")
2. **WebSearch igjen** per bedrift for å verifisere om de har nettside
3. **WebFetch** på bedriftens nettside for å auditere kvalitet
4. **tools/sjekk-nettside.sh** for rask audit (score 1-10)

### Hva som IKKE fungerer
- **Brønnøysund-registret** for nettside-status — 90 % falske positiver. **Ikke bruk**.

### Kategorisering (fra `prospecting`-skill)
| Status | Hva | Lead-styrke |
|--------|-----|-------------|
| No site found | Ingen nettside funnet | ⭐⭐⭐ Perfekt |
| Social only | Kun Facebook/Instagram/Timma/Fixit | ⭐⭐⭐ Perfekt |
| Weak site | Datert/WordPress fra 2015 | ⭐⭐ Varmt |
| Has site | Moderne nettside | ❌ Ikke prospect |

### Beste bransjer (basert på research)
- **Frisører** — mange uten egen side, "Social only" vanlig
- **Snekkere** (mindre byer) — ofte Wordpress.com fra 2013
- **Rørleggere** (lokale) — WordPress 2015-stil
- **Skjønnhetssalonger** — kun Facebook/Instagram

### Mindre byer = bedre prospects
Sortland: 4 av 5 verifiserte frisører hadde ingen nettside. Bodø: 50/50.

---

## 📊 Tools (`/tools/`)

- **`sjekk-nettside.sh`** — Audit en URL (HTTPS, mobile, tech, score 1-10)
  ```bash
  ./tools/sjekk-nettside.sh nuayfrisor.no
  ```

(Tidligere Brønnøysund-verktøy slettet — upålitelig data.)

---

## 📧 Salgs-prosess

### Cold outreach mal (verifisert)
```
Hei [Navn]!
Jeg heter Sondre, og pappa og jeg har et lite firma 
(iveo.no). Jeg så at dere ikke har egen nettside.

Lagde en mockup av hvordan det kunne sett ut — gratis 
å se på, ingen forpliktelse: [link til mockup]

Hvis du liker det, gjør vi det for [pris]. Hvis ikke 
— ha en flott uke!

Mvh Sondre  
+47 484 72 586
```

### Mockup-tips
- Kopier en `/eksempler/[bransje]/`-mal og bytt info
- Bruk **ekte info** om bedriften (lærte fra Byfrisør'n: Monica & Siri Iversen, Kevin Murphy-produkter)
- Deploy som separat Vercel-prosjekt med eget GitHub-repo

---

## 🎯 Eksempel-nettside lagd (Byfrisør'n)

**Konkret eksempel på cold outreach-mockup:**
- Repo: `sondrebakkejord-cell/byfrisorn-vesteralen`
- Bygget: 2026-06-12
- Bransje: Frisør
- Stil: Premium krem/sort (Escape-inspirert)
- Ekte data brukt: Monica & Siri Iversen, Kevin Murphy/Moroccanoil/ghd, Strandgata 33

---

## 🔒 Token-policy

- **Brukeren liker ikke å ha GitHub-tokens i chatten lenge**
- Krev nye tokens med **7-dagers utløp** for git-pushes
- Be brukeren slette tokens etter bruk
- Forklar at jeg kan redigere LOKALT uten token, men ikke pushe

---

## 🚧 Aktive saker / Open loops

1. **Byfrisør'n Vercel ↔ GitHub-kobling** — Brukeren må koble Vercel-prosjektet til GitHub-repoet for auto-deploy. Kjørt `vercel --prod` for å re-deploye manuelt etter siste endring.

2. **iveo.no DNS-propagering** — Vercel nameservers satt på Domeneshop. Vent på Norid-delegering + DNS-spredning.

3. **Når iveo.no virker:** Oppdater `BASE_URL` i `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`, `public/llms.txt`, `app/api/chat/route.ts` fra `iveo-nine.vercel.app` til `iveo.no`.

4. **kontakt@iveo.no** — Ikke satt opp ennå. Kjøpes via Google Workspace (~80 kr/mnd) eller Domeneshop e-post (~50 kr/mnd) når brukeren bestemmer seg.

5. **Første ekte kunde** — Aktivt jobbet med leads. Sortland frisører er topp prioritet (8 sterke leads identifisert).

---

## 📚 Andre nyttige dokumenter

- `PRISER.md` — Detaljert prisstrategi
- `PRODUCT.md` — Iveo som brand (Impeccable-format)
- `DESIGN.md` — Design-system

---

## 🎬 Workflow-tips for ny sesjon

1. **Les denne filen FØRST**, så `PRODUCT.md` og `DESIGN.md`
2. **Tenk skills først** — hvilken skill matcher oppgaven? Bruk den.
3. **Kjør impeccable detect** etter design-endringer:
   ```bash
   node .agents/skills/impeccable/scripts/detect.mjs --json app/page.tsx
   ```
4. **Bekreft hver endring** før push — brukeren liker små iterasjoner
5. **Vær ærlig** om hva du kan og ikke kan (token, deploy, etc.)
6. **Følg klisjé-reglene** strengt — det er det største faldgrop

---

## 🧠 Personlige preferanser brukeren har vist

- Kort, direkte språk på norsk
- Lavt salgs-trykk (ingen "kjøp nå!")
- Faktuell ærlighet > hype
- Eksempler skal være eksempler (ikke late som ekte kunder)
- Tony (pappa) involveres som likeverdig part
- Bodø-fokus, men nasjonalt marked
- Ikke tar tilbakemelding personlig — sier "liker ikke det" om noe ikke matcher
- Bruker det er bare på "fortell meg" / "gjør det for meg"-modus

---

*Sist oppdatert: 12. juni 2026*  
*Filen ligger i `/Users/sondrebakkejord/Documents/test-nettside/HANDOVER.md`*
