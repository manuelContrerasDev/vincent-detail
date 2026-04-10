import { siteConfig } from "@/content/site";

export function getWhatsAppUrl(message?: string): string {
  const phone = siteConfig.whatsapp;
  const baseUrl = `https://wa.me/${phone}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}