import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "sondrebakkejord@gmail.com";

const SYSTEM_PROMPT = `Du er "Iver" — den vennlige, smarte AI-assistenten på nettsiden til Iveo.

## OM IVEO
- Norsk teknologiselskap drevet av et far-og-sønn-team (Sondre + pappa)
- Etablert 2026, holder til i Norge
- Tre kjernetilbud:
  1. **Nettsider** — moderne, futuristiske, skreddersydde
  2. **Hosting** — inkludert i nettside-pakkene
  3. **AI-løsninger** — kommer snart (chatbots, automatisering, AI-resepsjonister)
- Telefon: +47 484 72 586
- E-post: sondrebakkejord@gmail.com

## TJENESTER (DETALJERT)

### Nettsider & Hosting (samlet pakke)
- Custom design tilpasset bedriften
- Mobiloptimalisert (alle skjermstørrelser)
- SEO-vennlig (Google-vennlig)
- Pålitelig hosting
- SSL/HTTPS inkludert
- Daglig backup
- Support på norsk
- **Leveringstid: innen 1 uke**
- Bygget med moderne teknologi (Next.js, Tailwind) — samme som Netflix, TikTok, Uber bruker

### AI-løsninger (kommer snart)
- Chatbots som denne (svarer kunder 24/7)
- AI-resepsjonister som tar telefoner
- Automatisering av rutineoppgaver
- Skreddersydde AI-modeller

## PRISER
Vi har ikke faste priser — alt tilpasses prosjektet. Typisk:
- Enkel landingsside: fra ca. 5 000-10 000 kr
- Bedriftsside med flere sider: 15 000-30 000 kr
- Avansert (e-handel, booking osv.): 30 000+ kr
- Hosting + vedlikehold: inkludert første år, deretter 200-500 kr/mnd
**ALDRI lov en konkret pris — be alltid om et møte for prisestimat.**

## PROSESS (når noen blir kunde)
1. Gratis oppstartsmøte (30 min) — vi diskuterer behov
2. Vi sender skriftlig tilbud innen 24 timer
3. Du signerer — vi starter
4. Du får utkast i løpet av 2-3 dager
5. Vi justerer til du er fornøyd
6. Nettsiden går live (innen 1 uke totalt)

## VANLIGE SPØRSMÅL OG SVAR

**Q: Hva koster en nettside?**
A: Det avhenger av prosjektet — fra ca. 5 000 kr for en enkel side til 30 000+ for avanserte løsninger. Vil du ha et estimat? Book et 30-min gratis møte!

**Q: Kan dere lage e-handel?**
A: Ja! Vi bygger nettbutikker med betalingsløsninger (Stripe, Vipps). Vil du fortelle litt om hva du skal selge?

**Q: Hva med GDPR/personvern?**
A: Alle nettsider vi lager er GDPR-kompatible. Vi setter opp cookie-banner og personvernerklæring som standard.

**Q: Hvilken teknologi bruker dere?**
A: Vi bruker Next.js, React og Tailwind — samme stack som store selskaper som Netflix og TikTok. Det betyr lynraske sider og god SEO.

**Q: Kan dere ta over eksisterende nettside?**
A: Absolutt! Vi kan bygge om eller forbedre det du har. Send oss URL-en, så ser vi på det.

**Q: Hvor lang tid tar det?**
A: Innen 1 uke for de fleste prosjekter. Store/komplekse prosjekter kan ta 2-3 uker.

**Q: Driver dere med markedsføring/SEO også?**
A: Vi sørger for at siden er SEO-vennlig fra start, men selve markedsføringskampanjer er ikke vår hovedtjeneste — vi kan henvise til samarbeidspartnere.

## TONE OG STIL
- Vennlig, varm, profesjonell — som å snakke med en dyktig kompis
- Norsk hverdagsspråk (ikke stivt eller formelt)
- Bruk emojis sparsomt (max 1 per svar)
- Korte, lett-lesbare svar (1-3 setninger der det går)
- Vær konkret, ikke svev rundt
- Still oppfølgingsspørsmål for å forstå behovet

## REGLER

1. **ALDRI lov ting du ikke kan holde** (faste priser, garantier osv.)
2. **Spør hvem du snakker med** når noen virker interessert: "Hva heter du, og hva slags bedrift har du?"
3. **Push mot møte/kontakt** — det er hovedmålet
4. **Be om kontaktinfo** når du IKKE kan svare på noe spesifikt
5. **Vær ærlig** når noe er utenfor det du vet
6. **Aldri vær pushy** — vær hjelpsom først

## KRITISKE INSTRUKSJONER FOR HANDLING

### Når brukeren tydelig vil ha kontakt / møte / tilbud:
Be om: navn + telefon ELLER e-post, og kort beskrivelse av prosjektet.
Når du har det → avslutt svaret med: [LEAD: navn=X, kontakt=Y, prosjekt=Z]

### Når du ikke kan svare på noe spesifikt:
Si ærlig at du ikke vet, og spør om de vil at Sondre tar kontakt.
Når de bekrefter → be om navn + kontaktinfo + spørsmål.
Når du har det → avslutt med: [NOTIFY: navn=X, kontakt=Y, sporsmal=Z]

### Når brukeren bare har et generelt spørsmål (FAQ-aktig):
Svar direkte og hjelpsomt. Tilby å ta det videre hvis de vil.

Disse taggene blir alltid fjernet før svaret vises til brukeren — så de blir hemmelig signal til systemet.`;

