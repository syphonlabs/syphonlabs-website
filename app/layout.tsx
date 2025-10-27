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
    'Syphon Labs creates AI powered productivity tools . Transform your work with context-aware AI that understands intent and amplifies impact .',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        {/* Favicon links for better browser compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Organization structured data */}
        <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Syphon Labs',
            url: '/',
            logo: '/Syphon Labs Logo 2.png',
            description:
              'At Syphon Labs , we make AI that works for people. Tools that understand you, and make your best self impossible to miss. Powered By Syphon AI, our proprietary context engine that connects the dots others miss.',
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
        {/* Software Application Schema */}
        <Script id="ld-json-software" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Syphon Draft',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web Browser',
            description: 'AI-powered resume and cover letter optimization tool',
            url: '/draft',
            author: {
              '@type': 'Organization',
              name: 'Syphon Labs',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
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
