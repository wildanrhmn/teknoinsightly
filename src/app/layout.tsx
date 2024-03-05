import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/ui/header/Header";
import { HeaderProvider } from "@/lib/context/HeaderContext";
import Footer from "@/ui/footer/Footer";

import Providers from "@/utils/ProgressBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TeknoInsight - Your Most Reliable Technology Blog",
    template: "%s | TeknoInsight",
  },
  description:
    "Find the latest articles, and tutorials of technology on TeknoInsight!",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://teknoinsight.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <Providers>
          <HeaderProvider>
            <Header />
          </HeaderProvider>
          <main className="pt-[60px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
