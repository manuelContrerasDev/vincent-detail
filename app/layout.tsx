import type { Metadata } from "next";
import { Poppins, Orbitron, Rajdhani } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import "./globals.css";

const headingFont = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const brandFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "700"],
  display: "swap",
});

const accentFont = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://vincentdetail.cl";
const siteName = "Vincent.Detail";
const siteTitle = "Vincent.Detail | Detailing automotriz en El Monte";
const siteDescription =
  "Servicios de detailing automotriz en El Monte y alrededores: packs de lavado, limpieza interior, pulido, protección y tratamientos cerámicos con atención profesional y cotización directa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  category: "Automotive",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "detailing automotriz",
    "detailing automotriz en El Monte",
    "detailing en Talagante",
    "detailing a domicilio",
    "lavado premium",
    "lavado de autos",
    "tratamiento cerámico",
    "pulido de auto",
    "limpieza interior auto",
    "limpieza de tapiz",
    "protección de pintura",
    "Vincent Detail",
    "Vincent.Detail",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "es_CL",
    siteName,
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vincent.Detail - Detailing automotriz en El Monte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${headingFont.variable} ${bodyFont.variable} ${brandFont.variable} ${accentFont.variable}`}
    >
      <body className="bg-[#050505] font-[family:var(--font-body)] text-white antialiased">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}