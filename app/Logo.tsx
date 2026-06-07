export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="none" stroke="url(#logoGrad)" strokeWidth="2" opacity="0.15" />
      <circle cx="40" cy="40" r="28" fill="none" stroke="url(#logoGrad)" strokeWidth="2" opacity="0.35" />
      <circle cx="40" cy="40" r="19" fill="none" stroke="url(#logoGrad)" strokeWidth="2.5" opacity="0.7" />
      <circle cx="40" cy="40" r="11" fill="url(#logoGrad)" />
      <path d="M 34 43 L 40 36 L 46 43" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoFull({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight">iveo</span>
        <span className="text-[8px] font-semibold tracking-[0.3em] text-gray-500 mt-0.5">N · O · R · W · A · Y</span>
      </div>
    </div>
  );
}
