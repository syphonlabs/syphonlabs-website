import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import MobileDisclaimer from '@/components/mobile-disclaimer'

export const metadata: Metadata = {
  title: {
    default: 'Syphon Labs',
    template: '%s | Syphon Labs',
  },
  applicationName: 'Syphon Labs',
  description:
    'AI-powered productivity tools for modern teams. Syphon Draft optimizes resumes and cover letters; Syphon Recruiter streamlines hiring with context-aware, private-by-design automation.',
  keywords: [
    'Syphon Labs',
    'AI',
    'productivity',
    'resume optimization',
    'ATS',
    'recruiting',
    'hiring',
    'context-aware AI',
    'local-first',
    'privacy-first',
    'automation',
  ],
  authors: [{ name: 'Syphon Labs' }],
  creator: 'Syphon Labs',
  publisher: 'Syphon Labs',
  category: 'Technology',
  openGraph: {
    title: 'Syphon Labs',
    description:
      'AI-powered productivity tools: Syphon Draft and Syphon Recruiter. Context-aware, private-by-design automation for modern teams.',
    url: '/',
    siteName: 'Syphon Labs',
    images: [
      {
        url: '/Syphon Labs Logo 2.png',
        width: 512,
        height: 512,
        alt: 'Syphon Labs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syphon Labs',
    description:
      'AI-powered productivity tools: Syphon Draft and Syphon Recruiter. Context-aware, private-by-design automation for modern teams.',
    images: ['/Syphon Labs Logo 2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: '/',
  },
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
      <head>
        {/* Organization structured data */}
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Syphon Labs',
            url: '/',
            logo: '/Syphon Labs Logo 2.png',
            description:
              'AI-powered productivity tools for modern teams. Syphon Draft optimizes resumes and cover letters; Syphon Recruiter streamlines hiring with context-aware, private-by-design automation.',
          })}
        </Script>
        {/* Website structured data with SearchAction (AI search optimization) */}
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Syphon Labs',
            url: '/',
            potentialAction: {
              '@type': 'SearchAction',
              target: '/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body>
        <MobileDisclaimer />
        {children}
      </body>
    </html>
  )
}
