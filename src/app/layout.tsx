import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ui/Providers";
import CustomCursor from "@/components/ui/CustomCursor";
import JsonLd from "@/components/ui/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Portfolio | Syed Amaan Hasan — Developer",
  description: "Passionate Software Developer crafting cutting-edge applications with expertise in full-stack development and AI/ML solutions.",
  authors: [{ name: "Syed Amaan Hasan" }],
  openGraph: {
    title: "Syed Amaan Hasan — Developer",
    description: "Passionate Software Developer crafting cutting-edge applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={clsx(inter.variable, "font-sans antialiased relative min-h-screen")}>
        <div className="bg-noise" />
        <Providers>
          <CustomCursor />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
