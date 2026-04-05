import { siteConfig } from "@/content/site";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;

  if (!message) return base;

  return `${base}?text=${encodeURIComponent(message)}`;
}