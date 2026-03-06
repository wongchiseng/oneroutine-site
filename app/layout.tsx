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

const SITE_NAME = "OneRoutine";
const SITE_URL = "https://oneroutine.one";
const OG_IMAGE = "/og-image.png"; // /public/og-image.png

const TITLE = "OneRoutine — AI Routine Planner";
const DESCRIPTION =
  "Plan your life, one routine at a time. AI helps turn intentions into simple daily routines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    // 如果你有 X 帳號，建議加上（沒有也可以先註解）
    // site: "@oneroutine",
    // creator: "@oneroutine",
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
    // 如果你之後有更正式的 favicon，可以加：
    // shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },

  // 可選：如果你之後做 PWA / 安裝到桌面
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}