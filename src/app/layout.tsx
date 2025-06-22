"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../../components/AuthProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BannerSliderClient from "../../components/BannerSliderClient";
import HomeBenefits from "../../components/HomeBenefits";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Zistí, či je používateľ prihlásený (len na klientovi)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(!!localStorage.getItem("user"));
      const handler = () => setIsLoggedIn(!!localStorage.getItem("user"));
      window.addEventListener("login-status-change", handler);
      return () => window.removeEventListener("login-status-change", handler);
    }
  }, []);

  // Skryje navigáciu, slider, benefity a footer ak nie je prihlásený
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoggedIn && <Navbar />}
        {isLoggedIn && <BannerSliderClient />}
        {isLoggedIn && <HomeBenefits />}
        <AuthProvider>{children}</AuthProvider>
        {isLoggedIn && <Footer />}
      </body>
    </html>
  );
}
