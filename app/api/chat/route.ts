import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "sondrebakkejord@gmail.com";

const SYSTEM_PROMPT = `Du er Iveo-assistenten — en vennlig, profesjonell chatbot på nettsiden til Iveo.

OM IVEO:
- Norsk teknologiselskap drevet av et far-og-sønn-team (Sondre og pappa)
- Lager moderne, futuristiske nettsider med hosting inkludert
- AI-løsninger kommer snart (chatbots, automatisering, skreddersydde modeller)
- Etablert 2026, holder til i Norge
- Telefon: 484 72 586
- E-post: sondrebakkejord@gmail.com

TJENESTER:
- Nettsider & Hosting (samlet pakke): Custom design, mobiloptimalisert, SEO-vennlig, 99.9% oppetid, SSL, daglig backup
- Leveringstid: innen en uke
- Support: 24/7
- AI-løsninger: kommer snart

PRIS: Vi har ikke faste priser — alt tilpasses prosjektet. Henvis til møte for prisestimat.

REGLER:
1. Svar kort, vennlig og naturlig på norsk
2. Bruk emojis sparsomt (1 per svar maks)
3. Hvis du IKKE vet svaret på noe konkret (f.eks. spesifikke priser, tekniske detaljer du ikke har, eller noe utenfor Iveo) — be brukeren legge igjen navn og telefon/e-post, og avslutt svaret med [NOTIFY_HUMAN] (denne taggen blir fjernet før visning).
4. Hvis brukeren gir kontaktinfo (navn + telefon eller e-post) etter et [NOTIFY_HUMAN]-spørsmål, takk dem og avslutt med [SEND_NOTIFICATION: navn=X, kontakt=Y, sporsmal=Z]
5. Oppfordre alltid til å booke møte eller ringe 484 72 586 hvis brukeren virker interessert`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; text: string }) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.text,
      })),
    });

    let reply = response.content[0].type === "text" ? response.content[0].text : "";

    // Check for notification trigger
    const notifyMatch = reply.match(/\[SEND_NOTIFICATION:([^\]]+)\]/);
    if (notifyMatch) {
      const info = notifyMatch[1].trim();
      try {
        await resend.emails.send({
          from: "Iveo Chatbot <onboarding@resend.dev>",
          to: NOTIFY_EMAIL,
          subject: "🔔 Ny henvendelse fra Iveo-chatboten",
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #4f46e5, #06b6d4); padding: 30px; border-radius: 16px; color: white;">
                <h1 style="margin: 0;">Ny henvendelse 💬</h1>
                <p style="margin: 8px 0 0; opacity: 0.9;">Chatboten kunne ikke svare og trenger din hjelp.</p>
              </div>
              <div style="padding: 24px; background: #f9fafb; border-radius: 12px; margin-top: 16px;">
                <h3 style="margin-top: 0;">Detaljer fra chatten:</h3>
                <p style="background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #4f46e5;">${info}</p>
                <h3>Hele samtalen:</h3>
                ${messages.map((m: { role: string; text: string }) =>
                  `<div style="margin: 8px 0; padding: 10px; background: ${m.role === "user" ? "#e0e7ff" : "white"}; border-radius: 8px;">
                    <strong>${m.role === "user" ? "Bruker" : "Bot"}:</strong> ${m.text}
                  </div>`
                ).join("")}
              </div>
            </div>
          `,
        });
      } catch (e) {
        console.error("Email error:", e);
      }
      reply = reply.replace(/\[SEND_NOTIFICATION:[^\]]+\]/, "").trim();
    }

    // Strip internal tags from displayed reply
    reply = reply.replace(/\[NOTIFY_HUMAN\]/g, "").trim();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: "Beklager, noe gikk galt. Prøv igjen, eller ring oss på 484 72 586." },
      { status: 500 }
    );
  }
}
