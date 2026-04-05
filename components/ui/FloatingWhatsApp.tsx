"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl("Hola, quiero más información sobre los servicios de Vincent.Detail.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-60 inline-flex items-center gap-3 rounded-full border border-[#E5C96B]/25 bg-[linear-gradient(135deg,#E5C96B_0%,#C9A227_45%,#8A6A12_100%)] px-5 py-3 text-sm font-medium text-black shadow-2xl shadow-black/30 transition duration-300 hover:scale-[1.02]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}