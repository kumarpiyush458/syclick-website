import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import StructuredData from "@/components/seo/StructuredData";
import ClarityProvider from "@/components/ClarityProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getsyclick.com"),

  title: {
    default: "Syclick | AI Employees for Healthcare",
    template: "%s | Syclick",
  },

  description:
    "Syclick provides AI-powered front desk employees that answer calls, schedule appointments, automate patient communication, and help healthcare providers deliver exceptional patient experiences 24/7.",

  keywords: [
    "AI receptionist",
    "AI front desk",
    "Healthcare AI",
    "Medical AI receptionist",
    "AI appointment scheduling",
    "Hospital AI",
    "Clinic AI",
    "Voice AI",
    "AI employee",
    "Healthcare automation",
    "Medical call answering",
    "Virtual receptionist",
    "Healthcare customer service",
    "Syclick",
  ],

  authors: [
    {
      name: "Syclick",
      url: "https://getsyclick.com",
    },
  ],

  creator: "Syclick",
  publisher: "Syclick",

  applicationName: "Syclick",

  category: "Business",

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getsyclick.com",
    siteName: "Syclick",

    title: "Syclick | AI Employees for Healthcare",

    description:
      "AI-powered front desk employees that answer calls, schedule appointments, and automate patient communication for healthcare providers.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syclick - AI Employees for Healthcare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Syclick | AI Employees for Healthcare",

    description:
      "AI-powered front desk employees that answer calls, schedule appointments, and automate patient communication.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://getsyclick.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050816] text-white antialiased">
        <StructuredData />

        <GoogleAnalytics gaId="G-7WFJY3NKNY" />

        <ClarityProvider />

        {children}
      </body>
    </html>
  );
}