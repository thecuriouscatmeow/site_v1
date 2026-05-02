import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AbSessionCapture } from "@/components/ui/AbSessionCapture";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://saahilbasak.vercel.app")
  ),
  title: "Saahil Basak — Backend & Systems Engineer",
  description:
    "Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Saahil Basak — Backend & Systems Engineer",
    description:
      "Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <AbSessionCapture />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
