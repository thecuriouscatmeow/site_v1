import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
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
  metadataBase: new URL("https://saahilbasak.com"),
  title: "Saahil Basak — Backend & Systems Engineer",
  description:
    "Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.",
  openGraph: {
    title: "Saahil Basak — Backend & Systems Engineer",
    description:
      "Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    url: "https://saahilbasak.com",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://saahilbasak.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
