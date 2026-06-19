"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "no" | "en";

const STORAGE_KEY = "iveo-lang";

type Strings = {
  nav: { whatWeDo: string; examples: string; whoWeAre: string; contact: string; openMenu: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    deliveredBadge: string;
  };
  what: {
    title: string;
    body: string;
    availableNow: string;
    websiteTitle: string;
    websiteBody: string;
    features: string[];
    aiTitle: string;
    aiSoon: string;
    aiBody: string;
  };
  examples: {
    title: string;
    body: string;
    seeAll: string;
    seeExample: string;
    footnote: string;
    industries: { restaurant: string; plumber: string; carpenter: string; dentist: string; cafe: string; hairdresser: string };
  };
  who: {
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    established: string;
    location: string;
    locationValue: string;
    deliveryTime: string;
    deliveryValue: string;
  };
  book: { title1: string; title2: string; body: string; sendForm: string; orCall: string };
  contact: {
    title: string;
    body: string;
    phone: string;
    email: string;
    badge: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectType: string;
    projectChoose: string;
    projectWebsite: string;
    projectWebsiteHosting: string;
    message: string;
    messagePlaceholder: string;
    promise: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    sentAgain: string;
    errorGeneric: string;
    errorCouldntSend: string;
  };
  feedback: {
    eyebrow: string;
    title1: string;
    title2: string;
    body: string;
    anon: string;
    howSatisfied: string;
    starsLabel: (n: number) => string;
    name: string;
    nameOptional: string;
    namePlaceholder: string;
    thoughts: string;
    thoughtsPlaceholder: string;
    notePublic: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    writeAbout: string;
  };
  footer: string;
  mobileCta: string;
  process: {
    eyebrow: string;
    title: string;
    steps: { step: string; title: string; body: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  riskReversal: string;
  scarcity: string;
  define: { eyebrow: string; line: string };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    plans: { name: string; price: string; unit: string; features: string[] }[];
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
};

const dict: Record<Lang, Strings> = {
  no: {
    nav: { whatWeDo: "Hva vi gjør", examples: "Eksempler", whoWeAre: "Hvem vi er", contact: "Kontakt", openMenu: "Åpne meny" },
    hero: {
      badge: "Tar 2-3 nye prosjekter denne måneden",
      titleLine1: "Nettsider som faktisk",
      titleLine2: "jobber for deg.",
      body: "En liten familiebedrift som designer, koder og hoster moderne nettsider. Beskriv bedriften din i skjemaet — så har du en demo i innboksen innen 24 timer.",
      primaryCta: "Få demoen min",
      secondaryCta: "Se hva vi tilbyr",
      deliveredBadge: "Ferdig på 7 dager",
    },
    what: {
      title: "Slik kan vi hjelpe deg.",
      body: "Vi holder tilbudet smalt fordi vi gjør det vi er gode på skikkelig. Ingen menypakke med ti halvgode produkter — bare det du faktisk trenger.",
      availableNow: "Tilgjengelig nå",
      websiteTitle: "Nettsider og hosting",
      websiteBody:
        "Skreddersydd nettside designet og kodet fra bunnen av. Vi leverer på en uke og tar drift, oppdateringer og support etterpå. Du trenger aldri å åpne et kontrollpanel.",
      features: [
        "Custom design — ikke en mal",
        "SSL og daglig backup inkludert",
        "SEO-vennlig fra første linje kode",
        "Support på norsk",
      ],
      aiTitle: "AI-løsninger",
      aiSoon: "Snart",
      aiBody: "Chatboter, AI-resepsjonister og lead-automatisering. Vi varsler kunder først.",
    },
    examples: {
      title: "Se eksempler på hva vi kan bygge.",
      body: "Fem eksempler på nettsider vi kan bygge — én for hver bransje. Klikk for å se hele siden.",
      seeAll: "Se alle fem →",
      seeExample: "Se eksempel",
      footnote: "Eksemplene er bygget på samme måte som nettsiden vi ville laget til deg.",
      industries: { restaurant: "Restaurant", plumber: "Rørlegger", carpenter: "Snekker", dentist: "Tannlege", cafe: "Kafé", hairdresser: "Frisør" },
    },
    who: {
      title1: "Bakkejord",
      title2: "& Bakkejord.",
      p1: "Iveo er en liten familiebedrift drevet av Sondre og Tony Bakkejord. Vi har gått sammen om å bygge et selskap som lager nettsider folk faktisk liker å bruke.",
      p2: "Vi tar oss av hele veien — fra første idé til ferdig nettside, med drift og support i etterkant. Snart kommer også egne AI-løsninger.",
      established: "Etablert",
      location: "Lokasjon",
      locationValue: "Norge",
      deliveryTime: "Leveringstid",
      deliveryValue: "Innen 1 uke",
    },
    book: {
      title1: "Få en gratis",
      title2: "mockup.",
      body: "Beskriv bedriften din kort, så svarer vi tilbake med en visuell skisse av hvordan nettsiden din kan se ut. Ingen forpliktelse.",
      sendForm: "Send skjema",
      orCall: "Eller ring +47 484 72 586",
    },
    contact: {
      title: "Snakk med oss.",
      body: "Fyll ut skjemaet, eller ring direkte. Du får svar samme dag.",
      phone: "Telefon",
      email: "E-post",
      badge: "Du får en gratis mockup tilbake",
      name: "Navn",
      namePlaceholder: "Ola Nordmann",
      emailLabel: "E-post",
      emailPlaceholder: "ola@bedrift.no",
      phoneLabel: "Telefon",
      phonePlaceholder: "+47 412 34 567",
      projectType: "Type prosjekt",
      projectChoose: "Velg…",
      projectWebsite: "Nettside",
      projectWebsiteHosting: "Nettside + hosting",
      message: "Fortell oss om prosjektet",
      messagePlaceholder:
        "Bransje, sted, og kort om hva du ønsker med nettsiden. F.eks. «Bakkejord pizza i Bodø — vil ha menyen, åpningstider og noen fine bilder på forsiden.»",
      promise: "Svar innen 24 timer · alltid med mockup · aldri spam.",
      submit: "Få demoen min",
      sending: "Sender…",
      sentTitle: "Takk for meldingen!",
      sentBody: "Du får demoen i innboksen innen 24 timer.",
      sentAgain: "Send en til",
      errorGeneric: "Noe gikk galt.",
      errorCouldntSend: "Kunne ikke sende.",
    },
    feedback: {
      eyebrow: "— Tilbakemelding —",
      title1: "Hvordan var",
      title2: "opplevelsen?",
      body: "Vi er i en tidlig fase og vil bli bedre — fort. Si fra hva som funket, og hva som kunne vært gjort annerledes.",
      anon: "Anonym er helt fint — vi leser alt selv.",
      howSatisfied: "Hvor fornøyd er du?",
      starsLabel: (n) => `${n} av 5 stjerner`,
      name: "Navn",
      nameOptional: "(valgfritt)",
      namePlaceholder: "Anonym er også fint",
      thoughts: "Hva tenker du?",
      thoughtsPlaceholder: "Hva likte du? Hva kunne vært bedre? Vi tar imot alt — ros, ris, ideer.",
      notePublic: "Vi leser alt selv. Aldri publisert uten lov.",
      submit: "Send tilbakemelding",
      sending: "Sender…",
      sentTitle: "Takk for tilbakemeldingen!",
      sentBody: "Vi leser alt, og bruker det til å bli bedre.",
      writeAbout: "Skriv litt om opplevelsen din.",
    },
    footer: "Laget i Norge.",
    mobileCta: "Få demoen min",
    process: {
      eyebrow: "Slik fungerer det",
      title: "Tre steg, ingen forpliktelse.",
      steps: [
        { step: "1", title: "Send skjema", body: "Beskriv bedriften din kort. Tar to minutter." },
        { step: "2", title: "Demo i innboksen", body: "Innen 24 timer får du en demo av hvordan nettsiden din kan se ut." },
        { step: "3", title: "Vi bygger", body: "Liker du det, har du en ferdig nettside live på 7 dager. Hvis ikke — bare slett oss." },
      ],
    },
    trust: {
      eyebrow: "Ingen overraskelser",
      title: "Du eier alt.",
      items: [
        { title: "Du eier domenet", body: "Vi setter aldri navnet ditt på vår faktura. Du kjøper domenet selv og eier det 100 %." },
        { title: "Du eier designet og koden", body: "Vil du bytte leverandør senere, får du alt med deg. Ingen låst inn." },
        { title: "Ingen kontrakter", body: "Hosting er 99 kr/mnd uten bindingstid. Si opp når du vil." },
      ],
    },
    riskReversal: "Liker du ikke demoen? Slett oss — vi følger ikke opp.",
    scarcity: "Vi tar 2-3 prosjekter i måneden for å levere skikkelig.",
    define: {
      eyebrow: "Kort fortalt",
      line: "Iveo er en liten norsk familiebedrift som designer, koder og hoster moderne nettsider for små og mellomstore bedrifter. Vi leverer ferdig nettside på én uke, fra 1 990 kr, med hosting og support inkludert.",
    },
    pricing: {
      eyebrow: "Priser",
      title: "Hva koster en nettside hos Iveo?",
      body: "Vi setter pris etter prosjektets omfang. Her er utgangspunktet — vi avtaler eksakt pris etter at du har sett mockupen.",
      plans: [
        {
          name: "Komplett nettside",
          price: "Fra 1 990 kr",
          unit: "engangs",
          features: ["Skreddersydd design", "Levert på 7 dager", "SSL og daglig backup", "SEO-optimalisert"],
        },
        {
          name: "Hosting og småjusteringer",
          price: "99 kr",
          unit: "per måned",
          features: ["Fri hosting på rask server", "Daglig backup", "Småjusteringer inkludert", "Support på norsk"],
        },
        {
          name: "Større endringer",
          price: "Etter avtale",
          unit: "fast pris",
          features: ["Ny seksjon eller side", "Nye funksjoner", "Redesign", "Du vet alltid prisen før vi starter"],
        },
      ],
      note: "Vi lover aldri fast pris uten å se prosjektet. Be om en gratis mockup, så får du et eksakt tilbud.",
    },
    faq: {
      eyebrow: "Vanlige spørsmål",
      title: "Det folk lurer på.",
      items: [
        {
          q: "Hva koster en nettside hos Iveo?",
          a: "Komplett nettside starter på 1 990 kr engangs. Hosting med support koster 99 kr per måned. Eksakt pris settes etter at du har sett mockupen — vi lover aldri fast pris uten å se prosjektet.",
        },
        {
          q: "Hvor lang tid tar det å lage nettsiden?",
          a: "Vi leverer komplett nettside på 7 dager fra du godkjenner mockupen. Mockupen sender vi vanligvis innen 24 timer etter at du har sendt skjema.",
        },
        {
          q: "Hva er inkludert i hosting?",
          a: "Hosting på rask server hos Vercel, SSL/HTTPS, daglig backup, småjusteringer og support på norsk — alt for 99 kr/mnd.",
        },
        {
          q: "Eier jeg domenet og innholdet?",
          a: "Ja. Du kjøper og eier domenet ditt selv. Vi hoster nettsiden, men du eier all design, kode og innhold.",
        },
        {
          q: "Hvem er Iveo?",
          a: "Iveo er en liten familiebedrift drevet av Sondre og Tony Bakkejord, med base i Norge. Vi designer, koder og hoster nettsider for små og mellomstore norske bedrifter.",
        },
        {
          q: "Hva slags bedrifter jobber dere med?",
          a: "Vi jobber med små og mellomstore norske bedrifter — restauranter, frisører, rørleggere, snekkere, tannleger, kaféer og andre lokale virksomheter.",
        },
        {
          q: "Hva med AI-løsninger?",
          a: "Vi lanserer AI-løsninger i 2026 — chatboter trent på din bedrift, AI-resepsjonister som svarer på telefon, og automatisering av rutineoppgaver. Eksisterende kunder får tilgang først.",
        },
        {
          q: "Hva skiller dere fra et webbyrå?",
          a: "Vi er en liten familiebedrift uten mellomledd. Du snakker direkte med oss som koder nettsiden, og vi tar både design, utvikling, hosting og support selv.",
        },
      ],
    },
  },
  en: {
    nav: { whatWeDo: "What we do", examples: "Examples", whoWeAre: "Who we are", contact: "Contact", openMenu: "Open menu" },
    hero: {
      badge: "Taking 2-3 new projects this month",
      titleLine1: "Websites that actually",
      titleLine2: "work for you.",
      body: "A small family business designing, coding and hosting modern websites. Describe your business in the form — and you'll have a demo in your inbox within 24 hours.",
      primaryCta: "Get my demo",
      secondaryCta: "See what we offer",
      deliveredBadge: "Live in 7 days",
    },
    what: {
      title: "How we can help.",
      body: "We keep the offering narrow because we do what we're good at properly. No package menu with ten mediocre products — just what you actually need.",
      availableNow: "Available now",
      websiteTitle: "Websites and hosting",
      websiteBody:
        "Custom website designed and coded from scratch. We deliver in a week and handle operations, updates and support after. You never need to open a control panel.",
      features: [
        "Custom design — not a template",
        "SSL and daily backups included",
        "SEO-friendly from line one",
        "Support included",
      ],
      aiTitle: "AI solutions",
      aiSoon: "Soon",
      aiBody: "Chatbots, AI receptionists and lead automation. Existing customers get first access.",
    },
    examples: {
      title: "See examples of what we can build.",
      body: "Five examples of websites we can build — one per industry. Click to see the full site.",
      seeAll: "See all five →",
      seeExample: "See example",
      footnote: "The examples are built the same way as the website we'd make for you.",
      industries: { restaurant: "Restaurant", plumber: "Plumber", carpenter: "Carpenter", dentist: "Dentist", cafe: "Café", hairdresser: "Hairdresser" },
    },
    who: {
      title1: "Bakkejord",
      title2: "& Bakkejord.",
      p1: "Iveo is a small family business run by Sondre and Tony Bakkejord. We joined forces to build a company that makes websites people actually enjoy using.",
      p2: "We handle the whole journey — from first idea to finished site, with operations and support after. Our own AI solutions are coming next.",
      established: "Established",
      location: "Location",
      locationValue: "Norway",
      deliveryTime: "Delivery time",
      deliveryValue: "Within 1 week",
    },
    book: {
      title1: "Get a free",
      title2: "mockup.",
      body: "Describe your business briefly, and we'll send back a visual sketch of what your website could look like. No commitment.",
      sendForm: "Send a message",
      orCall: "Or call +47 484 72 586",
    },
    contact: {
      title: "Talk to us.",
      body: "Fill out the form, or call directly. You'll get a reply the same day.",
      phone: "Phone",
      email: "Email",
      badge: "You'll get a free mockup back",
      name: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+47 412 34 567",
      projectType: "Project type",
      projectChoose: "Choose…",
      projectWebsite: "Website",
      projectWebsiteHosting: "Website + hosting",
      message: "Tell us about the project",
      messagePlaceholder:
        "Industry, location, and what you want the site to do. E.g. 'Bakkejord pizza in Bodø — want the menu, opening hours, and some nice photos on the front page.'",
      promise: "Reply within 24 hours · always with a mockup · never spam.",
      submit: "Get my demo",
      sending: "Sending…",
      sentTitle: "Thanks for the message!",
      sentBody: "You'll get the demo in your inbox within 24 hours.",
      sentAgain: "Send another",
      errorGeneric: "Something went wrong.",
      errorCouldntSend: "Couldn't send.",
    },
    feedback: {
      eyebrow: "— Feedback —",
      title1: "How was the",
      title2: "experience?",
      body: "We're early and want to get better — fast. Tell us what worked and what could have been done differently.",
      anon: "Anonymous is fine — we read everything ourselves.",
      howSatisfied: "How satisfied are you?",
      starsLabel: (n) => `${n} out of 5 stars`,
      name: "Name",
      nameOptional: "(optional)",
      namePlaceholder: "Anonymous is fine too",
      thoughts: "What do you think?",
      thoughtsPlaceholder: "What did you like? What could be better? We welcome anything — praise, criticism, ideas.",
      notePublic: "We read everything ourselves. Never published without permission.",
      submit: "Send feedback",
      sending: "Sending…",
      sentTitle: "Thanks for the feedback!",
      sentBody: "We read everything and use it to improve.",
      writeAbout: "Write a bit about your experience.",
    },
    footer: "Made in Norway.",
    mobileCta: "Get my demo",
    process: {
      eyebrow: "How it works",
      title: "Three steps. No commitment.",
      steps: [
        { step: "1", title: "Send the form", body: "Briefly describe your business. Takes two minutes." },
        { step: "2", title: "Demo in your inbox", body: "Within 24 hours you'll have a demo of what your site could look like." },
        { step: "3", title: "We build it", body: "If you like it, your site is live in 7 days. If not — just delete us." },
      ],
    },
    trust: {
      eyebrow: "No surprises",
      title: "You own everything.",
      items: [
        { title: "You own the domain", body: "We never put our name on the invoice. You buy and own the domain 100 %." },
        { title: "You own the design and code", body: "If you ever switch providers, you take everything with you. No lock-in." },
        { title: "No contracts", body: "Hosting is 99 NOK/mo, cancel anytime. No commitment." },
      ],
    },
    riskReversal: "Don't like the demo? Just delete us — we won't follow up.",
    scarcity: "We take 2-3 projects a month to deliver properly.",
    define: {
      eyebrow: "In short",
      line: "Iveo is a small Norwegian family business that designs, codes and hosts modern websites for small and medium-sized businesses. We deliver a finished site in one week, from 1,990 NOK, with hosting and support included.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "What does an Iveo website cost?",
      body: "We price by project scope. Here's the starting point — we set the exact price after you've seen the mockup.",
      plans: [
        {
          name: "Complete website",
          price: "From 1,990 NOK",
          unit: "one-time",
          features: ["Custom design", "Delivered in 7 days", "SSL and daily backups", "SEO-optimized"],
        },
        {
          name: "Hosting and small fixes",
          price: "99 NOK",
          unit: "per month",
          features: ["Hosting on a fast server", "Daily backups", "Small fixes included", "Support"],
        },
        {
          name: "Bigger changes",
          price: "By agreement",
          unit: "fixed price",
          features: ["New section or page", "New features", "Redesign", "You always know the price before we start"],
        },
      ],
      note: "We never promise a fixed price without seeing the project. Ask for a free mockup, and you'll get an exact quote.",
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What people ask.",
      items: [
        {
          q: "What does an Iveo website cost?",
          a: "A complete website starts at 1,990 NOK one-time. Hosting with support is 99 NOK per month. The exact price is set after you've seen the mockup — we never promise a fixed price without seeing the project.",
        },
        {
          q: "How long does it take to build the site?",
          a: "We deliver a complete website in 7 days once you've approved the mockup. The mockup is usually sent within 24 hours of you submitting the form.",
        },
        {
          q: "What's included in hosting?",
          a: "Hosting on a fast Vercel server, SSL/HTTPS, daily backups, small fixes and support — all for 99 NOK/month.",
        },
        {
          q: "Do I own the domain and content?",
          a: "Yes. You buy and own your own domain. We host the site, but you own all design, code and content.",
        },
        {
          q: "Who is Iveo?",
          a: "Iveo is a small family business run by Sondre and Tony Bakkejord, based in Norway. We design, code and host websites for small and medium-sized Norwegian businesses.",
        },
        {
          q: "What kind of businesses do you work with?",
          a: "We work with small and medium-sized Norwegian businesses — restaurants, hairdressers, plumbers, carpenters, dentists, cafés and other local businesses.",
        },
        {
          q: "What about AI solutions?",
          a: "We're launching AI solutions in 2026 — chatbots trained on your business, AI receptionists that handle phone calls, and automation of routine tasks. Existing customers get access first.",
        },
        {
          q: "How are you different from an agency?",
          a: "We're a small family business with no middlemen. You talk directly to the people coding your site, and we handle design, development, hosting and support ourselves.",
        },
      ],
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Strings };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("no");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "no" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "no" ? "nb" : "en";
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside <LanguageProvider>");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  const base = "px-2.5 py-1 rounded-full text-[11px] tracking-[0.1em] font-medium transition-colors";
  return (
    <div
      role="group"
      aria-label={lang === "no" ? "Språkvalg" : "Language"}
      className={`inline-flex items-center gap-1 p-1 rounded-full border ${className}`}
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
    >
      <button
        type="button"
        onClick={() => setLang("no")}
        aria-pressed={lang === "no"}
        className={base}
        style={
          lang === "no"
            ? { background: "var(--accent)", color: "var(--background)" }
            : { color: "var(--ink-soft)", background: "transparent" }
        }
      >
        NO
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={base}
        style={
          lang === "en"
            ? { background: "var(--accent)", color: "var(--background)" }
            : { color: "var(--ink-soft)", background: "transparent" }
        }
      >
        EN
      </button>
    </div>
  );
}
