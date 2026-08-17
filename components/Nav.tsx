'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Integro AI', href: '/#integro-ai' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

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
          fill="#0a1f44"
          xmlSpace="preserve"
        >
          ntegro
        </tspan>
      </text>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href
  }

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'top-3 px-3 md:px-6' : 'top-0 px-0'
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between px-12 max-md:px-6 transition-all duration-500 ease-out ${
            scrolled
              ? 'max-w-6xl rounded-2xl border border-white/40 bg-cream/70 shadow-[0_8px_32px_rgba(26,23,20,0.12)] backdrop-blur-xl backdrop-saturate-150'
              : 'max-w-full rounded-none border-b border-warm bg-cream/80 shadow-none backdrop-blur-md backdrop-saturate-150'
          }`}
          style={{ height: '72px' }}
        >
          {/* Logo — intentionally overflows the 72px nav */}
          <Link href="/" className="flex items-center" aria-label="Integro home">
            <IntegroLogo height={192} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-orange font-mono'
                      : 'text-mid hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-ink text-cream px-5 py-2.5 rounded text-sm font-mono tracking-wide transition-all duration-200 hover:bg-orange hover:text-nearblack"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={`fixed left-0 right-0 z-40 bg-cream/95 backdrop-blur-xl border-b border-warm shadow-lg md:hidden transition-all duration-500 ease-out ${
            scrolled ? 'top-[96px] mx-3 rounded-2xl border' : 'top-[72px]'
          }`}
        >
          <ul className="flex flex-col list-none p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-base py-2 border-b border-warm transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-orange font-mono'
                      : 'text-mid hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block text-center bg-ink text-cream px-5 py-3 rounded text-sm font-mono tracking-wide mt-2 hover:bg-orange hover:text-nearblack transition-colors duration-200"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
