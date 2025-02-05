import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-inter antialiased`}
      >
        <header className="bg-red-300 h-14 row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Header
        </header>
        <main>{children}</main>
        <footer className="bg-yellow-400 row-start-3 flex gap-6 flex-wrap h-32 items-center justify-center">
          Footer
        </footer>{" "}
      </body>
    </html>
  );
}
