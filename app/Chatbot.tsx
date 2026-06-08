"use client";

import { useState, useEffect, useRef } from "react";

type Message = { role: "bot" | "user"; text: string };

const WELCOME: Message = {
  role: "bot",
  text: "Hei! 👋 Jeg er Iver, AI-assistenten til Iveo. Jeg kan svare på spørsmål om tjenestene våre, hjelpe deg booke møte, eller bare prate om hva slags nettside du drømmer om. Hva er på sinnet?",
};

const QUICK_REPLIES = [
  "Hva koster en nettside?",
  "Hvor lang tid tar det?",
  "Jeg vil booke et møte",
  "Hva er inkludert?",
];

const STORAGE_KEY = "iveo-chat-history";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [unread, setUnread] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Save history on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Show bubble after delay
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setUnread(0);
    }
  }, [open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
      if (!open) setUnread((u) => u + 1);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Beklager, noe gikk galt 😕 Ring oss på +47 484 72 586 eller send e-post til sondrebakkejord@gmail.com." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setMessages([WELCOME]);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Show quick replies only at the start
  const showQuickReplies = messages.length === 1 && !loading;

  return (
    <>
      {/* Speech bubble */}
      {!open && showBubble && (
        <div
          className="fixed bottom-24 right-6 z-40 glass rounded-2xl px-4 py-3 shadow-2xl border border-white/60 animate-fade-up cursor-pointer max-w-[220px]"
          onClick={() => {
            setOpen(true);
            setShowBubble(false);
          }}
        >
          <div className="text-sm font-medium">Snakk med Iver 💬</div>
          <div className="text-xs text-gray-500 mt-0.5">AI-assistent · svarer 24/7</div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 glass border-r border-b border-white/60 rotate-45" />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Chat"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 rounded-full border-2 border-white text-white text-xs font-bold flex items-center justify-center animate-pulse">
            {unread}
          </span>
        )}
        {!open && unread === 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm h-[560px] rounded-3xl glass border border-white/60 shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg border border-white/30">
                  Iv
                </div>
                <div>
                  <div className="font-semibold text-base">Iver</div>
                  <div className="text-xs text-white/80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online · svarer på sekunder
                  </div>
                </div>
              </div>
              <button
                onClick={reset}
                className="text-white/70 hover:text-white text-xs underline opacity-70 hover:opacity-100"
                title="Start ny samtale"
              >
                Ny
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white/40 to-indigo-50/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-indigo-600 to-cyan-500 text-white rounded-br-sm shadow-md"
                      : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 border border-gray-100 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse-soft" style={{ animationDuration: "1.2s" }} />
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse-soft" style={{ animationDuration: "1.2s", animationDelay: "200ms" }} />
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse-soft" style={{ animationDuration: "1.2s", animationDelay: "400ms" }} />
                </div>
              </div>
            )}

            {/* Quick reply chips */}
            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="px-3 py-1.5 text-xs bg-white border border-indigo-200 text-indigo-600 rounded-full hover:bg-indigo-50 hover:scale-105 transition-all shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/40 bg-white/80 backdrop-blur-sm">
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Skriv en melding..."
                disabled={loading}
                className="flex-1 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:opacity-50"
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center hover:scale-110 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md"
                aria-label="Send"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="text-[10px] text-gray-400 text-center mt-2">
              Drevet av AI · Svar kan inneholde feil
            </div>
          </div>
        </div>
      )}
    </>
  );
}
