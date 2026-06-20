"use client";

import { useState } from "react";
import { useT } from "./lang";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const { t } = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
    honeypot: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.contact.errorCouldntSend);
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", project: "", message: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.contact.errorGeneric);
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl p-8 border text-center" style={{ background: "var(--surface)", borderColor: "var(--border-strong)" }}>
        <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="serif text-[26px] mb-2" style={{ color: "var(--ink)" }}>{t.contact.sentTitle}</h3>
        <p className="mb-6 text-sm" style={{ color: "var(--ink-soft)" }}>{t.contact.sentBody}</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold transition-colors"
          style={{ color: "var(--accent)" }}
        >
          {t.contact.sentAgain}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl p-7 md:p-8 space-y-4 border"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] tracking-[0.1em] border mb-2"
           style={{ background: "var(--accent-soft)", color: "var(--accent)", borderColor: "var(--border-strong)" }}>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        {t.contact.badge}
      </div>

      {/* Honeypot — usynlig for mennesker */}
      <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        <label>
          Ikke fyll ut dette feltet
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.honeypot}
            onChange={update("honeypot")}
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[11px] tracking-[0.15em] mb-2" style={{ color: "var(--ink-soft)" }}>
            {t.contact.name.toUpperCase()} <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder={t.contact.namePlaceholder}
            className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition-all border"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--ink)" }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[11px] tracking-[0.15em] mb-2" style={{ color: "var(--ink-soft)" }}>
            {t.contact.emailLabel.toUpperCase()} <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder={t.contact.emailPlaceholder}
            className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none transition-all border"
            style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--ink)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[11px] tracking-[0.15em] mb-2" style={{ color: "var(--ink-soft)" }}>
          {t.contact.message.toUpperCase()} <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder={t.contact.messagePlaceholder}
          className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-all resize-y border"
          style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--ink)" }}
        />
      </div>

      {status === "error" && (
        <p className="text-sm px-4 py-3 rounded-lg border" style={{ background: "rgba(255,100,100,0.08)", borderColor: "rgba(255,100,100,0.3)", color: "#ff8a8a" }}>
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-xs leading-relaxed" style={{ color: "var(--ink-mute)" }}>
          {t.riskReversal}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-[12px] tracking-[0.1em]"
          style={{ background: "var(--accent)", color: "var(--background)" }}
        >
          {status === "sending" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
              {t.contact.sending.toUpperCase()}
            </>
          ) : (
            <>
              {t.contact.submit.toUpperCase()}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