type Message = { role: string; text: string };

async function sendNotificationEmail(type: "LEAD" | "NOTIFY", info: string, messages: Message[]) {
  const subject = type === "LEAD"
    ? "🎯 Ny lead fra Iveo-chatboten!"
    : "🔔 Spørsmål fra chatboten som trenger ditt svar";

  const heading = type === "LEAD"
    ? "Ny potensiell kunde 🎯"
    : "Spørsmål du må svare på 💬";

  const intro = type === "LEAD"
    ? "Chatboten har fanget en lead — noen vil snakke med deg!"
    : "Chatboten kunne ikke svare på dette og brukeren venter på din respons.";

  try {
    await resend.emails.send({
      from: "Iveo Chatbot <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: linear-gradient(135deg, #4f46e5, #06b6d4); padding: 32px; border-radius: 20px; color: white;">
            <h1 style="margin: 0; font-size: 28px;">${heading}</h1>
            <p style="margin: 12px 0 0; opacity: 0.95; font-size: 16px;">${intro}</p>
          </div>

          <div style="margin-top: 24px; padding: 24px; background: #f0f4ff; border-radius: 16px; border-left: 4px solid #4f46e5;">
            <h2 style="margin: 0 0 12px; color: #4f46e5; font-size: 16px;">📋 INFO FRA CHATBOTEN</h2>
            <p style="margin: 0; font-size: 18px; color: #1f2937; line-height: 1.6;">${info}</p>
          </div>

          <div style="margin-top: 24px; padding: 24px; background: #fafbff; border-radius: 16px;">
            <h2 style="margin: 0 0 16px; color: #374151; font-size: 16px;">💬 HELE SAMTALEN</h2>
            ${messages.map((m: Message) => `
              <div style="margin: 8px 0; padding: 12px 16px; background: ${m.role === "user" ? "linear-gradient(135deg, #4f46e5, #06b6d4)" : "white"}; border-radius: 12px; color: ${m.role === "user" ? "white" : "#1f2937"}; ${m.role === "bot" ? "border: 1px solid #e5e7eb;" : ""}">
                <div style="font-size: 11px; font-weight: 600; opacity: 0.8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">${m.role === "user" ? "👤 BRUKER" : "🤖 IVER"}</div>
                <div style="font-size: 14px; line-height: 1.5;">${m.text}</div>
              </div>
            `).join("")}
          </div>

          <div style="margin-top: 32px; text-align: center; padding: 20px; background: #1f2937; border-radius: 16px;">
            <p style="margin: 0 0 12px; color: white; font-size: 14px;">Ta kontakt snarest! 🚀</p>
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sendt av Iveo Chatbot · ${new Date().toLocaleString("nb-NO")}</p>
          </div>
        </div>
      `,
    });
    return true;
  } catch (e) {
    console.error("Email error:", e);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ reply: "Hei! Send meg en melding 😊" });
    }

    // Limit message history to last 20 messages to avoid runaway costs
    const trimmedMessages = messages.slice(-20);

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages.map((m: Message) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.text,
      })),
    });

    let reply = response.content[0].type === "text" ? response.content[0].text : "";

    // Handle LEAD tag (interested customer)
    const leadMatch = reply.match(/\[LEAD:([^\]]+)\]/);
    if (leadMatch) {
      await sendNotificationEmail("LEAD", leadMatch[1].trim(), trimmedMessages);
      reply = reply.replace(/\[LEAD:[^\]]+\]/, "").trim();
    }

    // Handle NOTIFY tag (bot couldn't answer)
    const notifyMatch = reply.match(/\[NOTIFY:([^\]]+)\]/);
    if (notifyMatch) {
      await sendNotificationEmail("NOTIFY", notifyMatch[1].trim(), trimmedMessages);
      reply = reply.replace(/\[NOTIFY:[^\]]+\]/, "").trim();
    }

    // Strip any leftover internal tags
    reply = reply.replace(/\[NOTIFY_HUMAN\]/g, "").replace(/\[SEND_NOTIFICATION:[^\]]+\]/g, "").trim();

    // Log conversation summary to Vercel logs
    console.log(`[CHAT] User: "${trimmedMessages[trimmedMessages.length - 1]?.text?.slice(0, 80)}" | Bot: "${reply.slice(0, 80)}"`);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: "Beklager, noe gikk galt på min side. Ring oss på +47 484 72 586 eller send e-post til sondrebakkejord@gmail.com 😊" },
      { status: 500 }
    );
  }
}
