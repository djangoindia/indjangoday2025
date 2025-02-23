import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const archivoSans = Archivo_Black({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Indjangoday 2025",
  description: "Indian Django Day 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoSans.className} bg-[#F2ECE4]`}>
        <Image src="/sprinkle.svg" alt="App Background" fill />
        {children}
      </body>
    </html>
  );
}
