import Link from 'next/link'
import VehicleCard, { type VehicleCardData } from './VehicleCard'

const cars: VehicleCardData[] = [
  {
    make: 'Mazda',
    model: 'CX-5',
    year: 2022,
    price: 34900,
    km: 22000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'Premium Pick',
    accent: 'from-gold-400/18 via-transparent to-gold-400/8',
    badgeTone: 'border-gold-300/30 bg-gold-400/12 text-gold-100',
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 28500,
    km: 35000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'Sedan',
    badge: 'Best Value',
    accent: 'from-rose-400/18 via-transparent to-orange-400/8',
    badgeTone: 'border-rose-300/30 bg-rose-400/10 text-rose-100',
  },
  {
    make: 'Ford',
    model: 'Ranger',
    year: 2020,
    price: 38900,
    km: 55000,
    fuel: 'Diesel',
    trans: 'Manual',
    body: 'Ute',
    badge: '4WD Ready',
    accent: 'from-cyan-400/18 via-transparent to-cyan-400/10',
    badgeTone: 'border-teal-300/30 bg-cyan-400/10 text-cyan-100',
  },
  {
    make: 'Kia',
    model: 'Sportage',
    year: 2022,
    price: 33500,
    km: 18000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'Low KMs',
    accent: 'from-emerald-400/18 via-transparent to-emerald-400/10',
    badgeTone: 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100',
  },
]

export default function FeaturedInventory() {
  return (
    <section className="relative overflow-hidden bg-crown-lowest py-20" id="inventory">
      <div className="hero-glow left-1/2 top-1/2 h-80 w-[48rem] -translate-x-1/2 -translate-y-1/2 bg-gold-600" />
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
              Curated Collection
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
              Engineered for <span className="gold-text">excellence.</span>
            </h2>
          </div>

          <Link
            href="/inventory"
            className="btn-outline-gold inline-flex self-start px-7 py-4 text-[0.72rem]"
          >
            View All Cars
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cars.map((car) => (
            <VehicleCard key={`${car.year}-${car.make}-${car.model}`} car={car} href="/inventory" />
          ))}
        </div>
      </div>
    </section>
  )
}
