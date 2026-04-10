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

const siteUrl = "https://vincentdetail.cl";
const siteName = "Vincent.Detail";
const siteTitle = "Vincent.Detail | Detailing automotriz en El Monte";
const siteDescription =
  "Servicios de detailing automotriz en El Monte y alrededores: packs de lavado, limpieza interior, pulido y tratamientos cerámicos con atención profesional y cotización directa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "detailing automotriz",
    "detailing automotriz en El Monte",
    "lavado premium",
    "tratamiento cerámico",
    "pulido de auto",
    "limpieza de tapiz",
    "Vincent Detail",
    "detailing en Talagante",
    "detailing a domicilio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "es_CL",
    siteName,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      <body className="bg-black font-(--font-body) antialiased text-white">
        {children}
      </body>
    </html>
  );
}