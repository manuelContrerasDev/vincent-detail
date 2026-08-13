export type TrackingEvent =
  | "whatsapp_click"
  | "pack_click"
  | "service_click"
  | "contact_click"
  | "social_click"
  | "navigation_click"
  | "mobile_menu_click"
  | "hero_cta_click"
  | "gallery_click"
  | "coverage_click";

type TrackingPayload = {
  label?: string;
  section?: string;
  href?: string;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(event: TrackingEvent, payload?: TrackingPayload) {
  if (process.env.NODE_ENV === "development") {
    console.info("[tracking]", event, payload);
  }

  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", event, {
    event_category: payload?.section ?? "general",
    event_label: payload?.label,
    link_url: payload?.href,
  });
}