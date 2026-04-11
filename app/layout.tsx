import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Integro Solutions — SaaS Sales & Marketing Consultancy',
  description:
    'Integro Solutions is a SaaS-focused sales and marketing consultancy. Revenue-Ready Talent, Demand Generation, Outbound Sales, Customer Success, and Growth Playbooks.',
  metadataBase: new URL('https://getintegro.com'),
  openGraph: {
    title: 'Integro Solutions — SaaS Sales & Marketing Consultancy',
    description:
      'We embed senior go-to-market talent and AI-powered systems into your SaaS company — so you can build pipeline, convert faster, and scale without guesswork.',
    url: 'https://getintegro.com',
    siteName: 'Integro Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integro Solutions — SaaS Sales & Marketing Consultancy',
    description:
      'We embed senior go-to-market talent and AI-powered systems into your SaaS company — so you can build pipeline, convert faster, and scale without guesswork.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
