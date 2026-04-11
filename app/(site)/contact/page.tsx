import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Crown Auto Trading | Melbourne Car Dealer Tarneit VIC 3029',
  description:
    'Contact Crown Auto Trading in Tarneit, Melbourne. Call 0450 758 282, visit us at 37 Corners Drive, or send a message. We respond within 2 hours. Mon–Sat open.',
  keywords: [
    'contact Crown Auto Trading',
    'car dealer Tarneit phone number',
    'Crown Auto Trading address',
    'car repairs Melbourne contact',
    'used cars Melbourne enquiry',
  ],
  openGraph: {
    title: 'Contact Crown Auto Trading | Tarneit Melbourne',
    description:
      'Get in touch with Crown Auto Trading. Call 0450 758 282 or visit 37 Corners Drive, Tarneit VIC 3029.',
    url: 'https://crownautotrading.com.au/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
