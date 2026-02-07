import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import MobileBottomNav from "./components/MobileBottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CVT Logistics - Global Logistics & Transport Services",
  description: "Reliable road, sea, air, and rail transport solutions connecting continents.",
  verification: {
    google: "3MG9_FSEpOEMpJKKdoZ_cOqDAl5fgWXt7HLCAEK8OMM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-16 md:pb-0`}
      >
        <LanguageProvider>
          {children}
          <MobileBottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
