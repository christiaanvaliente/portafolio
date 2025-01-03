import type { Metadata } from "next";
import {Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christiaan Valiente Software Developer",
  description: "Landing page Christiaan Valiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header /><div className="mt-4">
        {children}
</div>

</body>
    </html>
  );
}
