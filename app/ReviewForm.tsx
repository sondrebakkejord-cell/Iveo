"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({
    name: "",
    message: "",
    honeypot: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!form.message.trim()) {
      setError("Skriv litt om opplevelsen din.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Kunne ikke sende.");
      setStatus("sent");
      setRating(0);
      setForm({ name: "", message: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Noe gikk galt.");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
        <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-4">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Takk for tilbakemeldingen!</h3>
        <p className="text-slate-600">Vi leser alt, og bruker det til å bli bedre.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200 space-y-5"
    >
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={update("honeypot")}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Hvor fornøyd er du?
        </label>
        <div className="flex gap-1.5" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              className="p-1 transition-transform hover:scale-110"
              aria-label={`${star} av 5 stjerner`}
            >
              <svg
                className={`w-8 h-8 transition-colors ${
                  (hover || rating) >= star ? "text-amber-400" : "text-slate-200"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.49 3.17c.18-.42.79-.42.97 0l2.13 4.97 5.4.42c.46.04.65.62.3.92l-4.1 3.5 1.25 5.27c.1.45-.4.8-.79.56l-4.61-2.81-4.61 2.81c-.4.24-.89-.11-.79-.56l1.25-5.27-4.1-3.5c-.35-.3-.16-.88.3-.92l5.4-.42 2.13-4.97z" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="rev-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Navn <span className="text-slate-400 font-normal">(valgfritt)</span>
        </label>
        <input
          id="rev-name"
          type="text"
          value={form.name}
          onChange={update("name")}
          placeholder="Anonym er også fint"
          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
        />
      </div>

      <div>
        <label htmlFor="rev-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Hva tenker du? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="rev-message"
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Hva likte du? Hva kunne vært bedre? Vi tar imot alt — ros, ris, ideer."
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-xs text-slate-500">Vi leser alt selv. Aldri publisert uten lov.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sender…" : "Send tilbakemelding"}
        </button>
      </div>
    </form>
  );
}
