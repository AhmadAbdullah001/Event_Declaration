import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/footer'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const SITE_URL = 'https://ectc2026.org'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ECTC 2026 - Emergency Critical Care and Trauma Conference | Kathmandu, Nepal',
    template: '%s | ECTC 2026',
  },
  description: 'Join 500+ physicians, nurses, and trauma specialists at ECTC 2026 in Kathmandu, Nepal (March 24-27). Clinical workshops, keynote sessions, and healthcare networking in emergency medicine and critical care.',
  keywords: [
    'emergency medicine conference',
    'critical care conference 2026',
    'trauma conference Nepal',
    'ECTC 2026',
    'emergency care conference Kathmandu',
    'medical conference Nepal 2026',
    'emergency physicians conference',
    'ICU conference',
    'trauma management workshop',
    'critical care training',
    'healthcare networking Nepal',
    'emergency medicine CME',
    'trauma resuscitation workshop',
    'emergency critical care',
  ],
  authors: [{ name: 'ECTC 2026 Organizing Committee' }],
  creator: 'ECTC 2026',
  publisher: 'Emergency Critical Care and Trauma Conference',
  icons: {
    icon: [
      { url: '/images/Icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'ECTC 2026 - Emergency Critical Care and Trauma Conference',
    title: 'ECTC 2026 - Emergency Critical Care and Trauma Conference | March 24-27, Kathmandu',
    description: 'Join 500+ physicians, nurses, and trauma specialists at ECTC 2026 in Kathmandu, Nepal. Clinical workshops, keynote sessions, and healthcare networking in emergency medicine and critical care.',
    images: [
      {
        url: '/images/bg.jpg',
        width: 1200,
        height: 630,
        alt: 'ECTC 2026 - Emergency Critical Care and Trauma Conference in Kathmandu, Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECTC 2026 - Emergency Critical Care and Trauma Conference',
    description: 'Join 500+ physicians, nurses, and trauma specialists at ECTC 2026 in Kathmandu, Nepal. March 24-27, 2026.',
    images: ['/images/bg.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
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
    google: 'eksECV2rCG_vHoEHk8-ktfshjNcyPsIPvJzIOUt9DA0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
