import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Goldstar Executive - Premium Chauffeur Service",
  description: "Executive car and chauffeur service covering Surrey, London and the home counties. Professional airport transfers, corporate travel, and wedding cars.",
  keywords: "chauffeur service, executive car, airport transfer, Surrey, London, wedding cars, corporate travel",
  openGraph: {
    title: "Goldstar Executive - Premium Chauffeur Service",
    description: "Executive car and chauffeur service covering Surrey, London and the home counties.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
