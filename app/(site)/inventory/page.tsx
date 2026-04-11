import type { Metadata } from 'next'
import Link from 'next/link'
import VehicleCard from '../../components/VehicleCard'
import { getInventory, type InventoryVehicle } from '../../data/getInventory'

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Used Cars for Sale Melbourne | Crown Auto Trading Inventory',
  description:
    "Browse Crown Auto Trading's full inventory of quality pre-owned vehicles in Tarneit, Melbourne. Sedans, SUVs, utes and more. All cars inspected and come with history reports.",
}

function toCardData(v: InventoryVehicle) {
  return {
    make: v.make, model: v.model, year: v.year,
    price: v.price, km: v.odometer,
    fuel: v.fuelType, trans: v.transmission, body: v.bodyType,
    badge: v.badge, accent: v.accent, badgeTone: v.badgeTone,
  }
}

export default async function InventoryPage() {
  const all = await getInventory()
  const available = all.filter(v => v.status === 'Available')

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
            {available.length} vehicles available. All inspected, clearly priced, ready to view.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-10 max-w-7xl px-6">
        <div className="gold-border flex flex-wrap gap-3 rounded-[28px] p-5">
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">All Body Types</option>
            <option>Sedan</option><option>SUV</option><option>Ute</option><option>Hatchback</option>
          </select>
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">All Fuel Types</option>
            <option>Petrol</option><option>Diesel</option><option>Hybrid</option>
          </select>
          <select className="form-input rounded-full bg-crown-low px-4 py-3 text-sm">
            <option value="">Price Range</option>
            <option>Under $25,000</option><option>$25,000 – $35,000</option><option>Over $35,000</option>
          </select>
          <button className="btn-gold ml-auto rounded-full px-6 py-3 text-[0.68rem]">Search</button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {available.map((car) => (
            <VehicleCard key={car.id} car={toCardData(car)} href="/contact" ctaLabel="Enquire Now" />
          ))}
        </div>

        <div className="gold-border relative mt-16 overflow-hidden rounded-[32px] p-10 text-center">
          <div className="hero-glow left-1/2 top-0 h-32 w-64 -translate-x-1/2 bg-gold-600" />
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-semibold text-white">
              Don&apos;t see what you&apos;re looking for?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/58">
              Tell us what you want and we&apos;ll source it.
            </p>
            <Link href="/contact" className="btn-gold mt-7 inline-flex rounded-full px-8 py-4 text-[0.72rem]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
