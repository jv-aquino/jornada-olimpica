import type { Metadata } from "next";
import { Montserrat, Merriweather, Anton } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Jornada Olímpica",
  description: "Acompanhe a jornada dos atletas brasileiros nos mais variados esportes dentro e fora das Olimpíadas.",
};

const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-mont' });
const anton = Anton({ subsets: ["latin"], weight: ['400'], variable: '--font-anton' });
const merriweather = Merriweather({ subsets: ["latin"], weight: ['300', '400', '700'], variable: '--font-merri' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${merriweather.variable} ${anton.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
