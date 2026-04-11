// ─── SINGLE SOURCE OF TRUTH FOR VEHICLE INVENTORY ────────────────────────────
// This file is read by:
//   - app/(site)/inventory/page.tsx  (full inventory listing)
//   - app/components/FeaturedInventory.tsx  (homepage featured cars)
//   - app/admin/page.tsx  (admin dashboard seed data)
//
// To update stock: edit this file and redeploy.
// Future: replace with a database/API call in all three locations.

export type VehicleStatus = 'Available' | 'Sold' | 'Reserved';

export type InventoryVehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  bodyType: 'Sedan' | 'SUV' | 'Ute' | 'Hatchback' | 'Wagon' | 'Coupe' | 'Van';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  odometer: number;
  price: number;
  badge: string;
  status: VehicleStatus;
  imageUrl: string;
  color: string;
  engineSize: string;
  seats: number;
  featured: boolean;
  // Visual accent classes for the website cards
  accent: string;
  badgeTone: string;
};

// Auto-exported from Crown Auto Trading Admin — 11/4/2026, 6:05:40 pm
// Paste this into: app/data/inventory.ts → replace the INVENTORY array

export const INVENTORY: InventoryVehicle[] = [
  {
    id: 'zudrs6lx',
    make: 'Subaru', model: 'Liberty', year: 2004,
    bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 238000, price: 4500, badge: 'Best Value', status: 'Available',
    imageUrl: '', color: 'Blue', engineSize: '2.5L', seats: 4,
    featured: true,
    accent: 'from-rose-400/18 via-transparent to-orange-400/8',
    badgeTone: 'border-rose-300/30 bg-rose-400/10 text-rose-100',
  },
  {
    id: 'v1',
    make: 'Mazda', model: 'CX-5', year: 2022,
    bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 22000, price: 34900, badge: 'Premium Pick', status: 'Available',
    imageUrl: '', color: 'Soul Red Crystal', engineSize: '2.5L', seats: 5,
    featured: true,
    accent: 'from-amber-400/18 via-transparent to-yellow-400/8',
    badgeTone: 'border-gold-300/30 bg-gold-400/12 text-gold-100',
  },
  {
    id: 'v2',
    make: 'Toyota', model: 'Camry', year: 2021,
    bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 35000, price: 28500, badge: 'Best Value', status: 'Available',
    imageUrl: '', color: 'Glacier White', engineSize: '2.5L', seats: 5,
    featured: true,
    accent: 'from-rose-400/18 via-transparent to-orange-400/8',
    badgeTone: 'border-rose-300/30 bg-rose-400/10 text-rose-100',
  },
  {
    id: 'v3',
    make: 'Honda', model: 'Civic', year: 2020,
    bodyType: 'Sedan', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 48000, price: 22900, badge: 'Value Pick', status: 'Available',
    imageUrl: '', color: 'Lunar Silver', engineSize: '1.5L Turbo', seats: 5,
    featured: true,
    accent: 'from-slate-400/18 via-transparent to-slate-400/8',
    badgeTone: 'border-slate-300/30 bg-slate-400/10 text-slate-100',
  },
  {
    id: 'v4',
    make: 'Hyundai', model: 'Tucson', year: 2021,
    bodyType: 'SUV', fuelType: 'Diesel', transmission: 'Automatic',
    odometer: 29000, price: 31500, badge: 'New Arrival', status: 'Available',
    imageUrl: '', color: 'Phantom Black', engineSize: '2.0L CRDi', seats: 5,
    featured: true,
    accent: 'from-emerald-400/18 via-transparent to-teal-400/10',
    badgeTone: 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100',
  },
  {
    id: 'v5',
    make: 'Ford', model: 'Ranger', year: 2020,
    bodyType: 'Ute', fuelType: 'Diesel', transmission: 'Manual',
    odometer: 55000, price: 38900, badge: '4WD Ready', status: 'Available',
    imageUrl: '', color: 'Meteor Grey', engineSize: '2.0L Bi-Turbo', seats: 5,
    featured: true,
    accent: 'from-sky-400/18 via-transparent to-cyan-400/10',
    badgeTone: 'border-sky-300/30 bg-sky-400/10 text-sky-100',
  },
  {
    id: 'v6',
    make: 'Kia', model: 'Sportage', year: 2022,
    bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 18000, price: 33500, badge: 'Low KMs', status: 'Available',
    imageUrl: '', color: 'Snow White Pearl', engineSize: '1.6T', seats: 5,
    featured: true,
    accent: 'from-fuchsia-400/16 via-transparent to-violet-400/10',
    badgeTone: 'border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-100',
  },
  {
    id: 'v7',
    make: 'Subaru', model: 'Forester', year: 2021,
    bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 25000, price: 35900, badge: 'AWD', status: 'Available',
    imageUrl: '', color: 'Crystal White', engineSize: '2.5L Boxer', seats: 5,
    featured: true,
    accent: 'from-cyan-400/18 via-transparent to-sky-400/10',
    badgeTone: 'border-cyan-300/30 bg-cyan-400/10 text-cyan-100',
  },
  {
    id: 'v8',
    make: 'Toyota', model: 'RAV4', year: 2020,
    bodyType: 'SUV', fuelType: 'Hybrid', transmission: 'Automatic',
    odometer: 42000, price: 36500, badge: 'Hybrid', status: 'Available',
    imageUrl: '', color: 'Magnetic Grey', engineSize: '2.5L Hybrid', seats: 5,
    featured: true,
    accent: 'from-lime-400/18 via-transparent to-emerald-400/10',
    badgeTone: 'border-lime-300/30 bg-lime-400/10 text-lime-100',
  },
  {
    id: 'v9',
    make: 'Nissan', model: 'X-Trail', year: 2021,
    bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic',
    odometer: 31000, price: 32500, badge: 'Popular', status: 'Available',
    imageUrl: '', color: 'Ivory Pearl', engineSize: '2.5L', seats: 7,
    featured: true,
    accent: 'from-orange-400/18 via-transparent to-yellow-400/8',
    badgeTone: 'border-orange-300/30 bg-orange-400/10 text-orange-100',
  }
];

// Featured subset shown on homepage
export const FEATURED_INVENTORY = INVENTORY.filter(v => v.featured && v.status === 'Available');
