import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Script from 'next/script'

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
      <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W4BTVSLF');
            `,
          }}
        />
      <body className={`${archivoSans.className} bg-[#F2ECE4]`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4BTVSLF"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Image src="/sprinkle.svg" alt="App Background" fill />
        {children}
      </body>
    </html>
  );
}
