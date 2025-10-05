import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Hrishank Chhatbar - Software Engineer & Cloud Architect',
    template: '%s | Hrishank Chhatbar'
  },
  description: 'Software Engineer & Cloud Architect specializing in scalable infrastructure and backend services. USC Graduate Student.',
  keywords: [
    'Software Engineer',
    'Cloud Architect',
    'AWS',
    'Backend Development',
    'USC',
    'Engineering Management',
    'Business Analytics',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Docker',
    'Kubernetes'
  ],
  authors: [{ name: 'Hrishank Chhatbar' }],
  creator: 'Hrishank Chhatbar',
  publisher: 'Hrishank Chhatbar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hrishankchhatbar.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hrishankchhatbar.netlify.app',
    title: 'Hrishank Chhatbar - Software Engineer & Cloud Architect',
    description: 'Software Engineer & Cloud Architect specializing in scalable infrastructure and backend services.',
    siteName: 'Hrishank Chhatbar Portfolio',
    images: [
      {
        url: 'public/icons/HC_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Hrishank Chhatbar logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hrishank Chhatbar - Software Engineer & Cloud Architect',
    description: 'Software Engineer & Cloud Architect specializing in scalable infrastructure and backend services.',
    images: ['/assets/HC_logo.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  category: 'technology',
  icons: {
    icon: 'public/icons/HC_logo.jpg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hrishank Chhatbar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
