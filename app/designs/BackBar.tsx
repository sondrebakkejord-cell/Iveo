import Link from "next/link";

export function BackBar({ name, n, dark = false }: { name: string; n: number; dark?: boolean }) {
  return (
    <div className={`fixed top-4 left-4 z-[100] px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur ${dark ? "bg-white/10 text-white border border-white/20" : "bg-slate-900/90 text-white"}`}>
      <Link href="/designs" className="hover:opacity-80">← Tilbake</Link>
      <span className="mx-2 opacity-50">·</span>
      <span>Design 0{n}: {name}</span>
    </div>
  );
}
