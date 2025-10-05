'use client'

import Navbar from './layout/Navbar'
import ThemeToggle from './ui/ThemeToggle'
import ScrollProgress from './ui/ScrollProgress'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress />
      <ThemeToggle />
      <Navbar />
      {children}
    </>
  )
}
