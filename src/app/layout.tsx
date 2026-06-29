import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deedpolluk.uk"),

  // 54 characters — within the 50–60 target
  title: {
    template: "%s | Deed Poll UK",
    default: "Deed Poll UK — Change Your Name Legally Online",
  },

  // 146 characters — within the 120–160 target
  description:
    "Create a legally valid UK deed poll online in minutes. Change your first name, surname, or full name and update your passport, driving licence, and bank accounts.",

  alternates: {
    canonical: "/",
    // hreflang — tells Google this page targets British English speakers
    languages: {
      "en-GB": "/",
      "x-default": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    siteName: "Deed Poll UK",
    title: "Deed Poll UK — Change Your Name Legally Online",
    description:
      "Create a legally valid UK deed poll online in minutes. Change your first name, surname, or full name and update your passport, driving licence, and bank accounts.",
    url: "https://deedpolluk.uk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deed Poll UK — Change Your Name Legally Online",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deed Poll UK — Change Your Name Legally Online",
    description:
      "Create a legally valid UK deed poll online in minutes. Change your first name, surname, or full name and update your passport, driving licence, and bank accounts.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-white text-[#0b0c0c]`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#0b0c0c] font-sans"
        suppressHydrationWarning
      >
        {/* Skip-to-content — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#ffdd00] focus:text-[#0b0c0c] focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","xb193p6whe");`}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J1MBSHGTHD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-J1MBSHGTHD',{anonymize_ip:true});`}
        </Script>

        {/* Organisation schema — site-wide */}
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Deed Poll UK",
            url: "https://deedpolluk.uk",
            logo: "https://deedpolluk.uk/og-image.jpg",
            description:
              "Official UK deed poll service. Create a legally valid deed poll online to change your name in the UK.",
            areaServed: {
              "@type": "Country",
              name: "United Kingdom",
            },
            serviceType: "Deed Poll",
          })}
        </Script>

        <Header />
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}