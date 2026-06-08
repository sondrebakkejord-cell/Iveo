import Link from "next/link";

const designs = [
  { n: 1, name: "Editorial", desc: "Magasin-stil. Serif, ren typografi, narrativ.", bg: "bg-stone-100", text: "text-stone-900" },
  { n: 2, name: "Brutalist", desc: "Tjukke rammer, råe blokker, sterk kontrast.", bg: "bg-yellow-300", text: "text-black" },
  { n: 3, name: "Aurora", desc: "Glass, gradienter, drømmende dybde.", bg: "bg-gradient-to-br from-violet-200 via-pink-100 to-cyan-100", text: "text-slate-900" },
  { n: 4, name: "Terminal", desc: "Mørk, mono-font, neon-aksent. Tech-merkevare.", bg: "bg-zinc-950", text: "text-emerald-400" },
  { n: 5, name: "Premium", desc: "Krem, gull, serif. Premium og varm.", bg: "bg-amber-50", text: "text-amber-900" },
  { n: 6, name: "Swiss", desc: "Sveitsisk minimalisme. Grid, helvetica, ro.", bg: "bg-white", text: "text-black" },
  { n: 7, name: "Drenched", desc: "Drukne sider i én sterk farge.", bg: "bg-indigo-600", text: "text-white" },
  { n: 8, name: "Futurisme", desc: "Geometrisk, holografisk, sci-fi.", bg: "bg-slate-900", text: "text-cyan-300" },
];

export default function DesignsIndex() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-slate-600 hover:text-slate-900 text-sm mb-8 inline-block">← Tilbake til hovedside</Link>
        <h1 className="text-5xl font-bold text-slate-900 mb-3" style={{ letterSpacing: "-0.025em" }}>Åtte design-retninger</h1>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl">
          Hver av disse er en helt egen visuell tone for Iveo. Klikk for å se hele siden i den stilen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {designs.map((d) => (
            <Link
              key={d.n}
              href={`/designs/${d.n}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:-translate-y-1 transition-all"
            >
              <div className={`aspect-[4/3] ${d.bg} ${d.text} p-6 flex flex-col justify-between`}>
                <div className="text-xs font-bold opacity-70">0{d.n}</div>
                <div className="text-3xl font-bold tracking-tight">iveo</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">{d.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
