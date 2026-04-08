import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Orbitron,
  Rajdhani,
} from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const brandFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "700"],
});

const accentFont = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vincentdetail.cl"),
  title: "Vincent.Detail | Detailing automotriz",
  description:
    "Servicios de detailing automotriz, packs de lavado, limpieza interior, pulido y tratamientos cerámicos con atención profesional y cotización directa.",
  applicationName: "Vincent.Detail",
  keywords: [
    "detailing automotriz",
    "lavado premium",
    "tratamiento cerámico",
    "pulido de auto",
    "limpieza de tapiz",
    "Vincent Detail",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vincent.Detail | Detailing automotriz",
    description:
      "Packs y servicios de detailing automotriz, limpieza interior, pulido y tratamientos cerámicos.",
    type: "website",
    locale: "es_CL",
    siteName: "Vincent.Detail",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent.Detail | Detailing automotriz",
    description:
      "Packs y servicios de detailing automotriz, limpieza interior, pulido y tratamientos cerámicos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${headingFont.variable} ${bodyFont.variable} ${brandFont.variable} ${accentFont.variable}`}
    >
      <body className="antialiased font-[family:var(--font-body)] bg-black text-white">
        {children}
      </body>
    </html>
  );
}