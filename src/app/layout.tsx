import type { Metadata } from "next";
import "./styles/globals.css";

import { Montserrat, Oswald, Bellota_Text } from "next/font/google";
// import { Navbar } from "@/components/Navbar/Navbar";

const oswald = Oswald({
  weight: ["500"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-heading",
});

const montserrat = Montserrat({
  style: "normal",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-primary",
});

const bellota_text = Bellota_Text({
  style: "normal",
  weight: ["400"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Студия комплексной автоматизации бизнеса ComplexCase",
  description: "Студия комплексной автоматизации бизнеса ComplexCase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oswald.variable} ${bellota_text.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

