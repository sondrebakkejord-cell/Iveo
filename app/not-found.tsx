import Link from "next/link";
import { LogoFull } from "./Logo";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background — restrained, matches main site */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-32 left-1/3 w-[520px] h-[520px] bg-indigo-300/40 rounded-full blur-[140px] animate-pulse-soft" />
      </div>

      <header className="px-6 py-5">
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <LogoFull size={36} />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold mb-6">
            Feilkode 404
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
            style={{ letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            Den siden finnes ikke.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Lenken kan være feilskrevet, eller siden kan ha blitt flyttet. Det skjer.
            La oss få deg tilbake på sporet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Tilbake til forsiden
            </Link>
            <Link
              href="/#eksempler"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Se eksempler
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-3">Trenger du hjelp?</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a href="tel:+4748472586" className="font-semibold text-slate-900 hover:text-indigo-600">
                +47 484 72 586
              </a>
              <span className="text-slate-300">·</span>
              <a href="mailto:sondrebakkejord@gmail.com" className="font-semibold text-slate-900 hover:text-indigo-600">
                sondrebakkejord@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
