import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "sondrebakkejord@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, project, message, honeypot } = body;

    // Honeypot spam-protection (et felt skjult for mennesker)
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Navn, e-post og melding er påkrevd." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Iveo Kontaktskjema <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `🎯 Ny henvendelse fra ${name}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: linear-gradient(135deg, #4f46e5, #06b6d4); padding: 28px; border-radius: 16px; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Ny henvendelse 🎯</h1>
            <p style="margin: 8px 0 0; opacity: 0.95;">Fra kontaktskjemaet på iveo.no</p>
          </div>

          <div style="margin-top: 20px; padding: 20px; background: #f0f4ff; border-radius: 12px; border-left: 4px solid #4f46e5;">
            <table style="width: 100%; font-size: 15px; color: #1f2937;">
              <tr><td style="padding: 4px 0; color: #6b7280; width: 100px;">Navn:</td><td style="font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 4px 0; color: #6b7280;">E-post:</td><td><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 4px 0; color: #6b7280;">Telefon:</td><td><a href="tel:${phone}" style="color: #4f46e5;">${phone}</a></td></tr>` : ""}
              ${project ? `<tr><td style="padding: 4px 0; color: #6b7280;">Type prosjekt:</td><td>${project}</td></tr>` : ""}
            </table>
          </div>

          <div style="margin-top: 16px; padding: 20px; background: #fafbff; border-radius: 12px;">
            <h3 style="margin: 0 0 12px; color: #374151; font-size: 14px;">MELDING</h3>
            <p style="margin: 0; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px; text-align: center;">
            Mottatt ${new Date().toLocaleString("nb-NO")} · Svar direkte for å nå avsenderen.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Noe gikk galt. Prøv igjen, eller ring +47 484 72 586." },
      { status: 500 }
    );
  }
}
