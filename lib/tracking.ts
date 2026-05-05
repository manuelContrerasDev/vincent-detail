export type TrackingEvent =
  | "whatsapp_click"
  | "pack_click"
  | "service_click"
  | "contact_click"
  | "social_click";

type TrackingPayload = {
  label?: string;
  section?: string;
  href?: string;
};

export function trackEvent(event: TrackingEvent, payload?: TrackingPayload) {
  if (process.env.NODE_ENV === "development") {
    console.info("[tracking]", event, payload);
  }

  if (typeof window === "undefined") return;

  // Google Analytics / gtag futuro
  window.gtag?.("event", event, {
    event_category: payload?.section ?? "general",
    event_label: payload?.label,
    link_url: payload?.href,
  });
}