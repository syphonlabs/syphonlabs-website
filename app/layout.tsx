import type { Metadata } from 'next'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Syphon Labs',
    template: '%s | Syphon Labs',
  },
  applicationName: 'Syphon Labs',
  description:
    'Syphon Labs creates AI-powered productivity tools including Draft for resume optimization and Recruiter for hiring. Transform your work with context-aware AI that understands intent and amplifies productivity.',
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
      'Syphon Labs creates tools that understand intent and amplify productivity, helping people and teams move from idea to impact with clarity.',
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
      'Syphon Labs creates tools that understand intent and amplify productivity, helping people and teams move from idea to impact with clarity.',
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
              'We make AI that works for people. Tools that understand you, and make your best self impossible to miss. Powered By Syphon AI, our proprietary context engine that connects the dots others miss.',
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
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  )
}
