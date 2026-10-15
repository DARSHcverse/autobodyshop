import Link from 'next/link'
import BrandLogo from './BrandLogo'
import { MapPinIcon, PhoneIcon } from './icons'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/inventory', label: 'Car Inventory' },
  { href: '/services', label: 'Our Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

const services = [
  'Buy a Car',
  'Sell Your Car',
  'Trade-In Appraisals',
  'Vehicle Inspections',
  'Auto Repairs',
  'Finance Guidance',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-crown-lowest">
      <div className="hero-glow left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-gold-400" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.08fr_0.72fr_0.72fr_1fr]">
          <div className="max-w-md">
            <div className="inline-flex rounded-[24px] border border-white/8 bg-black/18 px-4 py-3 backdrop-blur">
              <BrandLogo variant="compact" className="sm:h-12" />
            </div>
            <p className="mt-6 text-sm leading-7 text-white/56">
              Premium used cars, trade-ins, workshop support, and a cleaner customer experience
              for Melbourne drivers who want the process to feel more considered.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Facebook', 'Instagram', 'YouTube'].map((channel) => (
                <span
                  key={channel}
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62"
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-300">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/58 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-300">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/58 transition-colors duration-300 hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="gold-border rounded-[28px] p-6">
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-300">
              Visit Or Call
            </h4>
            <div className="mt-6 space-y-5 text-sm text-white/62">
              <div className="flex gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300/20 bg-gold-400/10">
                  <MapPinIcon className="h-4 w-4 text-gold-300" />
                </span>
                <div>
                  37 Corners Drive
                  <br />
                  Tarneit, VIC 3029
                </div>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300/20 bg-gold-400/10">
                  <PhoneIcon className="h-4 w-4 text-gold-300" />
                </span>
                <div>
                  <a
                    href="tel:0450758282"
                    className="font-semibold text-white transition-colors duration-300 hover:text-gold-300"
                  >
                    0450 758 282
                  </a>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/36">
                    Mon-Fri 9am-6pm, Sat 9am-5pm
                  </div>
                </div>
              </div>
              <a
                href="mailto:info@crownautotrading.com.au"
                className="inline-flex text-xs font-semibold uppercase tracking-[0.26em] text-gold-300"
              >
                info@crownautotrading.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col gap-4 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Crown Auto Trading. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link href="/sitemap.xml" className="transition-colors duration-300 hover:text-gold-300">
              Sitemap
            </Link>
            <span className="text-white/50 md:border-l md:border-white/10 md:pl-5">
              Website By{' '}
              <a
                href="https://www.tradewebco.co.uk"
                target="_blank"
                rel="noopener"
                title="Websites for UK tradespeople"
                className="font-semibold text-gold-300/80 transition-colors duration-300 hover:text-gold-300"
              >
                Trade Web Co
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
