import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "sondrebakkejord@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message, rating, honeypot } = body;

    if (honeypot) return NextResponse.json({ ok: true });

    if (!message || message.trim().length < 3) {
      return NextResponse.json(
        { ok: false, error: "Tilbakemeldingen kan ikke være tom." },
        { status: 400 }
      );
    }

    const stars = "★".repeat(Math.max(0, Math.min(5, rating || 0))) + "☆".repeat(5 - Math.max(0, Math.min(5, rating || 0)));
    const sender = (name && name.trim()) || "Anonym";

    await resend.emails.send({
      from: "Iveo Anmeldelser <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: `⭐ Anmeldelse (${rating || "?"}/5) fra ${sender}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: linear-gradient(135deg, #f59e0b, #ef4444); padding: 28px; border-radius: 16px; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Ny anmeldelse ⭐</h1>
            <p style="margin: 8px 0 0; opacity: 0.95; font-size: 16px;">Fra iveo.no</p>
          </div>

          <div style="margin-top: 20px; padding: 20px; background: #fef3c7; border-radius: 12px; border-left: 4px solid #f59e0b;">
            <p style="font-size: 28px; margin: 0 0 8px; letter-spacing: 4px;">${stars}</p>
            <p style="margin: 0; font-size: 14px; color: #78350f;">${rating || 0} av 5 stjerner — fra ${sender}</p>
          </div>

          <div style="margin-top: 16px; padding: 20px; background: #fafbff; border-radius: 12px;">
            <h3 style="margin: 0 0 12px; color: #374151; font-size: 14px;">TILBAKEMELDING</h3>
            <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap; font-size: 15px;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px; text-align: center;">
            Mottatt ${new Date().toLocaleString("nb-NO")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Review error:", error);
    return NextResponse.json(
      { ok: false, error: "Noe gikk galt. Prøv igjen senere." },
      { status: 500 }
    );
  }
}
