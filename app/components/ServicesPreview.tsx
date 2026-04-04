import Link from 'next/link'
import {
  ArrowRightIcon,
  CarSideIcon,
  SearchIcon,
  ShieldCheckIcon,
  SwapIcon,
  WalletIcon,
  WrenchIcon,
} from './icons'

const services = [
  {
    icon: CarSideIcon,
    title: 'Buy a Car',
    description:
      'Browse handpicked pre-owned vehicles with presentation, history transparency, and a cleaner buying flow.',
    link: '/inventory',
  },
  {
    icon: WalletIcon,
    title: 'Sell Your Car',
    description:
      'Fast appraisals, competitive offers, and a same-day path if you want to move quickly.',
    link: '/contact',
  },
  {
    icon: WrenchIcon,
    title: 'Auto Repairs',
    description:
      'Routine servicing through to repairs, all handled by a workshop team that values clarity and turnaround.',
    link: '/services',
  },
  {
    icon: SearchIcon,
    title: 'Vehicle Inspection',
    description:
      'Independent pre-purchase inspections that help buyers avoid expensive surprises.',
    link: '/services',
  },
  {
    icon: SwapIcon,
    title: 'Trade-In',
    description:
      'Upgrade faster with trade-in support that rolls valuation, paperwork, and stock selection into one visit.',
    link: '/contact',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Finance Support',
    description:
      'Flexible guidance and lender-ready vehicles so you can leave with momentum, not friction.',
    link: '/contact',
  },
]

export default function ServicesPreview() {
  return (
    <section className="relative py-20" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
              What We Offer
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
              Dealership service, <span className="gold-text">workshop capability,</span> one
              polished destination.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/58">
            The site already had the right story. This pass tightens how it is presented, with
            cleaner cards, stronger typography, and a more premium service hierarchy.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.link}
                className="service-card gold-border card-hover group block rounded-[30px] p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="service-icon inline-flex h-14 w-14 items-center justify-center rounded-2xl text-gold-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/34">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gold-300">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/56">{service.description}</p>

                <div className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-300">
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="btn-outline-gold inline-flex rounded-full px-8 py-4 text-[0.72rem]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
