import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "WC 2026 · Match Schedule & Time Converter",
    template: "%s · WC 2026",
  },
  description:
    "World Cup 2026 match schedule with automatic timezone conversion. Never miss a kickoff — all times displayed in your local timezone.",
  keywords: ["World Cup 2026", "football schedule", "match times", "timezone converter", "FIFA 2026"],
  authors: [{ name: "WC2026 Schedule" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "WC 2026 · Match Schedule & Time Converter",
    description:
      "World Cup 2026 match schedule with automatic local timezone conversion.",
    siteName: "WC 2026 Schedule",
  },
  twitter: {
    card: "summary_large_image",
    title: "WC 2026 · Match Schedule & Time Converter",
    description: "Full World Cup 2026 schedule with times in your timezone.",
  },
  robots: {
    index: true,
    follow: true,
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
        </ThemeProvider>
      </body>
    </html>
  );
}
