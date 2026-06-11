"use client";

import { useEffect, useState } from "react";

const KEY = "iveo-cookie-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) {
        // Vis først etter 1 sek så hovedinnholdet er synlig
        const t = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage er noen ganger blokkert (Safari private)
    }
  }, []);

  const accept = (level: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ level, ts: Date.now() }));
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-fade-up"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </div>
          <div>
            <h2 id="cookie-title" className="font-bold text-slate-900 text-base mb-1">
              Vi bruker informasjonskapsler
            </h2>
            <p id="cookie-desc" className="text-sm text-slate-600 leading-relaxed">
              Iveo bruker nødvendige cookies for at siden skal virke, og anonym statistikk
              for å forstå hvor besøkende kommer fra. Du kan velge selv.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={() => accept("all")}
            className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Godta alle
          </button>
          <button
            onClick={() => accept("essential")}
            className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Kun nødvendige
          </button>
        </div>
      </div>
    </div>
  );
}
