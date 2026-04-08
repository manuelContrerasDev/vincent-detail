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
      className="fixed bottom-5 right-5 z-60 inline-flex items-center gap-3 rounded-full border border-[#25D366]/30 bg-[linear-gradient(135deg,#25D366_0%,#20BD5A_45%,#128C7E_100%)] px-5 py-3 text-sm font-semibold text-black shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:scale-[1.02] hover:brightness-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}