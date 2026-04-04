import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://crownautotrading.com.au'),
  title: {
    default: 'Crown Auto Trading | Premium Used Cars Melbourne | Buy & Sell Cars Tarneit',
    template: '%s | Crown Auto Trading',
  },
  description:
    'Crown Auto Trading offers premium quality used cars, professional auto repairs, and expert vehicle trading services in Tarneit, Melbourne. Browse our inventory of luxury and performance vehicles.',
  keywords: [
    'used cars Melbourne',
    'buy used cars Tarneit',
    'sell my car Melbourne',
    'auto trading Tarneit',
    'car repairs Melbourne',
    'Crown Auto Trading',
    'luxury cars for sale',
    'affordable used cars',
    'pre-owned vehicles Melbourne',
    'car dealer Tarneit 3029',
  ],
  authors: [{ name: 'Crown Auto Trading' }],
  creator: 'Crown Auto Trading',
  publisher: 'Crown Auto Trading',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://crownautotrading.com.au',
    siteName: 'Crown Auto Trading',
    title: 'Crown Auto Trading | Premium Used Cars Melbourne',
    description:
      'Your trusted destination for quality used cars, professional auto repairs, and expert vehicle trading in Tarneit, Melbourne.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crown Auto Trading - Premium Used Cars Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crown Auto Trading | Premium Used Cars Melbourne',
    description:
      'Quality used cars, professional auto repairs, and expert vehicle trading in Tarneit, Melbourne.',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://crownautotrading.com.au',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: 'Crown Auto Trading',
              description:
                'Premium used car dealer and auto repair services in Tarneit, Melbourne',
              url: 'https://crownautotrading.com.au',
              telephone: '0450758282',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '37 Corners Drive',
                addressLocality: 'Tarneit',
                postalCode: '3029',
                addressCountry: 'AU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -37.8136,
                longitude: 144.9631,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="bg-crown-lowest font-body text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
