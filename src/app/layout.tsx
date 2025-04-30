import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// Environment variable for GA4 ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "PearlyWrites - SEO Marketing & Content Strategy",
  description: "Professional SEO, content development, content marketing, and strategy services for businesses of all sizes.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  // manifest: '/site.webmanifest', // not needed for now
  applicationName: 'PearlyWrites',
  appleWebApp: {
    capable: true,
    title: 'PearlyWrites',
    statusBarStyle: 'default'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script 
              strategy="afterInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script 
              id="gtag-init" 
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
        {/* Other head elements */}
      </head>
      <body className={`${inter.className} h-full`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Navigation />
            <main className="flex-grow pt-[var(--header-height)]">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
