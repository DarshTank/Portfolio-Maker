// app/layout.tsx (Root Layout)
import type { Metadata } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Personal Portfolio Maker",
  description: "Generated using Next.js", // Fixed typo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" /> {/* Fixed favicon path */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
