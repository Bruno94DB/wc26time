import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.wc26time.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WC26 Time — World Cup 2026 Match Schedule & Local Kickoff Times",
    template: "%s — WC26 Time",
  },
  description:
    "View the World Cup 2026 match schedule in your local timezone. Live countdowns, fixtures and match kickoff times.",
  keywords: [
    "World Cup 2026", "FIFA World Cup 2026", "WC26", "football schedule",
    "match times", "timezone converter", "kickoff times", "USA Canada Mexico",
  ],
  authors: [{ name: "WC26 Time" }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "WC26 Time — World Cup 2026 Match Schedule & Local Kickoff Times",
    description:
      "View the World Cup 2026 match schedule in your local timezone. Live countdowns, fixtures and match kickoff times.",
    siteName: "WC26 Time",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WC26 Time — World Cup 2026 Match Schedule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WC26 Time — World Cup 2026 Match Schedule & Local Kickoff Times",
    description:
      "View the World Cup 2026 match schedule in your local timezone. Live countdowns, fixtures and match kickoff times.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-navy-950 text-white flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <MobileBottomNav />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
