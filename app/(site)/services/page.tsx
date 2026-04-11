import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auto Repair & Trading Services Melbourne | Crown Auto Trading',
  description:
    'Professional auto repair, vehicle inspection, car servicing, and trading services in Tarneit, Melbourne. Certified technicians, genuine parts, and transparent pricing at Crown Auto Trading.',
  keywords: [
    'auto repair Melbourne',
    'car service Tarneit',
    'vehicle inspection Melbourne',
    'log book service Melbourne',
    'car mechanic Tarneit 3029',
    'auto trading services Melbourne',
    'car repairs Tarneit',
    'roadworthy certificate Melbourne',
  ],
  openGraph: {
    title: 'Auto Repair & Trading Services | Crown Auto Trading Melbourne',
    description:
      'Professional car repairs, inspections, and trading services in Tarneit, Melbourne. Certified mechanics, fair pricing, same-day quotes.',
    url: 'https://crownautotrading.com.au/services',
  },
}

const mainServices = [
  {
    icon: '🔧',
    title: 'General Repairs & Maintenance',
    description:
      'Full-spectrum mechanical repairs handled by our certified technicians. From oil changes and brake replacements to complex engine diagnostics — we keep your vehicle running at its best.',
    features: [
      'Engine diagnostics & repairs',
      'Brake & suspension work',
      'Oil & filter changes',
      'Cooling system service',
      'Exhaust system repairs',
      'Electrical fault diagnosis',
    ],
    badge: 'MOST POPULAR',
    badgeColor: 'bg-gold-500 text-black',
  },
  {
    icon: '📋',
    title: 'Log Book Servicing',
    description:
      'Manufacturer-specified log book servicing using genuine or OEM-equivalent parts. We stamp your log book and keep your new car warranty intact — at a fraction of dealership prices.',
    features: [
      'All makes & models',
      'Genuine or OEM parts',
      'Warranty preserved',
      'Digital service records',
      'Transparent pricing',
      'Same-day service',
    ],
    badge: 'WARRANTY SAFE',
    badgeColor: 'bg-green-600 text-white',
  },
  {
    icon: '🔍',
    title: 'Pre-Purchase Inspections',
    description:
      'Buying a used car? Our comprehensive 150-point inspection gives you full confidence before you commit. We check everything from the chassis to the electronics.',
    features: [
      '150-point checklist',
      'PPSR check included',
      'Written report provided',
      'Same-day turnaround',
      'All makes & models',
      'Independent & unbiased',
    ],
    badge: 'BUYERS CHOICE',
    badgeColor: 'bg-blue-600 text-white',
  },
  {
    icon: '📄',
    title: 'Roadworthy Certificates',
    description:
      'Fast, reliable roadworthy certificate (RWC) inspections. We\'ll identify any issues and offer to repair them on the spot so you can get your certificate without delay.',
    features: [
      'VicRoads approved',
      'Same-day inspections',
      'Repair & certify in one visit',
      'Competitive pricing',
      'All passenger vehicles',
      'Trucks & light commercial',
    ],
    badge: 'VICROADS APPROVED',
    badgeColor: 'bg-purple-600 text-white',
  },
  {
    icon: '💵',
    title: 'Car Buying & Selling',
    description:
      'We buy good quality vehicles at fair market prices — no lowballing, no time-wasting. Get an instant appraisal and walk away with cash the same day.',
    features: [
      'Instant cash offers',
      'Same-day payment',
      'All makes & models',
      'Private sellers welcome',
      'Damaged & non-running',
      'We handle all paperwork',
    ],
    badge: 'CASH TODAY',
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    icon: '🔄',
    title: 'Trade-In & Upgrades',
    description:
      'Ready to upgrade? Trade in your current vehicle and drive away in something better the same day. We offer the best trade-in values in Melbourne\'s west.',
    features: [
      'Instant trade-in valuation',
      'Best price guaranteed',
      'Same-day deals',
      'Finance available',
      'All conditions accepted',
      'Paperwork handled',
    ],
    badge: 'UPGRADE TODAY',
    badgeColor: 'bg-orange-600 text-white',
  },
]

const processSteps = [
  { step: '01', title: 'Contact Us', desc: 'Call, email, or visit us at our Tarneit showroom. Tell us what you need.' },
  { step: '02', title: 'Free Quote', desc: 'We provide a transparent, no-obligation quote — no hidden costs.' },
  { step: '03', title: 'We Get to Work', desc: 'Our team handles everything efficiently, keeping you updated throughout.' },
  { step: '04', title: 'Drive Happy', desc: 'Pick up your vehicle or drive away in your new car. Simple as that.' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative py-16 overflow-hidden">
        <div className="hero-glow w-[500px] h-64 bg-gold-600 top-0 left-1/4" />
        <div className="hero-glow w-64 h-64 bg-gold-700 bottom-0 right-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">What We Do</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="gold-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            From professional auto repairs to seamless car trading — Crown Auto Trading is Melbourne's west's most trusted automotive partner. Quality work, honest prices, every time.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainServices.map((service) => (
            <div key={service.title} className="gold-border bg-crown-low rounded-2xl p-8 card-hover relative overflow-hidden group">
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="service-icon w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                    {service.icon}
                  </div>
                  <span className={`${service.badgeColor} text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full`}>
                    {service.badge}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-gold-400 text-xs">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-gold px-6 py-3 rounded text-xs font-bold tracking-widest inline-block"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="relative py-16 overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-yellow-700/5 to-yellow-900/10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              How It <span className="gold-text">Works</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Getting your car serviced or buying a vehicle has never been easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="text-center relative">
                {/* Connecting line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-yellow-500/40 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold-500/50 bg-crown-low mb-5 mx-auto">
                  <span className="font-display text-2xl font-bold gold-text">{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="gold-border bg-crown-low rounded-2xl p-12 relative overflow-hidden">
          <div className="hero-glow w-64 h-32 bg-gold-600 top-0 left-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="text-5xl mb-4 animate-float">🔧</div>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Ready to Book a Service?
            </h2>
            <p className="text-gray-400 mb-8">
              Call us or send a message and we'll get back to you with a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0450758282" className="btn-gold px-8 py-4 rounded text-sm font-bold tracking-widest inline-block">
                📞 CALL 0450 758 282
              </a>
              <Link href="/contact" className="btn-outline-gold px-8 py-4 rounded text-sm font-bold tracking-widest inline-block">
                SEND A MESSAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
