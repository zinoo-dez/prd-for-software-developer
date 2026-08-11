import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRD Guide in Myanmar",
  description: "A comprehensive guide to writing Product Requirements Documents in Burmese.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex min-h-screen`}
      >
        <Sidebar />
        <main className="flex-1 min-w-0 max-w-full">
          {/* Mobile Header */}
          <div className="md:hidden p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
            <h1 className="font-bold text-lg text-blue-600">PRD Guide (MM)</h1>
          </div>
          
          <div className="p-6 md:p-12 lg:px-24 max-w-4xl mx-auto w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
