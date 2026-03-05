import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Update these if needed
const SITE_NAME = "OneRoutine";
const SITE_URL = "https://oneroutine.one";
const OG_IMAGE = "/og-image.png"; // put the file in /public/og-image.png

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "OneRoutine — AI Routine Planner",
    template: "%s — OneRoutine",
  },
  description:
    "Plan your life, one routine at a time. AI helps turn intentions into simple daily routines.",
  applicationName: SITE_NAME,
  verification: {
    google: "nVlfTCGUxKgEeNZZp0Mm6BcCqWHh7Wg94_iZ5tfr6gk",
  },
  keywords: [
    "routine",
    "routine planner",
    "habit",
    "habit tracker",
    "daily routine",
    "productivity",
    "AI routine planner",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "OneRoutine — Plan your life, one routine at a time",
    description: "A minimal AI-powered routine planner for sustainable daily action.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "OneRoutine — Plan your life, one routine at a time",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "OneRoutine — Plan your life, one routine at a time",
    description: "A minimal AI-powered routine planner for sustainable daily action.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    // 如果你之後有 png icon，可再加：
    // icon: [{ url: "/icon.png", type: "image/png" }],
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}