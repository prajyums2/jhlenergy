import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingButtons from "@/components/FloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JHL Energy LLP - Powering a Sustainable Future",
  description:
    "Your trusted partner for On-Grid, Off-Grid, and Solar Water Heating solutions across India. MNRE approved national vendor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Keep head empty or for low-level meta tags only. 
          Next.js Script component handles its own injection. 
      */}
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          inter.variable
        )}
      >
        {/* 1. Google Ads (gtag.js) - Moved inside body */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18051535071"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051535071');
          `}
        </Script>

        {/* 2. Google Tag Manager (GTM) */}
<Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5LFZ8JDD');
  `}
</Script>

        {/* 3. GTM (noscript) */}
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5LFZ8JDD"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>

        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}