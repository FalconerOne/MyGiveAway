// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toast'
import GlobalListenerProvider from '@/providers/GlobalListenerProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyGiveAway App',
  description:
    "Join, Win, and track GiveAways that Delight's You & Support's Charity.",
  manifest: '/manifest.json',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* 🔊 GlobalListenerProvider: Enables realtime winner popups + confetti everywhere */}
        <GlobalListenerProvider>
          {children}
          <Toaster />
        </GlobalListenerProvider>
      </body>
    </html>
  )
}
