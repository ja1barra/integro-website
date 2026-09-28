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

function IntegroLogo({ height, light }: { height: number; light?: boolean }) {
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
          fill={light ? '#F4F4F4' : '#0a1f44'}
          xmlSpace="preserve"
          style={{ transition: 'fill 300ms ease-out' }}
        >
          ntegro
        </tspan>
      </text>
    </svg>
  )
}

/* Edge-refraction filter used by .liquid-glass (backdrop-filter: url(#liquid-glass-refraction)) */
function GlassFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
      <filter
        id="liquid-glass-refraction"
        x="0"
        y="0"
        width="100%"
        height="100%"
        colorInterpolationFilters="sRGB"
      >
        <feImage href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='rgb(255,128,128)'/><stop offset='14%' stop-color='rgb(128,128,128)'/><stop offset='86%' stop-color='rgb(128,128,128)'/><stop offset='100%' stop-color='rgb(0,128,128)'/></linearGradient></defs><rect width='100' height='100' fill='url(%23g)'/></svg>" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="mapX" />
        <feDisplacementMap in="SourceGraphic" in2="mapX" scale="46" xChannelSelector="R" yChannelSelector="G" result="dx" />
        <feImage href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='rgb(128,128,255)'/><stop offset='30%' stop-color='rgb(128,128,128)'/><stop offset='70%' stop-color='rgb(128,128,128)'/><stop offset='100%' stop-color='rgb(128,128,0)'/></linearGradient></defs><rect width='100' height='100' fill='url(%23g)'/></svg>" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="mapY" />
        <feDisplacementMap in="dx" in2="mapY" scale="30" xChannelSelector="R" yChannelSelector="B" />
      </filter>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [onDarkHero, setOnDarkHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pages can mark a section with [data-dark-hero] (a full-bleed dark
  // photo, like the homepage hero). While any part of that section is
  // still behind the fixed nav, the nav needs light text/logo to stay
  // legible; once it's scrolled fully out of view, revert to the
  // default dark-on-cream styling used over the rest of the site.
  useEffect(() => {
    const heroEl = document.querySelector('[data-dark-hero]') as HTMLElement | null
    if (!heroEl) {
      setOnDarkHero(false)
      return
    }
    const NAV_HEIGHT = 96
    const updateHeroState = () => {
      setOnDarkHero(heroEl.getBoundingClientRect().bottom > NAV_HEIGHT)
    }
    updateHeroState()
    window.addEventListener('scroll', updateHeroState, { passive: true })
    window.addEventListener('resize', updateHeroState)
    return () => {
      window.removeEventListener('scroll', updateHeroState)
      window.removeEventListener('resize', updateHeroState)
    }
  }, [pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href
  }

  return (
    <>
      <GlassFilter />
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'top-3 px-3 md:px-6' : 'top-0 px-0'
        }`}
      >
        <nav
          className={`liquid-glass mx-auto flex items-center justify-between px-12 max-md:px-6 transition-all duration-500 ease-out ${
            scrolled ? 'max-w-6xl rounded-2xl' : 'max-w-full rounded-none border-x-0 border-t-0'
          } ${onDarkHero ? 'liquid-glass-dark' : ''}`}
          style={{ height: '72px' }}
        >
          {/* Logo — intentionally overflows the 72px nav */}
          <Link href="/" className="flex items-center" aria-label="Integro home">
            <IntegroLogo height={192} light={onDarkHero} />
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
                      : onDarkHero
                        ? 'text-cream hover:text-white'
                        : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`px-5 py-2.5 rounded text-sm font-mono tracking-wide transition-all duration-200 hover:bg-orange hover:text-nearblack ${
                  onDarkHero ? 'bg-cream text-ink' : 'bg-ink text-cream'
                }`}
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
              className={`block w-6 h-0.5 transition-transform duration-200 ${
                onDarkHero ? 'bg-cream' : 'bg-ink'
              } ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-opacity duration-200 ${
                onDarkHero ? 'bg-cream' : 'bg-ink'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-transform duration-200 ${
                onDarkHero ? 'bg-cream' : 'bg-ink'
              } ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
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
                  className={`block text-base py-2 border-b border-white/40 transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-orange font-mono'
                      : 'text-ink/70 hover:text-ink'
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
