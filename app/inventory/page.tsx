import type { Metadata } from 'next'
import Link from 'next/link'
import VehicleCard, { type VehicleCardData } from '../components/VehicleCard'

export const metadata: Metadata = {
  title: 'Used Cars for Sale Melbourne | Crown Auto Trading Inventory',
  description:
    "Browse Crown Auto Trading's full inventory of quality pre-owned vehicles in Tarneit, Melbourne. Sedans, SUVs, utes and more. All cars inspected and come with history reports.",
  keywords: [
    'used cars for sale Melbourne',
    'second hand cars Tarneit',
    'buy used SUV Melbourne',
    'affordable cars Tarneit 3029',
    'pre-owned cars Melbourne',
  ],
  openGraph: {
    title: 'Used Cars for Sale Melbourne | Crown Auto Trading',
    description: 'Quality pre-owned vehicles at competitive prices. Browse our full inventory in Tarneit, Melbourne.',
    url: 'https://crownautotrading.com.au/inventory',
  },
}

const allCars: VehicleCardData[] = [
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
    make: 'Mazda',
    model: 'CX-5',
    year: 2022,
    price: 34900,
    km: 22000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'Premium Pick',
    accent: 'from-amber-400/18 via-transparent to-yellow-400/8',
    badgeTone: 'border-gold-300/30 bg-gold-400/12 text-gold-100',
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    price: 22900,
    km: 48000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'Sedan',
    badge: 'Value Pick',
    accent: 'from-blue-400/18 via-transparent to-cyan-400/10',
    badgeTone: 'border-blue-300/30 bg-blue-400/10 text-blue-100',
  },
  {
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 31500,
    km: 29000,
    fuel: 'Diesel',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'New Arrival',
    accent: 'from-emerald-400/18 via-transparent to-teal-400/10',
    badgeTone: 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100',
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
    accent: 'from-sky-400/18 via-transparent to-cyan-400/10',
    badgeTone: 'border-sky-300/30 bg-sky-400/10 text-sky-100',
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
    accent: 'from-fuchsia-400/16 via-transparent to-violet-400/10',
    badgeTone: 'border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-100',
  },
  {
    make: 'Subaru',
    model: 'Forester',
    year: 2021,
    price: 35900,
    km: 25000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'AWD',
    accent: 'from-cyan-400/18 via-transparent to-sky-400/10',
    badgeTone: 'border-cyan-300/30 bg-cyan-400/10 text-cyan-100',
  },
  {
    make: 'Toyota',
    model: 'RAV4',
    year: 2020,
    price: 36500,
    km: 42000,
    fuel: 'Hybrid',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'Hybrid',
    accent: 'from-lime-400/18 via-transparent to-emerald-400/10',
    badgeTone: 'border-lime-300/30 bg-lime-400/10 text-lime-100',
  },
  {
    make: 'Nissan',
    model: 'X-Trail',
    year: 2021,
    price: 32500,
    km: 31000,
    fuel: 'Petrol',
    trans: 'Automatic',
    body: 'SUV',
    badge: 'Popular',
    accent: 'from-orange-400/18 via-transparent to-yellow-400/8',
    badgeTone: 'border-orange-300/30 bg-orange-400/10 text-orange-100',
  },
]

export default function InventoryPage() {
  return (
    <div className="min-h-screen pb-20 pt-24">
      <div className="relative overflow-hidden py-16">
        <div className="hero-glow right-0 top-0 h-48 w-96 bg-gold-600" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
            Our Stock
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-6xl">
            Vehicle <span className="gold-text">inventory</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/58">
            A cleaner inventory presentation for inspected stock, clear pricing, and easier
            comparison before you enquire.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-10 max-w-7xl px-6">
        <div className="gold-border flex flex-wrap gap-3 rounded-[28px] p-5">
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">All Body Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Ute</option>
            <option>Hatchback</option>
          </select>
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">All Fuel Types</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
          </select>
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">Price Range</option>
            <option>Under $25,000</option>
            <option>$25,000 – $35,000</option>
            <option>Over $35,000</option>
          </select>
          <button className="btn-gold ml-auto rounded-full px-6 py-3 text-[0.68rem]">
            Search
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allCars.map((car) => (
            <VehicleCard
              key={`${car.year}-${car.make}-${car.model}`}
              car={car}
              href="/contact"
              ctaLabel="Enquire Now"
            />
          ))}
        </div>

        <div className="gold-border relative mt-16 overflow-hidden rounded-[32px] p-10 text-center">
          <div className="hero-glow left-1/2 top-0 h-32 w-64 -translate-x-1/2 bg-gold-600" />
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-semibold text-white">
              Don&apos;t see what you&apos;re looking for?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/58">
              Tell us what you want and we&apos;ll source it with the same presentation and buying support.
            </p>
            <Link
              href="/contact"
              className="btn-gold mt-7 inline-flex rounded-full px-8 py-4 text-[0.72rem]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
