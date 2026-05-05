export {};

type GtagEventParams = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: unknown[];

    gtag?: {
      (command: "js", date: Date): void;

      (
        command: "config",
        measurementId: string,
        params?: GtagEventParams
      ): void;

      (
        command: "event",
        eventName: string,
        params?: GtagEventParams
      ): void;
    };
  }
}