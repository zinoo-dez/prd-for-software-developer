import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "PRD Guide — Professional Product Documentation",
  description:
    "A comprehensive guide to writing Product Requirements Documents and essential software product deliverables for engineering teams.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "PRD Guide — Professional Product Documentation",
    description: "A comprehensive guide to writing Product Requirements Documents and essential software product deliverables for engineering teams.",
    url: "https://prd-guide.example.com", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'PRD Guide Open Graph Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} style={{ background: '#F9FAFB' }}>
        <LanguageProvider>
          <Navbar />
          <main className="page-wrapper">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
              {children}
            </div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
