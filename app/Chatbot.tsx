"use client";

import { useState, useEffect, useRef } from "react";

type Message = { role: "bot" | "user"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hei! 👋 Jeg er Iveo-assistenten. Hvordan kan jeg hjelpe deg i dag?" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "Takk for meldingen! En av oss tar kontakt så snart som mulig. Du kan også ringe oss på 484 72 586 eller sende e-post til kontakt@iveo.no.";

      if (lower.includes("pris") || lower.includes("kost")) {
        reply = "Prisene våre tilpasses prosjektet. Book gjerne et gratis møte så finner vi riktig løsning for deg!";
      } else if (lower.includes("hei") || lower.includes("hallo") || lower.includes("hi")) {
        reply = "Hei! Hyggelig å høre fra deg 😊 Hva kan jeg hjelpe med?";
      } else if (lower.includes("ai") || lower.includes("kunstig")) {
        reply = "AI-løsningene våre kommer snart! Vi jobber med chatbots, automatisering og skreddersydde modeller.";
      } else if (lower.includes("hosting")) {
        reply = "Vi tilbyr pålitelig hosting med 99.9% oppetid, SSL og daglig backup — alt inkludert når vi bygger nettsiden din.";
      } else if (lower.includes("møte") || lower.includes("book")) {
        reply = "Så hyggelig! Du kan ringe 484 72 586 eller sende oss en e-post på kontakt@iveo.no, så finner vi et tidspunkt.";
      }

      setMessages((m) => [...m, { role: "bot", text: reply }]);
    }, 700);
  };

  return (
    <>
      {/* Speech bubble */}
      {!open && showBubble && (
        <div
          className="fixed bottom-24 right-6 z-40 glass rounded-2xl px-4 py-3 shadow-2xl border border-white/60 animate-fade-up cursor-pointer max-w-[200px]"
          onClick={() => {
            setOpen(true);
            setShowBubble(false);
          }}
        >
          <div className="text-sm font-medium">Snakk med meg 💬</div>
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
        {!open && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm h-[500px] rounded-3xl glass border border-white/60 shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                I
              </div>
              <div>
                <div className="font-semibold">Iveo Assistent</div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  Online
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-indigo-600 to-cyan-500 text-white rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/40 bg-white/60 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Skriv en melding..."
              className="flex-1 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={sendMessage}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center hover:scale-110 transition"
              aria-label="Send"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
