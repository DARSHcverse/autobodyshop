'use client'

import Link from 'next/link'
import {
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  SparkIcon,
} from './icons'

const heroStats = [
  { value: '500+', label: 'Cars Delivered' },
  { value: '10+', label: 'Years Trading' },
  { value: '4.9★', label: 'Rating' },
]

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[520px] max-h-[760px] overflow-hidden">
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/logo.png"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── Dark Overlay — gradient from bottom for text legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505cc] to-[#05050566]" />

      {/* ── Subtle gold spotlight ── */}
      <div className="hero-glow left-1/4 bottom-20 h-[28rem] w-[28rem] bg-gold-400" />

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Main headline */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-gold-300/20 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300 backdrop-blur-sm">
                <SparkIcon className="h-4 w-4" />
                Melbourne&apos;s Premium Auto Dealer
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1] text-white sm:text-6xl lg:text-7xl">
                <span className="gold-text">Excellence</span> Driven.
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                Curated luxury and performance vehicles in Melbourne.
                Premium stock, trade-ins, and workshop support under one roof.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/inventory"
                  className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.72rem]"
                >
                  View Collection
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline-gold inline-flex items-center justify-center px-8 py-4 text-[0.72rem]"
                >
                  Book A Viewing
                </Link>
              </div>

              {/* Contact row */}
              <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="tel:0450758282"
                  className="inline-flex items-center gap-2 font-semibold tracking-wide text-white/70 uppercase transition-colors duration-300 hover:text-gold-300"
                >
                  <PhoneIcon className="h-4 w-4 text-gold-300" />
                  0450 758 282
                </a>
                <div className="inline-flex items-center gap-2 tracking-wide uppercase text-white/40">
                  <MapPinIcon className="h-4 w-4 text-gold-300" />
                  Tarneit, VIC 3029
                </div>
              </div>
            </div>

            {/* Right: Stats strip */}
            <div className="flex flex-col items-end gap-6">
              {/* Stats row */}
              <div className="flex gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 bg-black/40 px-5 py-4 text-center backdrop-blur-sm"
                  >
                    <div className="gold-text text-2xl font-extrabold font-body">{stat.value}</div>
                    <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
