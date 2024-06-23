import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

import localFont from "@next/font/local";

const figtree = Figtree({ subsets: ["latin"] });

// const gtWalsheim = localFont({
//   src: "../public/fonts/gt/GT-Walsheim-Medium.otf",
//   variable: "--font-custom",
// });

export const metadata: Metadata = {
  title: "Union",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* <body className={`${figtree.className} ${gtWalsheim.variable}`}> */}
      <body className={`${figtree.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
