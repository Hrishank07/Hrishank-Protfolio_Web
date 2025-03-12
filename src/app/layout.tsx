import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';
import type { Metadata } from 'next';
import ClientThemeProvider from '../components/ClientThemeProvider';

export const metadata: Metadata = {
  title: 'Hrishank Portfolio',
  description: 'Personal portfolio website of Hrishank',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className="font-inter antialiased" suppressHydrationWarning>
        <ClientThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
