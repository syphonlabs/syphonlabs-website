import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Syphon Labs',
  description: 'AI-powered productivity tools for modern teams.',
  icons: {
    icon: ['/Syphon Labs Logo 2.png'],
    shortcut: ['/Syphon Labs Logo 2.png'],
    apple: ['/Syphon Labs Logo 2.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
