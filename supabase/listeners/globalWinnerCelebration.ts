import GlobalListenerProvider from '@/components/providers/globalListenerProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalListenerProvider />
        {children}
      </body>
    </html>
  )
}
