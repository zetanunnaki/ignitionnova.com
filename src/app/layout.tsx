import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { ChatWidget } from "@/components/ChatWidget";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ignitionnova.com"),
  title: {
    default: "Ignition Nova | Elite Digital Marketing Agency",
    template: "%s | Ignition Nova",
  },
  description:
    "We guarantee to significantly increase your organic traffic and lead generation within 150 days. Technical SEO, GEO, Web Development & CRO experts.",
  keywords: [
    "digital marketing agency",
    "SEO agency",
    "generative engine optimization",
    "technical SEO",
    "web development",
    "CRO",
    "conversion rate optimization",
    "AI search optimization",
    "core web vitals",
    "lead generation",
  ],
  alternates: {
    canonical: "https://www.ignitionnova.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ignitionnova.com",
    siteName: "Ignition Nova",
    title: "Ignition Nova | Elite Digital Marketing Agency",
    description:
      "We guarantee to significantly increase your organic traffic and lead generation within 150 days.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ignition Nova - Elite Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ignitionnova",
    creator: "@ignitionnova",
    title: "Ignition Nova | Elite Digital Marketing Agency",
    description:
      "We guarantee to significantly increase your organic traffic and lead generation within 150 days.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "theme-color": "#0a0e1a",
    "color-scheme": "light",
    "msapplication-TileColor": "#0a0e1a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preload" href="/images/hero.webp" as="image" type="image/webp" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4Z5CH3PPXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4Z5CH3PPXX');`}
        </Script>
        <StructuredData type="organization" />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
