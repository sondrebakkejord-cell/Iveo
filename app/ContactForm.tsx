"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
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
      if (!res.ok) throw new Error(data.error || "Kunne ikke sende.");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", project: "", message: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Noe gikk galt.");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Takk for meldingen!</h3>
        <p className="text-slate-600 mb-6">Vi tar kontakt så snart som mulig, vanligvis innen 24 timer.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Send en til
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200 space-y-4"
    >
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
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Navn <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Ola Nordmann"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="ola@bedrift.no"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+47 412 34 567"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
          />
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Type prosjekt
          </label>
          <select
            id="project"
            value={form.project}
            onChange={update("project")}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
          >
            <option value="">Velg…</option>
            <option value="Ny nettside">Ny nettside</option>
            <option value="Redesign av eksisterende">Redesign av eksisterende</option>
            <option value="E-handel">E-handel / nettbutikk</option>
            <option value="Hosting / vedlikehold">Bare hosting / vedlikehold</option>
            <option value="AI-løsning">AI-løsning</option>
            <option value="Annet">Annet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Fortell oss om prosjektet <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Hva slags bedrift har du? Hva trenger du av nettside? Trenger du noe spesielt?"
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-xs text-slate-500">
          Vi tar kontakt innen 24 timer. Aldri spam.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
              Sender…
            </>
          ) : (
            <>
              Send melding
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
