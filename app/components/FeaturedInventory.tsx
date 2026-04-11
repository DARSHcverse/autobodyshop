import Link from 'next/link'
import VehicleCard from './VehicleCard'
import { getInventory, type InventoryVehicle } from '../data/getInventory'

function toCardData(v: InventoryVehicle) {
  return {
    make: v.make, model: v.model, year: v.year,
    price: v.price, km: v.odometer,
    fuel: v.fuelType, trans: v.transmission, body: v.bodyType,
    badge: v.badge, accent: v.accent, badgeTone: v.badgeTone,
  }
}

export default async function FeaturedInventory() {
  const all = await getInventory()
  const featured = all.filter(v => v.featured && v.status === 'Available').slice(0, 4)

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
          <Link href="/inventory" className="btn-outline-gold inline-flex self-start px-7 py-4 text-[0.72rem]">
            View All Cars
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((car) => (
            <VehicleCard key={car.id} car={toCardData(car)} href="/inventory" />
          ))}
        </div>
      </div>
    </section>
  )
}
