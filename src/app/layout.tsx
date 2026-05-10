import type { Metadata } from "next";
import { Inter, Playfair_Display, MonteCarlo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const luxuryScript = MonteCarlo({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-luxury" 
});

export const metadata: Metadata = {
  title: "Pamoja Africa - Luxury Hotel & Accommodations",
  description: "Where nature meets luxury. Explore our collection of luxury accommodations and unforgettable African safari experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${luxuryScript.variable} font-sans antialiased min-h-screen flex flex-col pt-0`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
