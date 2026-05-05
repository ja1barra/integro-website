import Link from 'next/link'
import NewsletterForm from './NewsletterForm'

function IntegroLogo({ height }: { height: number }) {
  return (
    <svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: `${height}px`, width: 'auto' }}
      aria-label="Integro"
    >
      <text xmlSpace="preserve">
        <tspan
          x="154"
          y="533"
          fontFamily="AllRoundGothic-Demi, sans-serif"
          fontSize="190"
          fill="#FD7016"
          xmlSpace="preserve"
        >
          i
        </tspan>
        <tspan
          fontFamily="AllRoundGothic-Demi, sans-serif"
          fontSize="190"
          fill="#292562"
          xmlSpace="preserve"
        >
          ntegro
        </tspan>
      </text>
    </svg>
  )
}

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Integro AI', href: '/#integro-ai' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-warm px-12 pt-16 pb-10 max-md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        {/* Brand column */}
        <div>
          <Link href="/" aria-label="Integro home">
            <IntegroLogo height={108} />
          </Link>
          <p className="mt-3 text-sm text-mid font-light leading-relaxed">
            SaaS Sales &amp; Marketing Consultancy — getintegro.com
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-orange mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-3 list-none">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-mono text-mid tracking-wide hover:text-orange transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-orange mb-4">
            Stay in the loop
          </p>
          <p className="text-sm text-mid font-light leading-relaxed mb-2">
            GTM insights, AI updates, and early access to new Integro products — no noise.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-warm flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-mid">
          &copy; 2026 Integro Solutions. All rights reserved.
        </p>
        <p className="font-mono text-xs text-mid">getintegro.com</p>
      </div>
    </footer>
  )
}
