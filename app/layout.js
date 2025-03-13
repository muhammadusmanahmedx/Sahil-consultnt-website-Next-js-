"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(pages)/components/Header";
import Footer from "./(pages)/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='{inter.className} bg-white'>
        <Header />
        <main className="">{children}</main>

        {/* WhatsApp Floating Button */}
        <a href="https://wa.me/923316120479?text=Hello,%20I%20want%20to%20contact%20you!" 
           target="_blank" 
           className="whatsapp-float z-20 p-2">
          <img src="/whatsapp.png" alt="WhatsApp" width="35" height="35" />
        </a>

        <Footer />
      </body>
    </html>
  );
}
