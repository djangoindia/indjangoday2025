import type { Metadata, Viewport } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const archivoSans = Archivo_Black({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://djangoday.in"),
  title: "DjangoDay India 2025",
  description: "DjangoDay India 2025 - A full-day conference exploring cutting-edge Django techniques, best practices, and community insights.",
  keywords: ["Django", "Python", "DjangoDay", "India", "Conference", "Web Development", "2025"],
  authors: [{ name: "Django India" }],
  creator: "Django India",
  publisher: "Django India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://djangoday.in/",
    title: "DjangoDay India 2025",
    description: "A full-day conference exploring cutting-edge Django techniques, best practices, and community insights.",
    siteName: "DjangoDay India 2025",
    images: [
      {
        url: "/django-day.png",
        width: 1200,
        height: 630,
        alt: "DjangoDay India 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DjangoDay India 2025",
    description: "A full-day conference exploring cutting-edge Django techniques, best practices, and community insights.",
    images: ["/django-day.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S2C4B49K2N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S2C4B49K2N');
          `}
        </Script>
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
        </head>
      <body className={`${archivoSans.className} bg-[#F2ECE4]`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4BTVSLF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
