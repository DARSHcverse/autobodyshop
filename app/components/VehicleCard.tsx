import Link from 'next/link'
import { ArrowRightIcon, CarSideIcon } from './icons'

export type VehicleCardData = {
  make: string
  model: string
  year: number
  price: number
  km: number
  fuel: string
  trans: string
  body?: string
  badge: string
  accent: string
  badgeTone: string
}

type VehicleCardProps = {
  car: VehicleCardData
  href: string
  ctaLabel?: string
}

export default function VehicleCard({
  car,
  href,
  ctaLabel = 'View Details',
}: VehicleCardProps) {
  return (
    <Link
      href={href}
      className="group gold-border card-hover block overflow-hidden rounded-[28px]"
    >
      <div className={`inventory-visual relative h-56 overflow-hidden bg-gradient-to-br ${car.accent}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_58%)]" />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${car.badgeTone}`}
            >
              {car.badge}
            </span>
            {car.body ? (
              <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/72">
                {car.body}
              </span>
            ) : null}
          </div>
          <div className="shrink-0 text-right">
            <div className="text-[0.6rem] uppercase tracking-[0.42em] text-white/42">
              Model Year
            </div>
            <div className="mt-1 text-lg font-semibold text-white">{car.year}</div>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5">
          <div>
            <div className="text-[0.6rem] uppercase tracking-[0.48em] text-gold-300/74">
              Featured Stock
            </div>
            <div className="mt-2 font-display text-3xl font-semibold text-white">
              {car.make}
            </div>
            <div className="text-base text-white/72">{car.model}</div>
          </div>

          <div className="relative h-24 w-36 shrink-0 text-white/74">
            <div className="absolute inset-0 rounded-full bg-gold-400/10 blur-2xl" />
            <CarSideIcon className="relative h-full w-full stroke-[1.2]" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gold-300">
          {car.year} {car.make} {car.model}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {[`${(car.km / 1000).toFixed(0)}k km`, car.fuel, car.trans].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.18em] text-white/60 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/40">
              Drive Away Price
            </div>
            <div className="gold-text mt-2 font-body text-2xl font-extrabold">
              ${car.price.toLocaleString()}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-300">
            {ctaLabel}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
