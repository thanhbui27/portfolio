import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/portfolio-service";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"]
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700", "800"]
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"]
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();

  return {
    title: config.title,
    description: config.description,
    metadataBase: new URL(config.url),
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website",
      url: config.url
    }
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
