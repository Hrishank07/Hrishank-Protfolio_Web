import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import CustomCursor from '../components/ui/CustomCursor'
import ThemeToggle from '../components/ui/ThemeToggle'
import ScrollProgress from '../components/ui/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hrishank Chhatbar - Software Engineer',
  description: 'Software Engineer & Cloud Architect specializing in scalable infrastructure and backend services.',
  keywords: 'software engineer, cloud architect, AWS, full stack developer',
  openGraph: {
    title: 'Hrishank Chhatbar - Software Engineer',
    description: 'Building scalable infrastructure and elegant solutions',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <CustomCursor />
        <ThemeToggle />
        <Navbar />
        {children}
      </body>
    </html>
  )
}