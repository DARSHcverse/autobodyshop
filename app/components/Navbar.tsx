'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from './BrandLogo'
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from './icons'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'navbar-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label="Crown Auto Trading home"
          className="shrink-0 px-1 py-1"
        >
          <BrandLogo variant="compact" />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 backdrop-blur md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] transition-all duration-300 ${
                  active
                    ? 'bg-gold-400/12 text-gold-300'
                    : 'text-white/68 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0450758282"
            className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/78 transition-colors duration-300 hover:text-gold-300"
          >
            <PhoneIcon className="h-4 w-4 text-gold-300" />
            0450 758 282
          </a>
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 px-5 py-3 text-[0.68rem]"
          >
            Book Viewing
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gold-300 backdrop-blur md:hidden"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`mx-auto mt-3 max-w-7xl px-6 md:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`gold-border overflow-hidden rounded-[28px] transition-all duration-300 ${
            menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 p-5">
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] ${
                    active
                      ? 'bg-gold-400/12 text-gold-300'
                      : 'bg-white/[0.02] text-white/72'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-3 grid gap-3 rounded-[24px] border border-white/8 bg-black/20 p-4">
              <a
                href="tel:0450758282"
                className="inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/25 bg-gold-400/10">
                  <PhoneIcon className="h-4 w-4 text-gold-300" />
                </span>
                0450 758 282
              </a>
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-3 text-[0.68rem]"
              >
                Book Viewing
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
