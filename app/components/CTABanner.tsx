import Link from 'next/link'
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from './icons'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="hero-glow left-1/2 top-1/2 h-[22rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-gold-500" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="gold-border relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.04),transparent_45%)]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-gold-300/20 bg-gold-400/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
                Ready When You Are
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ready to find your next car?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                Visit the showroom, call for a quote, or send an enquiry.
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:gap-6">
                <div className="inline-flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-gold-300" />
                  37 Corners Drive, Tarneit, VIC 3029
                </div>
                <div className="inline-flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-gold-300" />
                  Open Mon–Sat
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/inventory"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.72rem]"
              >
                Browse Cars
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href="tel:0450758282"
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.72rem]"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
