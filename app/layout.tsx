import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/layout/top-header";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/layout/page-wrapper";
import Script from "next/script"; // Import Script
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SGlite® - Solid Polycarbonate Sheets | Shree Ganesh Polymers",
  description:
    "ISO 9001:2015 certified manufacturer of solid polycarbonate sheets. Premium quality sheets with 100% virgin SABIC and Covestro resin.",
  keywords:
    "polycarbonate sheets, solid sheets, SGlite, plastic extrusion, UV protection, weather resistant",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TopHeader />
        <Navbar />
        <main className="min-h-screen">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <ScrollToTop />
        <WhatsAppButton />
        <Footer />

        {/* Google Translate Script */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  );
}
