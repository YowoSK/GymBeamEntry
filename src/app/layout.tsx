import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../../components/AuthProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BannerSliderClient from "../../components/BannerSliderClient";
import HomeBenefits from "../../components/HomeBenefits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymBeam",
  description: "GymBeam app",
};

function isLoginPath() {
  if (typeof window !== "undefined") {
    return window.location.pathname === "/login";
  }
  if (typeof global !== "undefined" && global.location) {
    return global.location.pathname === "/login";
  }
  return false;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <BannerSliderClient />
        <HomeBenefits />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
