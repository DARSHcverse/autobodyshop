'use client';

import React, { useState, useEffect, useRef } from 'react';
import { INVENTORY } from '../data/inventory';

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Vehicle = {
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
  status: 'Available' | 'Sold' | 'Reserved';
  imageUrl: string;
  color: string;
  engineSize: string;
  seats: number;
};

type Service = {
  id: string;
  title: string;
  icon: string;
  tag: string;
  description: string;
  features: string[];
  visible: boolean;
};

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  enquiryType: 'Buy' | 'Sell' | 'Trade-In' | 'Repair' | 'Inspection' | 'Finance' | 'RWC' | 'General';
  vehicleOfInterest: string;
  message: string;
  dateReceived: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Closed';
  notes: string;
  read: boolean;
};

type Booking = {
  id: string;
  customerName: string;
  phone: string;
  dateTime: string;
  serviceType: string;
  vehicle: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
};

type Review = {
  id: string;
  customerName: string;
  suburb: string;
  rating: number;
  reviewText: string;
  source: 'Google' | 'Facebook' | 'Direct';
  visible: boolean;
  order: number;
};

type BusinessSettings = {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  tradingHours: {
    monFri: { open: string; close: string };
    sat: { open: string; close: string };
    sun: { enabled: boolean; note: string };
  };
  socialLinks: { facebook: string; instagram: string; youtube: string };
  stats: { carsDelivered: number; yearsTrading: number; rating: number; happyCustomers: number };
};

type ActivityEntry = {
  id: string;
  time: string;
  action: string;
  module: string;
};

type Module = 'dashboard' | 'inventory' | 'services' | 'enquiries' | 'bookings' | 'reviews' | 'settings';

// ─── SEED DATA ───────────────────────────────────────────────────────────────

// Seed from the shared data file — same source as the live website
const SEED_VEHICLES: Vehicle[] = INVENTORY.map(v => ({
  id: v.id,
  make: v.make,
  model: v.model,
  year: v.year,
  bodyType: v.bodyType,
  fuelType: v.fuelType,
  transmission: v.transmission,
  odometer: v.odometer,
  price: v.price,
  badge: v.badge,
  status: v.status,
  imageUrl: v.imageUrl,
  color: v.color,
  engineSize: v.engineSize,
  seats: v.seats,
}));

const SEED_SERVICES: Service[] = [
  { id: 's1', title: 'General Repairs & Maintenance', icon: '🔧', tag: 'MOST POPULAR', description: 'Comprehensive mechanical repairs and routine maintenance to keep your vehicle running at peak performance. Our experienced technicians handle everything from minor fixes to major repairs.', features: ['Engine diagnostics & repairs', 'Brake system service', 'Suspension & steering', 'Cooling system maintenance', 'Electrical fault finding', 'Exhaust system repairs'], visible: true },
  { id: 's2', title: 'Log Book Servicing', icon: '📋', tag: 'WARRANTY SAFE', description: "Manufacturer-scheduled log book services that maintain your new car warranty. We follow your vehicle's exact service schedule using quality parts and fluids.", features: ['Follows manufacturer schedule', 'Genuine-equivalent parts used', 'Warranty remains intact', 'Full service report provided', 'Reminder system included', 'All makes & models'], visible: true },
  { id: 's3', title: 'Pre-Purchase Inspections', icon: '🔍', tag: 'BUYER PROTECTION', description: 'Comprehensive inspection before you buy. We identify hidden issues, safety concerns, and give you a full condition report so you can negotiate with confidence.', features: ['Full mechanical inspection', '100+ point checklist', 'PPSR check included', 'Written report provided', 'Photos of all issues', 'Same-day inspections available'], visible: true },
  { id: 's4', title: 'Roadworthy Certificates', icon: '✅', tag: 'VIC LICENSED', description: 'Licensed Roadworthy Certificate (RWC) inspections for vehicle registration transfers and renewals. Fast, reliable, and completed same day in most cases.', features: ['VicRoads approved', 'Same-day certificates', 'Competitive pricing', 'Repair & re-test service', 'All vehicle types', 'Digital certificate issued'], visible: true },
  { id: 's5', title: 'Car Buying & Selling', icon: '🤝', tag: 'NO PRESSURE', description: 'Browse our quality pre-owned vehicle stock with transparent pricing and no-pressure sales. We source vehicles carefully and provide full history on every car.', features: ['Quality pre-owned stock', 'Transparent pricing', 'Vehicle history checks', 'Finance options available', 'Trade-in accepted', 'Test drives welcome'], visible: true },
  { id: 's6', title: 'Trade-In & Upgrades', icon: '🔄', tag: 'BEST PRICE', description: 'Get the best value for your current vehicle when upgrading. We offer competitive trade-in prices and can help you find the perfect upgrade from our stock.', features: ['Competitive valuations', 'Instant cash offers', 'Upgrade assistance', 'Same-day process', 'No obligation quotes', 'All conditions considered'], visible: true },
];

const SEED_ENQUIRIES: Enquiry[] = [
  { id: 'e1', name: 'Michael Nguyen', phone: '0412 345 678', email: 'michael.n@gmail.com', enquiryType: 'Buy', vehicleOfInterest: 'Toyota Kluger 2021', message: "Hi, I'm interested in the Kluger. Is it still available? Can I book a test drive this weekend?", dateReceived: '2024-01-15T09:23:00', status: 'Contacted', notes: 'Called back, interested in Saturday test drive', read: true },
  { id: 'e2', name: 'Sarah Thompson', phone: '0498 765 432', email: 'sarah.t@hotmail.com', enquiryType: 'RWC', vehicleOfInterest: '', message: 'Need a roadworthy certificate for my 2018 Corolla. How much do you charge and how long does it take?', dateReceived: '2024-01-15T11:45:00', status: 'New', notes: '', read: false },
  { id: 'e3', name: 'James Wilson', phone: '0455 123 456', email: 'j.wilson@yahoo.com.au', enquiryType: 'Trade-In', vehicleOfInterest: 'Ford Ranger 2022', message: "I want to trade in my 2019 RAV4 (90k kms, good condition) and upgrade to the Ranger. What's the trade-in value?", dateReceived: '2024-01-14T14:30:00', status: 'In Progress', notes: 'Booked for inspection Wednesday 17th', read: true },
  { id: 'e4', name: 'Priya Sharma', phone: '0421 987 654', email: 'priya.s@gmail.com', enquiryType: 'Inspection', vehicleOfInterest: '2019 Honda Civic (private sale)', message: "I'm buying a used Civic from a private seller in Werribee. Can you do a pre-purchase inspection? How soon?", dateReceived: '2024-01-14T08:15:00', status: 'Closed', notes: 'Inspection completed, report sent, minor issues found', read: true },
  { id: 'e5', name: 'David Chen', phone: '0409 234 567', email: 'd.chen@outlook.com', enquiryType: 'Repair', vehicleOfInterest: '2020 Hyundai Tucson', message: "My Tucson is making a grinding noise from the front left wheel when braking. Can I bring it in for a check?", dateReceived: '2024-01-13T16:00:00', status: 'Closed', notes: 'Brake pads replaced, completed same day', read: true },
  { id: 'e6', name: 'Emma Roberts', phone: '0477 345 678', email: 'emma.r@gmail.com', enquiryType: 'Finance', vehicleOfInterest: 'Mazda CX-5 2020', message: "Interested in the CX-5. Do you offer financing? I have a decent credit score. What are the repayment options?", dateReceived: '2024-01-16T10:00:00', status: 'New', notes: '', read: false },
  { id: 'e7', name: 'Tom Nguyen', phone: '0434 567 890', email: 'tom.ng@gmail.com', enquiryType: 'Sell', vehicleOfInterest: '', message: "I want to sell my 2018 Subaru Forester (68k kms, one owner, full service history). Are you buying?", dateReceived: '2024-01-16T13:20:00', status: 'New', notes: '', read: false },
];

const SEED_BOOKINGS: Booking[] = [
  { id: 'b1', customerName: 'James Wilson', phone: '0455 123 456', dateTime: '2024-01-17T10:00:00', serviceType: 'Vehicle Inspection / Trade-In Valuation', vehicle: '2019 Toyota RAV4', status: 'Confirmed' },
  { id: 'b2', customerName: 'Lisa Park', phone: '0423 789 012', dateTime: '2024-01-17T14:30:00', serviceType: 'Test Drive', vehicle: 'Toyota Kluger 2021 (v1)', status: 'Confirmed' },
  { id: 'b3', customerName: 'Ahmed Al-Hassan', phone: '0415 678 901', dateTime: '2024-01-18T09:00:00', serviceType: 'Log Book Service', vehicle: '2020 Ford Focus', status: 'Pending' },
  { id: 'b4', customerName: 'Cathy Liu', phone: '0488 234 567', dateTime: '2024-01-18T11:00:00', serviceType: 'Roadworthy Certificate', vehicle: '2017 Toyota Camry', status: 'Pending' },
  { id: 'b5', customerName: 'Mark Davis', phone: '0401 345 678', dateTime: '2024-01-19T10:30:00', serviceType: 'Pre-Purchase Inspection', vehicle: '2020 Kia Sportage (private)', status: 'Confirmed' },
  { id: 'b6', customerName: 'Nina Patel', phone: '0466 789 012', dateTime: '2024-01-15T09:00:00', serviceType: 'General Repair', vehicle: '2019 Hyundai i30', status: 'Completed' },
  { id: 'b7', customerName: 'Ryan O\'Brien', phone: '0444 567 890', dateTime: '2024-01-20T15:00:00', serviceType: 'Test Drive', vehicle: 'Hyundai Tucson 2023 (v4)', status: 'Pending' },
];

const SEED_REVIEWS: Review[] = [
  { id: 'r1', customerName: 'Michael T.', suburb: 'Hoppers Crossing', rating: 5, reviewText: "Bought my Kluger from Crown Auto Trading and couldn't be happier. Darsh was super honest, no pushy sales tactics, and the car was exactly as described. The RWC was included and they sorted out the transfer too. Highly recommend!", source: 'Google', visible: true, order: 1 },
  { id: 'r2', customerName: 'Sarah M.', suburb: 'Werribee', rating: 5, reviewText: "Took my car in for a log book service and they were incredibly thorough. Explained everything they did, showed me the old parts, and the price was very reasonable. Will be coming back for all my servicing.", source: 'Google', visible: true, order: 2 },
  { id: 'r3', customerName: 'James K.', suburb: 'Point Cook', rating: 5, reviewText: "Got a pre-purchase inspection done here before buying a used car. The report was detailed and they even helped me negotiate $2k off the asking price based on their findings. Worth every cent!", source: 'Google', visible: true, order: 3 },
  { id: 'r4', customerName: 'Priya S.', suburb: 'Tarneit', rating: 5, reviewText: "Best car buying experience I've had. No pressure, fair pricing, and they actually cared about finding me the right car, not just making a sale. The team at Crown Auto are genuinely good people.", source: 'Facebook', visible: true, order: 4 },
];

const SEED_SETTINGS: BusinessSettings = {
  businessName: 'Crown Auto Trading',
  phone: '0493 441 506',
  email: 'info@crownautotrading.com.au',
  address: '37 Corners Drive, Tarneit VIC 3029',
  tradingHours: {
    monFri: { open: '09:00', close: '18:00' },
    sat: { open: '09:00', close: '17:00' },
    sun: { enabled: true, note: 'By Appointment' },
  },
  socialLinks: {
    facebook: 'https://facebook.com/crownautotrading',
    instagram: 'https://instagram.com/crownautotrading',
    youtube: 'https://youtube.com/@crownautotrading',
  },
  stats: { carsDelivered: 500, yearsTrading: 10, rating: 5, happyCustomers: 430 },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function fmtPrice(p: number) {
  return '$' + p.toLocaleString('en-AU');
}

function fmtDate(d: string) {
  return new Date(d).toLocaleString('en-AU', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function fmtDateShort(d: string) {
  return new Date(d).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

function isToday(d: string) {
  const today = new Date();
  const date = new Date(d);
  return date.toDateString() === today.toDateString();
}

function isWithin7Days(d: string) {
  const now = new Date();
  const date = new Date(d);
  const diff = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 7;
}

function wasWithin7Days(d: string) {
  const now = new Date();
  const date = new Date(d);
  const diff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 7;
}

// ─── MINI CHART COMPONENTS ────────────────────────────────────────────────────

function BarChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div className="flex items-end gap-2 h-32 w-full">
      {data.map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-1 flex-1">
          <span className="text-xs text-amber-400/80 font-bold">{d.value}</span>
          <div
            className="w-full transition-all duration-500"
            style={{ height: `${(d.value / max) * 80}px`, background: d.color, minHeight: '4px' }}
          />
          <span className="text-[9px] text-slate-400 text-center leading-tight">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let offset = 0;
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const segments = data.map((d) => {
    const pct = total ? d.value / total : 0;
    const seg = { ...d, pct, dasharray: circumference, dashoffset: circumference - pct * circumference, rotate: offset * 360 };
    offset += pct;
    return seg;
  });
  return (
    <div className="flex items-center gap-4">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#1e293b" strokeWidth="18" />
        {segments.map((s, i) => (
          <circle
            key={i}
            cx="50" cy="50" r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="18"
            strokeDasharray={`${s.pct * circumference} ${circumference}`}
            strokeDashoffset={0}
            transform={`rotate(${s.rotate * 360 - 90} 50 50)`}
            style={{ transition: 'all 0.5s' }}
          />
        ))}
        <text x="50" y="54" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="bold">{total}</text>
      </svg>
      <div className="flex flex-col gap-1">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: s.color }} />
            <span className="text-slate-300">{s.label}</span>
            <span className="text-slate-500 ml-auto pl-2">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

type Toast = { id: string; message: string; type: 'success' | 'error' | 'info' };

function ToastContainer({ toasts, remove }: { toasts: Toast[]; remove: (id: string) => void }) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-[999]">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium shadow-xl border animate-slide-in ${
            t.type === 'success' ? 'bg-emerald-900/90 border-emerald-500/50 text-emerald-200' :
            t.type === 'error' ? 'bg-red-900/90 border-red-500/50 text-red-200' :
            'bg-slate-800/90 border-slate-600/50 text-slate-200'
          }`}
          style={{ minWidth: 240 }}
        >
          <span>{t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : 'ℹ'}</span>
          <span className="flex-1">{t.message}</span>
          <button onClick={() => remove(t.id)} className="text-current opacity-50 hover:opacity-100 ml-2">✕</button>
        </div>
      ))}
    </div>
  );
}

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const add = (message: string, type: Toast['type'] = 'success') => {
    const id = uid();
    setToasts(p => [...p, { id, message, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  };
  const remove = (id: string) => setToasts(p => p.filter(t => t.id !== id));
  return { toasts, add, remove };
}

// ─── CONFIRM MODAL ────────────────────────────────────────────────────────────

function ConfirmModal({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0f1629] border border-amber-500/30 shadow-2xl p-6 w-full max-w-sm mx-4">
        <h3 className="text-lg font-semibold text-white mb-2">Confirm Action</h3>
        <p className="text-slate-400 text-sm mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white transition-colors">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white transition-colors">Delete</button>
        </div>
      </div>
    </div>
  );
}

// ─── MODAL WRAPPER ────────────────────────────────────────────────────────────

function Modal({ title, onClose, children, wide }: { title: string; onClose: () => void; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-8 px-4">
      <div className={`bg-[#0c1527] border border-slate-700/60 shadow-2xl w-full ${wide ? 'max-w-4xl' : 'max-w-xl'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60">
          <h2 className="text-base font-semibold text-amber-400">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-xl leading-none">✕</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── FORM FIELD ───────────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-slate-400 uppercase tracking-wider">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "bg-slate-800/80 border border-slate-600/60 text-white text-sm px-3 py-2 focus:outline-none focus:border-amber-500/70 w-full";
const selectCls = "bg-slate-800/80 border border-slate-600/60 text-white text-sm px-3 py-2 focus:outline-none focus:border-amber-500/70 w-full";

// ─── BADGE ────────────────────────────────────────────────────────────────────

function Badge({ text, color }: { text: string; color?: string }) {
  const colors: Record<string, string> = {
    'Available': 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    'Sold': 'bg-red-900/60 text-red-300 border-red-700/50',
    'Reserved': 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    'New': 'bg-blue-900/60 text-blue-300 border-blue-700/50',
    'Contacted': 'bg-purple-900/60 text-purple-300 border-purple-700/50',
    'In Progress': 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    'Closed': 'bg-slate-700/60 text-slate-400 border-slate-600/50',
    'Completed': 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    'Pending': 'bg-blue-900/60 text-blue-300 border-blue-700/50',
    'Confirmed': 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    'Cancelled': 'bg-red-900/60 text-red-300 border-red-700/50',
  };
  const cls = colors[text] || (color || 'bg-slate-700/60 text-slate-300 border-slate-600/50');
  return <span className={`px-2 py-0.5 text-xs border font-medium ${cls}`}>{text}</span>;
}

// ─── INVENTORY MODULE ─────────────────────────────────────────────────────────

type VehicleFormData = Omit<Vehicle, 'id'>;
const BLANK_VEHICLE: VehicleFormData = { make: '', model: '', year: new Date().getFullYear(), bodyType: 'SUV', fuelType: 'Petrol', transmission: 'Automatic', odometer: 0, price: 0, badge: 'New Arrival', status: 'Available', imageUrl: '', color: '', engineSize: '', seats: 5 };

function VehicleForm({ initial, onSave, onClose }: { initial: VehicleFormData; onSave: (v: VehicleFormData) => void; onClose: () => void }) {
  const [form, setForm] = useState<VehicleFormData>(initial);
  const set = (k: keyof VehicleFormData, v: unknown) => setForm(p => ({ ...p, [k]: v }));
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="grid grid-cols-2 gap-4">
      <Field label="Make"><input className={inputCls} value={form.make} onChange={e => set('make', e.target.value)} required /></Field>
      <Field label="Model"><input className={inputCls} value={form.model} onChange={e => set('model', e.target.value)} required /></Field>
      <Field label="Year"><input className={inputCls} type="number" value={form.year} onChange={e => set('year', parseInt(e.target.value))} required min={1980} max={2030} /></Field>
      <Field label="Color"><input className={inputCls} value={form.color} onChange={e => set('color', e.target.value)} /></Field>
      <Field label="Body Type">
        <select className={selectCls} value={form.bodyType} onChange={e => set('bodyType', e.target.value)}>
          {['Sedan','SUV','Ute','Hatchback','Wagon','Coupe','Van'].map(t => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Fuel Type">
        <select className={selectCls} value={form.fuelType} onChange={e => set('fuelType', e.target.value)}>
          {['Petrol','Diesel','Hybrid','Electric'].map(t => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Transmission">
        <select className={selectCls} value={form.transmission} onChange={e => set('transmission', e.target.value)}>
          <option>Automatic</option><option>Manual</option>
        </select>
      </Field>
      <Field label="Engine Size"><input className={inputCls} value={form.engineSize} onChange={e => set('engineSize', e.target.value)} placeholder="e.g. 2.5L V6" /></Field>
      <Field label="Odometer (km)"><input className={inputCls} type="number" value={form.odometer} onChange={e => set('odometer', parseInt(e.target.value))} required min={0} /></Field>
      <Field label="Seats"><input className={inputCls} type="number" value={form.seats} onChange={e => set('seats', parseInt(e.target.value))} min={1} max={12} /></Field>
      <Field label="Drive-Away Price ($AUD)"><input className={inputCls} type="number" value={form.price} onChange={e => set('price', parseInt(e.target.value))} required min={0} /></Field>
      <Field label="Badge Label">
        <select className={selectCls} value={form.badge} onChange={e => set('badge', e.target.value)}>
          {['Premium Pick','Best Value','New Arrival','Low KMs','4WD Ready','Hybrid','Popular','Featured','Must See'].map(b => <option key={b}>{b}</option>)}
        </select>
      </Field>
      <Field label="Status">
        <select className={selectCls} value={form.status} onChange={e => set('status', e.target.value)}>
          <option>Available</option><option>Sold</option><option>Reserved</option>
        </select>
      </Field>
      <div className="col-span-2">
        <Field label="Image URL"><input className={inputCls} value={form.imageUrl} onChange={e => set('imageUrl', e.target.value)} placeholder="https://..." /></Field>
      </div>
      {form.imageUrl && (
        <div className="col-span-2">
          <img src={form.imageUrl} alt="preview" className="w-full h-40 object-cover border border-slate-700" onError={e => (e.currentTarget.style.display = 'none')} />
        </div>
      )}
      <div className="col-span-2 flex gap-3 justify-end pt-2 border-t border-slate-700/50">
        <button type="button" onClick={onClose} className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white">Cancel</button>
        <button type="submit" className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-black font-semibold">Save Vehicle</button>
      </div>
    </form>
  );
}

function InventoryModule({ vehicles, setVehicles, addActivity, toast }: {
  vehicles: Vehicle[];
  setVehicles: React.Dispatch<React.SetStateAction<Vehicle[]>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [search, setSearch] = useState('');
  const [filterBody, setFilterBody] = useState('All');
  const [filterFuel, setFilterFuel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriceMax, setFilterPriceMax] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [editVehicle, setEditVehicle] = useState<Vehicle | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = vehicles.filter(v => {
    const q = search.toLowerCase();
    if (q && !`${v.make} ${v.model} ${v.year} ${v.color}`.toLowerCase().includes(q)) return false;
    if (filterBody !== 'All' && v.bodyType !== filterBody) return false;
    if (filterFuel !== 'All' && v.fuelType !== filterFuel) return false;
    if (filterStatus !== 'All' && v.status !== filterStatus) return false;
    if (filterPriceMax && v.price > parseInt(filterPriceMax)) return false;
    return true;
  });

  const handleAdd = (data: VehicleFormData) => {
    const v = { ...data, id: uid() };
    setVehicles(p => [v, ...p]);
    addActivity(`Added vehicle: ${data.year} ${data.make} ${data.model}`, 'Inventory');
    toast('Vehicle added successfully');
    setShowAdd(false);
  };

  const handleEdit = (data: VehicleFormData) => {
    setVehicles(p => p.map(v => v.id === editVehicle!.id ? { ...data, id: v.id } : v));
    addActivity(`Updated vehicle: ${data.year} ${data.make} ${data.model}`, 'Inventory');
    toast('Vehicle updated');
    setEditVehicle(null);
  };

  const handleDelete = (id: string) => {
    const v = vehicles.find(x => x.id === id)!;
    setVehicles(p => p.filter(x => x.id !== id));
    addActivity(`Deleted vehicle: ${v.year} ${v.make} ${v.model}`, 'Inventory');
    toast('Vehicle deleted', 'error');
    setDeleteId(null);
  };

  const toggleSold = (id: string) => {
    setVehicles(p => p.map(v => {
      if (v.id !== id) return v;
      const ns = v.status === 'Sold' ? 'Available' : 'Sold';
      addActivity(`Marked ${v.year} ${v.make} ${v.model} as ${ns}`, 'Inventory');
      toast(`Vehicle marked as ${ns}`);
      return { ...v, status: ns };
    }));
  };

  const exportToFile = () => {
    // Map back to the accent/badgeTone defaults
    const ACCENT_MAP: Record<string, { accent: string; badgeTone: string }> = {
      'Premium Pick': { accent: 'from-amber-400/18 via-transparent to-yellow-400/8', badgeTone: 'border-gold-300/30 bg-gold-400/12 text-gold-100' },
      'Best Value':   { accent: 'from-rose-400/18 via-transparent to-orange-400/8', badgeTone: 'border-rose-300/30 bg-rose-400/10 text-rose-100' },
      '4WD Ready':    { accent: 'from-sky-400/18 via-transparent to-cyan-400/10', badgeTone: 'border-sky-300/30 bg-sky-400/10 text-sky-100' },
      'Low KMs':      { accent: 'from-fuchsia-400/16 via-transparent to-violet-400/10', badgeTone: 'border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-100' },
      'Hybrid':       { accent: 'from-lime-400/18 via-transparent to-emerald-400/10', badgeTone: 'border-lime-300/30 bg-lime-400/10 text-lime-100' },
      'New Arrival':  { accent: 'from-emerald-400/18 via-transparent to-teal-400/10', badgeTone: 'border-emerald-300/30 bg-emerald-400/10 text-emerald-100' },
      'Popular':      { accent: 'from-orange-400/18 via-transparent to-yellow-400/8', badgeTone: 'border-orange-300/30 bg-orange-400/10 text-orange-100' },
      'AWD':          { accent: 'from-cyan-400/18 via-transparent to-sky-400/10', badgeTone: 'border-cyan-300/30 bg-cyan-400/10 text-cyan-100' },
    };
    const DEFAULT_ACCENT = { accent: 'from-slate-400/18 via-transparent to-slate-400/8', badgeTone: 'border-slate-300/30 bg-slate-400/10 text-slate-100' };

    const lines = vehicles.map(v => {
      const vis = v.status !== 'Sold';
      const { accent, badgeTone } = ACCENT_MAP[v.badge] || DEFAULT_ACCENT;
      return `  {
    id: '${v.id}',
    make: '${v.make}', model: '${v.model}', year: ${v.year},
    bodyType: '${v.bodyType}', fuelType: '${v.fuelType}', transmission: '${v.transmission}',
    odometer: ${v.odometer}, price: ${v.price}, badge: '${v.badge}', status: '${v.status}',
    imageUrl: '${v.imageUrl}', color: '${v.color}', engineSize: '${v.engineSize}', seats: ${v.seats},
    featured: ${vis},
    accent: '${accent}',
    badgeTone: '${badgeTone}',
  }`;
    });

    const output = `// Auto-exported from Crown Auto Trading Admin — ${new Date().toLocaleString('en-AU')}
// Paste this into: app/data/inventory.ts → replace the INVENTORY array

export const INVENTORY: InventoryVehicle[] = [
${lines.join(',\n')}
];`;

    navigator.clipboard.writeText(output).then(() => {
      toast('Inventory data copied to clipboard — paste into app/data/inventory.ts and redeploy');
    }).catch(() => {
      // Fallback: open in new window
      const w = window.open('', '_blank');
      if (w) { w.document.write('<pre style="font-family:monospace;padding:20px;background:#0f1629;color:#e2e8f0;">' + output.replace(/</g, '&lt;') + '</pre>'); }
    });
  };

  return (
    <div>
      {showAdd && <Modal title="Add New Vehicle" onClose={() => setShowAdd(false)} wide><VehicleForm initial={BLANK_VEHICLE} onSave={handleAdd} onClose={() => setShowAdd(false)} /></Modal>}
      {editVehicle && <Modal title="Edit Vehicle" onClose={() => setEditVehicle(null)} wide><VehicleForm initial={editVehicle} onSave={handleEdit} onClose={() => setEditVehicle(null)} /></Modal>}
      {deleteId && <ConfirmModal message="Are you sure you want to delete this vehicle? This cannot be undone." onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />}

      <div className="flex flex-wrap gap-3 mb-4 items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Vehicle Inventory <span className="text-slate-500 text-base font-normal">({vehicles.length} total)</span></h2>
        <div className="flex gap-2">
          <button onClick={exportToFile} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-amber-300 text-sm font-semibold border border-amber-500/30 flex items-center gap-2" title="Copy current inventory as code to publish to website">
            ↑ Export & Publish
          </button>
          <button onClick={() => setShowAdd(true)} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold flex items-center gap-2">
            + Add Vehicle
          </button>
        </div>
      </div>

      <div className="mb-5 flex items-start gap-3 border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-xs text-amber-300">
        <span className="flex-shrink-0 text-amber-500">⚠</span>
        <span>
          <strong>How changes go live:</strong> Edits here update this session only. To publish to the website, copy your changes into{' '}
          <code className="bg-black/40 px-1 py-0.5 text-amber-200">app/data/inventory.ts</code>{' '}
          and redeploy. The website reads directly from that file.
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <input className={inputCls + ' max-w-[220px]'} placeholder="Search make, model, year..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className={selectCls + ' w-auto'} value={filterBody} onChange={e => setFilterBody(e.target.value)}>
          <option value="All">All Types</option>
          {['Sedan','SUV','Ute','Hatchback','Wagon','Coupe','Van'].map(t => <option key={t}>{t}</option>)}
        </select>
        <select className={selectCls + ' w-auto'} value={filterFuel} onChange={e => setFilterFuel(e.target.value)}>
          <option value="All">All Fuel</option>
          {['Petrol','Diesel','Hybrid','Electric'].map(t => <option key={t}>{t}</option>)}
        </select>
        <select className={selectCls + ' w-auto'} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option>Available</option><option>Sold</option><option>Reserved</option>
        </select>
        <input className={inputCls + ' w-[160px]'} type="number" placeholder="Max price..." value={filterPriceMax} onChange={e => setFilterPriceMax(e.target.value)} />
        {(search || filterBody !== 'All' || filterFuel !== 'All' || filterStatus !== 'All' || filterPriceMax) && (
          <button onClick={() => { setSearch(''); setFilterBody('All'); setFilterFuel('All'); setFilterStatus('All'); setFilterPriceMax(''); }} className="text-sm text-amber-400 hover:text-amber-300">Clear filters</button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-700/60 text-left">
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Image</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Vehicle</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Type</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Odometer</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Price</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Badge</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Status</th>
              <th className="py-3 px-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan={8} className="py-12 text-center text-slate-500">No vehicles found</td></tr>
            )}
            {filtered.map(v => (
              <tr key={v.id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-3">
                  {v.imageUrl ? <img src={v.imageUrl} alt="" className="w-16 h-10 object-cover" onError={e => (e.currentTarget.style.display='none')} /> : <div className="w-16 h-10 bg-slate-700 flex items-center justify-center text-slate-500 text-xs">No img</div>}
                </td>
                <td className="py-3 px-3">
                  <div className="font-medium text-white">{v.year} {v.make} {v.model}</div>
                  <div className="text-xs text-slate-500">{v.color} • {v.engineSize} • {v.seats} seats</div>
                </td>
                <td className="py-3 px-3">
                  <div className="text-slate-300">{v.bodyType}</div>
                  <div className="text-xs text-slate-500">{v.fuelType} • {v.transmission}</div>
                </td>
                <td className="py-3 px-3 text-slate-300">{v.odometer.toLocaleString()} km</td>
                <td className="py-3 px-3 text-amber-400 font-semibold">{fmtPrice(v.price)}</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 text-xs bg-slate-700/60 text-slate-300 border border-slate-600/50">{v.badge}</span>
                </td>
                <td className="py-3 px-3"><Badge text={v.status} /></td>
                <td className="py-3 px-3">
                  <div className="flex gap-2 flex-wrap">
                    <button onClick={() => toggleSold(v.id)} className={`px-2 py-1 text-xs font-medium ${v.status === 'Sold' ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-red-900/60 text-red-300 hover:bg-red-800/60'}`}>
                      {v.status === 'Sold' ? 'Unmark Sold' : 'Mark Sold'}
                    </button>
                    <button onClick={() => setEditVehicle(v)} className="px-2 py-1 text-xs bg-amber-900/60 text-amber-300 hover:bg-amber-800/60">Edit</button>
                    <button onClick={() => setDeleteId(v.id)} className="px-2 py-1 text-xs bg-slate-700 text-slate-300 hover:bg-red-900/60 hover:text-red-300">Del</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── SERVICES MODULE ──────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-[#0a0e1a] border border-amber-500/20 p-5">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{service.icon}</span>
        <div>
          {service.tag && <span className="text-xs text-amber-400 font-bold tracking-widest">{service.tag}</span>}
          <h3 className="text-white font-semibold text-sm">{service.title}</h3>
        </div>
      </div>
      <p className="text-slate-400 text-xs mb-3 leading-relaxed">{service.description}</p>
      <ul className="space-y-1">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
            <span className="text-amber-500">▸</span>{f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceForm({ initial, onSave, onClose }: { initial: Service; onSave: (s: Service) => void; onClose: () => void }) {
  const [form, setForm] = useState<Service>(initial);
  const [newFeature, setNewFeature] = useState('');
  const set = (k: keyof Service, v: unknown) => setForm(p => ({ ...p, [k]: v }));
  const addFeature = () => { if (newFeature.trim()) { set('features', [...form.features, newFeature.trim()]); setNewFeature(''); } };
  const removeFeature = (i: number) => set('features', form.features.filter((_, idx) => idx !== i));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Field label="Icon (emoji)"><input className={inputCls} value={form.icon} onChange={e => set('icon', e.target.value)} /></Field>
        <Field label="Title"><input className={inputCls} value={form.title} onChange={e => set('title', e.target.value)} required /></Field>
        <Field label="Tag"><input className={inputCls} value={form.tag} onChange={e => set('tag', e.target.value)} placeholder="e.g. MOST POPULAR" /></Field>
        <Field label="Description"><textarea className={inputCls} rows={4} value={form.description} onChange={e => set('description', e.target.value)} /></Field>
        <div className="space-y-2">
          <label className="text-xs text-slate-400 uppercase tracking-wider">Feature Checklist</label>
          {form.features.map((f, i) => (
            <div key={i} className="flex gap-2 items-center">
              <span className="text-slate-300 text-sm flex-1">{f}</span>
              <button type="button" onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-300 text-xs px-2 py-1">Remove</button>
            </div>
          ))}
          <div className="flex gap-2">
            <input className={inputCls} placeholder="Add feature..." value={newFeature} onChange={e => setNewFeature(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addFeature())} />
            <button type="button" onClick={addFeature} className="px-3 py-2 bg-amber-500/20 text-amber-400 text-sm hover:bg-amber-500/30">+</button>
          </div>
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-xs text-slate-400">Visible on Website</span>
          <div onClick={() => set('visible', !form.visible)} className={`w-10 h-5 flex items-center px-0.5 cursor-pointer transition-colors ${form.visible ? 'bg-amber-500' : 'bg-slate-600'}`}>
            <div className={`w-4 h-4 bg-white transition-transform ${form.visible ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </label>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white">Cancel</button>
          <button type="button" onClick={() => onSave(form)} className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-black font-semibold">Save Service</button>
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Live Preview</p>
        <ServiceCard service={form} />
      </div>
    </div>
  );
}

function ServicesModule({ services, setServices, addActivity, toast }: {
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [editService, setEditService] = useState<Service | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const blankService: Service = { id: '', title: '', icon: '🔧', tag: '', description: '', features: [], visible: true };

  const handleSave = (s: Service) => {
    if (!s.id) {
      const ns = { ...s, id: uid() };
      setServices(p => [...p, ns]);
      addActivity(`Added service: ${s.title}`, 'Services');
      toast('Service added');
    } else {
      setServices(p => p.map(x => x.id === s.id ? s : x));
      addActivity(`Updated service: ${s.title}`, 'Services');
      toast('Service updated');
    }
    setEditService(null);
    setShowAdd(false);
  };

  const handleDelete = (id: string) => {
    const s = services.find(x => x.id === id)!;
    setServices(p => p.filter(x => x.id !== id));
    addActivity(`Deleted service: ${s.title}`, 'Services');
    toast('Service deleted', 'error');
    setDeleteId(null);
  };

  const toggleVisible = (id: string) => {
    setServices(p => p.map(s => {
      if (s.id !== id) return s;
      addActivity(`${s.visible ? 'Hidden' : 'Shown'} service: ${s.title}`, 'Services');
      toast(`Service ${s.visible ? 'hidden' : 'shown'}`);
      return { ...s, visible: !s.visible };
    }));
  };

  return (
    <div>
      {(editService || showAdd) && (
        <Modal title={showAdd ? 'Add New Service' : 'Edit Service'} onClose={() => { setEditService(null); setShowAdd(false); }} wide>
          <ServiceForm initial={editService || blankService} onSave={handleSave} onClose={() => { setEditService(null); setShowAdd(false); }} />
        </Modal>
      )}
      {deleteId && <ConfirmModal message="Delete this service?" onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />}

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">Services Manager</h2>
        <button onClick={() => setShowAdd(true)} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold">+ Add Service</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(s => (
          <div key={s.id} className={`border p-4 ${s.visible ? 'border-slate-700/60' : 'border-slate-800/40 opacity-50'} bg-slate-800/20`}>
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="text-white font-medium text-sm">{s.title}</div>
                  {s.tag && <div className="text-xs text-amber-400">{s.tag}</div>}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleVisible(s.id)} className={`px-2 py-1 text-xs ${s.visible ? 'bg-emerald-900/50 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>
                  {s.visible ? 'Visible' : 'Hidden'}
                </button>
                <button onClick={() => setEditService(s)} className="px-2 py-1 text-xs bg-amber-900/50 text-amber-300 hover:bg-amber-800/50">Edit</button>
                <button onClick={() => setDeleteId(s.id)} className="px-2 py-1 text-xs bg-slate-700 text-slate-300 hover:bg-red-900/50 hover:text-red-300">Del</button>
              </div>
            </div>
            <p className="text-slate-400 text-xs mb-2 line-clamp-2">{s.description}</p>
            <div className="text-xs text-slate-500">{s.features.length} features listed</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ENQUIRIES MODULE ─────────────────────────────────────────────────────────

function EnquiriesModule({ enquiries, setEnquiries, addActivity, toast }: {
  enquiries: Enquiry[];
  setEnquiries: React.Dispatch<React.SetStateAction<Enquiry[]>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [expandId, setExpandId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = enquiries.filter(e => {
    if (filterType !== 'All' && e.enquiryType !== filterType) return false;
    if (filterStatus !== 'All' && e.status !== filterStatus) return false;
    return true;
  });

  const total = enquiries.length;
  const newToday = enquiries.filter(e => isToday(e.dateReceived)).length;
  const open = enquiries.filter(e => ['New', 'Contacted', 'In Progress'].includes(e.status)).length;
  const closed = enquiries.filter(e => e.status === 'Closed').length;

  const updateStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(p => p.map(e => e.id === id ? { ...e, status } : e));
    addActivity(`Updated enquiry status to ${status}`, 'Enquiries');
    toast('Status updated');
  };

  const updateNotes = (id: string, notes: string) => {
    setEnquiries(p => p.map(e => e.id === id ? { ...e, notes } : e));
  };

  const markRead = (id: string) => {
    setEnquiries(p => p.map(e => e.id === id ? { ...e, read: true } : e));
  };

  const handleDelete = (id: string) => {
    setEnquiries(p => p.filter(e => e.id !== id));
    addActivity('Deleted enquiry', 'Enquiries');
    toast('Enquiry deleted', 'error');
    setDeleteId(null);
  };

  return (
    <div>
      {deleteId && <ConfirmModal message="Delete this enquiry?" onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />}

      <h2 className="text-xl font-semibold text-white mb-5">Enquiries & Leads</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Leads', value: total, color: 'border-l-amber-500' },
          { label: 'New Today', value: newToday, color: 'border-l-blue-500' },
          { label: 'Open', value: open, color: 'border-l-emerald-500' },
          { label: 'Closed', value: closed, color: 'border-l-slate-500' },
        ].map(s => (
          <div key={s.label} className={`bg-slate-800/40 border border-slate-700/40 border-l-2 ${s.color} px-4 py-3`}>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-4 flex-wrap">
        <select className={selectCls + ' w-auto'} value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          {['Buy','Sell','Trade-In','Repair','Inspection','Finance','RWC','General'].map(t => <option key={t}>{t}</option>)}
        </select>
        <select className={selectCls + ' w-auto'} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="All">All Status</option>
          {['New','Contacted','In Progress','Closed'].map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        {filtered.map(e => (
          <div key={e.id} className={`border ${e.read ? 'border-slate-700/40 bg-slate-800/20' : 'border-amber-500/30 bg-amber-500/5'}`}>
            <div
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-700/20"
              onClick={() => { setExpandId(expandId === e.id ? null : e.id); markRead(e.id); }}
            >
              {!e.read && <span className="w-2 h-2 bg-amber-500 flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-white text-sm">{e.name}</span>
                  <Badge text={e.enquiryType} />
                  <Badge text={e.status} />
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{e.phone} • {e.email} • {fmtDate(e.dateReceived)}</div>
              </div>
              <span className="text-slate-500 text-xs">{expandId === e.id ? '▲' : '▼'}</span>
            </div>
            {expandId === e.id && (
              <div className="px-4 pb-4 border-t border-slate-700/40 pt-3 space-y-3">
                {e.vehicleOfInterest && <div className="text-xs"><span className="text-slate-400">Vehicle: </span><span className="text-white">{e.vehicleOfInterest}</span></div>}
                <div className="text-xs"><span className="text-slate-400">Message: </span><span className="text-slate-300">{e.message}</span></div>
                <div className="flex gap-3 flex-wrap items-start">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-400">Status</label>
                    <select className={selectCls + ' w-auto text-xs'} value={e.status} onChange={ev => updateStatus(e.id, ev.target.value as Enquiry['status'])}>
                      {['New','Contacted','In Progress','Closed'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
                    <label className="text-xs text-slate-400">Notes</label>
                    <input className={inputCls + ' text-xs'} value={e.notes} onChange={ev => updateNotes(e.id, ev.target.value)} placeholder="Add internal notes..." onBlur={() => toast('Notes saved')} />
                  </div>
                  <button onClick={() => setDeleteId(e.id)} className="mt-4 px-3 py-1.5 text-xs bg-slate-700 text-red-400 hover:bg-red-900/40 self-end">Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && <div className="py-12 text-center text-slate-500">No enquiries found</div>}
      </div>
    </div>
  );
}

// ─── BOOKINGS MODULE ──────────────────────────────────────────────────────────

type BookingFormData = Omit<Booking, 'id'>;
const BLANK_BOOKING: BookingFormData = { customerName: '', phone: '', dateTime: '', serviceType: '', vehicle: '', status: 'Pending' };

function BookingForm({ initial, onSave, onClose }: { initial: BookingFormData; onSave: (b: BookingFormData) => void; onClose: () => void }) {
  const [form, setForm] = useState<BookingFormData>(initial);
  const set = (k: keyof BookingFormData, v: string) => setForm(p => ({ ...p, [k]: v }));
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="space-y-4">
      <Field label="Customer Name"><input className={inputCls} value={form.customerName} onChange={e => set('customerName', e.target.value)} required /></Field>
      <Field label="Phone"><input className={inputCls} value={form.phone} onChange={e => set('phone', e.target.value)} required /></Field>
      <Field label="Date & Time"><input className={inputCls} type="datetime-local" value={form.dateTime} onChange={e => set('dateTime', e.target.value)} required /></Field>
      <Field label="Service Type">
        <select className={selectCls} value={form.serviceType} onChange={e => set('serviceType', e.target.value)}>
          {['Test Drive','General Repair','Log Book Service','Roadworthy Certificate','Pre-Purchase Inspection','Vehicle Inspection / Trade-In Valuation','Finance Consultation'].map(s => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Vehicle (if applicable)"><input className={inputCls} value={form.vehicle} onChange={e => set('vehicle', e.target.value)} placeholder="e.g. Toyota Kluger 2021" /></Field>
      <Field label="Status">
        <select className={selectCls} value={form.status} onChange={e => set('status', e.target.value)}>
          <option>Pending</option><option>Confirmed</option><option>Completed</option><option>Cancelled</option>
        </select>
      </Field>
      <div className="flex gap-3 justify-end pt-2 border-t border-slate-700/50">
        <button type="button" onClick={onClose} className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white">Cancel</button>
        <button type="submit" className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-black font-semibold">Save Booking</button>
      </div>
    </form>
  );
}

function BookingsModule({ bookings, setBookings, addActivity, toast }: {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [view, setView] = useState<'list' | 'calendar'>('list');

  const sorted = [...bookings].sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());

  const handleAdd = (data: BookingFormData) => {
    const b = { ...data, id: uid() };
    setBookings(p => [b, ...p]);
    addActivity(`New booking: ${data.customerName} — ${data.serviceType}`, 'Bookings');
    toast('Booking added');
    setShowAdd(false);
  };

  const updateStatus = (id: string, status: Booking['status']) => {
    setBookings(p => p.map(b => b.id === id ? { ...b, status } : b));
    addActivity(`Updated booking status to ${status}`, 'Bookings');
    toast('Booking status updated');
  };

  const handleDelete = (id: string) => {
    setBookings(p => p.filter(b => b.id !== id));
    addActivity('Deleted booking', 'Bookings');
    toast('Booking deleted', 'error');
    setDeleteId(null);
  };

  const todayBookings = sorted.filter(b => isToday(b.dateTime));
  const upcomingBookings = sorted.filter(b => !isToday(b.dateTime) && new Date(b.dateTime) > new Date());
  const pastBookings = sorted.filter(b => new Date(b.dateTime) < new Date() && !isToday(b.dateTime));

  const BookingRow = ({ b }: { b: Booking }) => {
    const today = isToday(b.dateTime);
    return (
      <div className={`border px-4 py-3 ${today ? 'border-amber-500/40 bg-amber-500/5' : 'border-slate-700/40 bg-slate-800/20'}`}>
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              {today && <span className="text-xs bg-amber-500 text-black px-2 py-0.5 font-bold">TODAY</span>}
              <span className="text-white font-medium text-sm">{b.customerName}</span>
              <Badge text={b.status} />
            </div>
            <div className="text-xs text-slate-400 mt-1">{fmtDate(b.dateTime)}</div>
            <div className="text-xs text-slate-300 mt-0.5">{b.serviceType}{b.vehicle && ` — ${b.vehicle}`}</div>
            <div className="text-xs text-slate-500">{b.phone}</div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {b.status === 'Pending' && (
              <button onClick={() => updateStatus(b.id, 'Confirmed')} className="px-2 py-1 text-xs bg-emerald-900/60 text-emerald-300 hover:bg-emerald-800/60">Confirm</button>
            )}
            {['Pending','Confirmed'].includes(b.status) && (
              <button onClick={() => updateStatus(b.id, 'Cancelled')} className="px-2 py-1 text-xs bg-red-900/60 text-red-300 hover:bg-red-800/60">Cancel</button>
            )}
            {b.status === 'Confirmed' && (
              <button onClick={() => updateStatus(b.id, 'Completed')} className="px-2 py-1 text-xs bg-slate-700 text-slate-300 hover:bg-slate-600">Complete</button>
            )}
            <button onClick={() => setDeleteId(b.id)} className="px-2 py-1 text-xs bg-slate-700 text-slate-400 hover:bg-red-900/40 hover:text-red-300">Del</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {showAdd && <Modal title="New Booking" onClose={() => setShowAdd(false)}><BookingForm initial={BLANK_BOOKING} onSave={handleAdd} onClose={() => setShowAdd(false)} /></Modal>}
      {deleteId && <ConfirmModal message="Delete this booking?" onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />}

      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-white">Bookings & Appointments</h2>
        <div className="flex gap-3">
          <div className="flex border border-slate-700/60">
            <button onClick={() => setView('list')} className={`px-3 py-1.5 text-xs ${view === 'list' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}>List</button>
            <button onClick={() => setView('calendar')} className={`px-3 py-1.5 text-xs ${view === 'calendar' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}>Calendar</button>
          </div>
          <button onClick={() => setShowAdd(true)} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold">+ New Booking</button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="space-y-6">
          {todayBookings.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 inline-block animate-pulse" />Today ({todayBookings.length})
              </h3>
              <div className="space-y-2">{todayBookings.map(b => <BookingRow key={b.id} b={b} />)}</div>
            </div>
          )}
          {upcomingBookings.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-2">Upcoming</h3>
              <div className="space-y-2">{upcomingBookings.map(b => <BookingRow key={b.id} b={b} />)}</div>
            </div>
          )}
          {pastBookings.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2">Past</h3>
              <div className="space-y-2 opacity-60">{pastBookings.map(b => <BookingRow key={b.id} b={b} />)}</div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <CalendarView bookings={sorted} />
        </div>
      )}
    </div>
  );
}

function CalendarView({ bookings }: { bookings: Booking[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleString('en-AU', { month: 'long', year: 'numeric' });

  const getBookingsForDay = (day: number) => {
    const d = new Date(year, month, day);
    return bookings.filter(b => {
      const bd = new Date(b.dateTime);
      return bd.getFullYear() === d.getFullYear() && bd.getMonth() === d.getMonth() && bd.getDate() === d.getDate();
    });
  };

  const cells = [];
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  const today = new Date();
  const isCurrentDay = (day: number) => day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className="bg-slate-800/20 border border-slate-700/40 p-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))} className="text-amber-400 hover:text-amber-300 px-2 py-1">‹</button>
        <span className="text-white font-semibold">{monthName}</span>
        <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))} className="text-amber-400 hover:text-amber-300 px-2 py-1">›</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
          <div key={d} className="text-center text-xs text-slate-500 py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const dayBookings = getBookingsForDay(day);
          return (
            <div key={day} className={`min-h-[60px] p-1 border text-xs ${isCurrentDay(day) ? 'border-amber-500/60 bg-amber-500/10' : 'border-slate-700/30 bg-slate-800/20'}`}>
              <div className={`text-right ${isCurrentDay(day) ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>{day}</div>
              {dayBookings.slice(0, 2).map(b => (
                <div key={b.id} className="mt-1 px-1 py-0.5 bg-amber-500/20 text-amber-300 truncate text-[10px]">{b.customerName}</div>
              ))}
              {dayBookings.length > 2 && <div className="text-[10px] text-slate-500">+{dayBookings.length - 2} more</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── REVIEWS MODULE ───────────────────────────────────────────────────────────

function StarDisplay({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400">
      {Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆').join('')}
    </span>
  );
}

type ReviewFormData = Omit<Review, 'id' | 'order'>;
const BLANK_REVIEW: ReviewFormData = { customerName: '', suburb: '', rating: 5, reviewText: '', source: 'Google', visible: true };

function ReviewForm({ initial, onSave, onClose }: { initial: ReviewFormData; onSave: (r: ReviewFormData) => void; onClose: () => void }) {
  const [form, setForm] = useState<ReviewFormData>(initial);
  const set = (k: keyof ReviewFormData, v: unknown) => setForm(p => ({ ...p, [k]: v }));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Field label="Customer Name"><input className={inputCls} value={form.customerName} onChange={e => set('customerName', e.target.value)} required /></Field>
        <Field label="Suburb"><input className={inputCls} value={form.suburb} onChange={e => set('suburb', e.target.value)} /></Field>
        <Field label="Star Rating">
          <div className="flex gap-2">
            {[1,2,3,4,5].map(n => (
              <button key={n} type="button" onClick={() => set('rating', n)} className={`text-2xl ${n <= form.rating ? 'text-amber-400' : 'text-slate-600'}`}>★</button>
            ))}
          </div>
        </Field>
        <Field label="Review Text"><textarea className={inputCls} rows={4} value={form.reviewText} onChange={e => set('reviewText', e.target.value)} /></Field>
        <Field label="Source">
          <select className={selectCls} value={form.source} onChange={e => set('source', e.target.value)}>
            <option>Google</option><option>Facebook</option><option>Direct</option>
          </select>
        </Field>
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-xs text-slate-400">Visible on Website</span>
          <div onClick={() => set('visible', !form.visible)} className={`w-10 h-5 flex items-center px-0.5 cursor-pointer transition-colors ${form.visible ? 'bg-amber-500' : 'bg-slate-600'}`}>
            <div className={`w-4 h-4 bg-white transition-transform ${form.visible ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
        </label>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white">Cancel</button>
          <button type="button" onClick={() => onSave(form)} className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-black font-semibold">Save Review</button>
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Preview</p>
        <div className="bg-[#0a0e1a] border border-amber-500/20 p-5">
          <StarDisplay rating={form.rating} />
          <p className="text-slate-300 text-sm mt-2 leading-relaxed italic">"{form.reviewText}"</p>
          <div className="mt-3 text-xs text-amber-400 font-semibold">{form.customerName || 'Customer Name'}</div>
          <div className="text-xs text-slate-500">{form.suburb} • {form.source}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewsModule({ reviews, setReviews, addActivity, toast }: {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [editReview, setEditReview] = useState<Review | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const sorted = [...reviews].sort((a, b) => a.order - b.order);

  const handleSave = (data: ReviewFormData) => {
    if (editReview) {
      setReviews(p => p.map(r => r.id === editReview.id ? { ...data, id: r.id, order: r.order } : r));
      addActivity(`Updated review from ${data.customerName}`, 'Reviews');
      toast('Review updated');
      setEditReview(null);
    } else {
      const maxOrder = reviews.length ? Math.max(...reviews.map(r => r.order)) : 0;
      setReviews(p => [...p, { ...data, id: uid(), order: maxOrder + 1 }]);
      addActivity(`Added review from ${data.customerName}`, 'Reviews');
      toast('Review added');
      setShowAdd(false);
    }
  };

  const handleDelete = (id: string) => {
    setReviews(p => p.filter(r => r.id !== id));
    addActivity('Deleted review', 'Reviews');
    toast('Review deleted', 'error');
    setDeleteId(null);
  };

  const moveOrder = (id: string, dir: 'up' | 'down') => {
    const idx = sorted.findIndex(r => r.id === id);
    if (dir === 'up' && idx === 0) return;
    if (dir === 'down' && idx === sorted.length - 1) return;
    const swapWith = sorted[dir === 'up' ? idx - 1 : idx + 1];
    setReviews(p => p.map(r => {
      if (r.id === id) return { ...r, order: swapWith.order };
      if (r.id === swapWith.id) return { ...r, order: sorted[idx].order };
      return r;
    }));
    toast('Order updated');
  };

  const toggleVisible = (id: string) => {
    setReviews(p => p.map(r => {
      if (r.id !== id) return r;
      toast(`Review ${r.visible ? 'hidden' : 'shown'}`);
      return { ...r, visible: !r.visible };
    }));
  };

  return (
    <div>
      {(editReview || showAdd) && (
        <Modal title={showAdd ? 'Add Review' : 'Edit Review'} onClose={() => { setEditReview(null); setShowAdd(false); }} wide>
          <ReviewForm initial={editReview ? { customerName: editReview.customerName, suburb: editReview.suburb, rating: editReview.rating, reviewText: editReview.reviewText, source: editReview.source, visible: editReview.visible } : BLANK_REVIEW} onSave={handleSave} onClose={() => { setEditReview(null); setShowAdd(false); }} />
        </Modal>
      )}
      {deleteId && <ConfirmModal message="Delete this review?" onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />}

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">Reviews Manager</h2>
        <button onClick={() => setShowAdd(true)} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold">+ Add Review</button>
      </div>

      <div className="space-y-3">
        {sorted.map((r, idx) => (
          <div key={r.id} className={`border ${r.visible ? 'border-slate-700/40' : 'border-slate-800/40 opacity-50'} bg-slate-800/20 p-4`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <StarDisplay rating={r.rating} />
                  <span className="text-white font-medium text-sm">{r.customerName}</span>
                  <span className="text-xs text-slate-500">{r.suburb}</span>
                  <span className="text-xs bg-slate-700/60 text-slate-400 px-2 py-0.5">{r.source}</span>
                  {!r.visible && <span className="text-xs bg-slate-700 text-slate-500 px-2 py-0.5">Hidden</span>}
                </div>
                <p className="text-slate-300 text-sm mt-2 italic">"{r.reviewText}"</p>
              </div>
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <div className="flex gap-1">
                  <button onClick={() => moveOrder(r.id, 'up')} disabled={idx === 0} className="w-7 h-7 text-xs bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-30">↑</button>
                  <button onClick={() => moveOrder(r.id, 'down')} disabled={idx === sorted.length - 1} className="w-7 h-7 text-xs bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-30">↓</button>
                </div>
                <button onClick={() => toggleVisible(r.id)} className={`px-2 py-1 text-xs ${r.visible ? 'bg-emerald-900/50 text-emerald-300' : 'bg-slate-700 text-slate-400'}`}>
                  {r.visible ? 'Visible' : 'Hidden'}
                </button>
                <button onClick={() => setEditReview(r)} className="px-2 py-1 text-xs bg-amber-900/50 text-amber-300 hover:bg-amber-800/50">Edit</button>
                <button onClick={() => setDeleteId(r.id)} className="px-2 py-1 text-xs bg-slate-700 text-slate-300 hover:bg-red-900/50 hover:text-red-300">Del</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DASHBOARD MODULE ─────────────────────────────────────────────────────────

function DashboardModule({ vehicles, services, enquiries, bookings, reviews, activity }: {
  vehicles: Vehicle[];
  services: Service[];
  enquiries: Enquiry[];
  bookings: Booking[];
  reviews: Review[];
  activity: ActivityEntry[];
}) {
  const inStock = vehicles.filter(v => v.status === 'Available').length;
  const soldMonth = vehicles.filter(v => v.status === 'Sold').length;
  const newEnquiries = enquiries.filter(e => wasWithin7Days(e.dateReceived)).length;
  const upcomingBk = bookings.filter(b => isWithin7Days(b.dateTime) && ['Pending','Confirmed'].includes(b.status)).length;
  const activeReviews = reviews.filter(r => r.visible).length;

  const enquiryTypes = ['Buy','Sell','Trade-In','Repair','Inspection','Finance','RWC','General'];
  const enquiryChart = enquiryTypes.map(t => ({
    label: t,
    value: enquiries.filter(e => e.enquiryType === t).length,
    color: '#f59e0b',
  })).filter(d => d.value > 0);

  const bodyTypes = ['Sedan','SUV','Ute','Hatchback','Wagon','Coupe','Van'];
  const bodyColors = ['#f59e0b','#3b82f6','#10b981','#8b5cf6','#ef4444','#ec4899','#14b8a6'];
  const donutData = bodyTypes.map((t, i) => ({
    label: t,
    value: vehicles.filter(v => v.bodyType === t && v.status === 'Available').length,
    color: bodyColors[i],
  })).filter(d => d.value > 0);

  const stats = [
    { label: 'Vehicles in Stock', value: inStock, icon: '🚗', color: 'border-l-amber-500' },
    { label: 'Vehicles Sold', value: soldMonth, icon: '✅', color: 'border-l-emerald-500' },
    { label: 'New Enquiries (7d)', value: newEnquiries, icon: '📥', color: 'border-l-blue-500' },
    { label: 'Upcoming Bookings', value: upcomingBk, icon: '📅', color: 'border-l-purple-500' },
    { label: 'Services Listed', value: services.filter(s => s.visible).length, icon: '🔧', color: 'border-l-rose-500' },
    { label: 'Active Reviews', value: activeReviews, icon: '⭐', color: 'border-l-yellow-500' },
  ];

  const moduleColors: Record<string, string> = {
    Inventory: 'text-amber-400',
    Services: 'text-blue-400',
    Enquiries: 'text-emerald-400',
    Bookings: 'text-purple-400',
    Reviews: 'text-rose-400',
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Dashboard Overview</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {stats.map(s => (
          <div key={s.label} className={`bg-slate-800/40 border border-slate-700/40 border-l-2 ${s.color} px-4 py-4`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{s.icon}</span>
              <span className="text-3xl font-bold text-white">{s.value}</span>
            </div>
            <div className="text-xs text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/20 border border-slate-700/40 p-4">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">Enquiries by Type</h3>
          <BarChart data={enquiryChart} />
        </div>
        <div className="bg-slate-800/20 border border-slate-700/40 p-4">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">Inventory by Body Type</h3>
          <DonutChart data={donutData} />
        </div>
      </div>

      <div className="bg-slate-800/20 border border-slate-700/40 p-4">
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Recent Activity</h3>
        <div className="space-y-2">
          {activity.slice(0, 5).map(a => (
            <div key={a.id} className="flex items-center gap-3 text-sm">
              <span className={`text-xs font-medium ${moduleColors[a.module] || 'text-slate-400'}`}>[{a.module}]</span>
              <span className="text-slate-300 flex-1">{a.action}</span>
              <span className="text-xs text-slate-500 flex-shrink-0">{a.time}</span>
            </div>
          ))}
          {activity.length === 0 && <p className="text-slate-500 text-sm">No recent activity</p>}
        </div>
      </div>
    </div>
  );
}

// ─── SETTINGS MODULE ──────────────────────────────────────────────────────────

function SettingsModule({ settings, setSettings, addActivity, toast }: {
  settings: BusinessSettings;
  setSettings: React.Dispatch<React.SetStateAction<BusinessSettings>>;
  addActivity: (a: string, m: string) => void;
  toast: (msg: string, type?: Toast['type']) => void;
}) {
  const [form, setForm] = useState<BusinessSettings>(settings);
  const setField = (path: string[], value: unknown) => {
    setForm(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      let obj = next;
      for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
      obj[path[path.length - 1]] = value;
      return next;
    });
  };

  const handleSave = () => {
    setSettings(form);
    addActivity('Updated business settings', 'Settings');
    toast('Settings saved successfully');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-white mb-6">Business Settings</h2>
      <div className="space-y-6">
        <div className="bg-slate-800/20 border border-slate-700/40 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Business Info</h3>
          <Field label="Business Name"><input className={inputCls} value={form.businessName} onChange={e => setField(['businessName'], e.target.value)} /></Field>
          <Field label="Phone"><input className={inputCls} value={form.phone} onChange={e => setField(['phone'], e.target.value)} /></Field>
          <Field label="Email"><input className={inputCls} type="email" value={form.email} onChange={e => setField(['email'], e.target.value)} /></Field>
          <Field label="Address"><input className={inputCls} value={form.address} onChange={e => setField(['address'], e.target.value)} /></Field>
        </div>

        <div className="bg-slate-800/20 border border-slate-700/40 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Trading Hours</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Mon–Fri Open"><input className={inputCls} type="time" value={form.tradingHours.monFri.open} onChange={e => setField(['tradingHours', 'monFri', 'open'], e.target.value)} /></Field>
            <Field label="Mon–Fri Close"><input className={inputCls} type="time" value={form.tradingHours.monFri.close} onChange={e => setField(['tradingHours', 'monFri', 'close'], e.target.value)} /></Field>
            <Field label="Saturday Open"><input className={inputCls} type="time" value={form.tradingHours.sat.open} onChange={e => setField(['tradingHours', 'sat', 'open'], e.target.value)} /></Field>
            <Field label="Saturday Close"><input className={inputCls} type="time" value={form.tradingHours.sat.close} onChange={e => setField(['tradingHours', 'sat', 'close'], e.target.value)} /></Field>
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="text-xs text-slate-400">Sunday Trading</span>
            <div onClick={() => setField(['tradingHours', 'sun', 'enabled'], !form.tradingHours.sun.enabled)} className={`w-10 h-5 flex items-center px-0.5 transition-colors ${form.tradingHours.sun.enabled ? 'bg-amber-500' : 'bg-slate-600'}`}>
              <div className={`w-4 h-4 bg-white transition-transform ${form.tradingHours.sun.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </label>
          {form.tradingHours.sun.enabled && (
            <Field label="Sunday Note"><input className={inputCls} value={form.tradingHours.sun.note} onChange={e => setField(['tradingHours', 'sun', 'note'], e.target.value)} placeholder="e.g. By Appointment" /></Field>
          )}
        </div>

        <div className="bg-slate-800/20 border border-slate-700/40 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Social Links</h3>
          <Field label="Facebook"><input className={inputCls} value={form.socialLinks.facebook} onChange={e => setField(['socialLinks', 'facebook'], e.target.value)} /></Field>
          <Field label="Instagram"><input className={inputCls} value={form.socialLinks.instagram} onChange={e => setField(['socialLinks', 'instagram'], e.target.value)} /></Field>
          <Field label="YouTube"><input className={inputCls} value={form.socialLinks.youtube} onChange={e => setField(['socialLinks', 'youtube'], e.target.value)} /></Field>
        </div>

        <div className="bg-slate-800/20 border border-slate-700/40 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Homepage Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Cars Delivered"><input className={inputCls} type="number" value={form.stats.carsDelivered} onChange={e => setField(['stats', 'carsDelivered'], parseInt(e.target.value))} /></Field>
            <Field label="Years Trading"><input className={inputCls} type="number" value={form.stats.yearsTrading} onChange={e => setField(['stats', 'yearsTrading'], parseInt(e.target.value))} /></Field>
            <Field label="Rating (out of 5)"><input className={inputCls} type="number" step="0.1" min="1" max="5" value={form.stats.rating} onChange={e => setField(['stats', 'rating'], parseFloat(e.target.value))} /></Field>
            <Field label="Happy Customers"><input className={inputCls} type="number" value={form.stats.happyCustomers} onChange={e => setField(['stats', 'happyCustomers'], parseInt(e.target.value))} /></Field>
          </div>
        </div>

        <button onClick={handleSave} className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm w-full">
          Save All Settings
        </button>
      </div>
    </div>
  );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'crown2024') {
        onLogin();
      } else {
        setError('Invalid username or password.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#070b18] flex items-center justify-center p-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-amber-400 text-4xl mb-2">♛</div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Crown Auto Trading</h1>
          <p className="text-slate-500 text-sm mt-1">Admin Dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#0c1527] border border-slate-700/60 p-6 space-y-4">
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Username</label>
            <input
              className={inputCls}
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Password</label>
            <input
              className={inputCls}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm disabled:opacity-50 transition-colors"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-slate-600 text-xs mt-4">Crown Auto Trading © 2024 — 37 Corners Drive, Tarneit VIC</p>
      </div>
    </div>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

const NAV_ITEMS: { id: Module; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'inventory', label: 'Inventory', icon: '🚗' },
  { id: 'services', label: 'Services', icon: '🔧' },
  { id: 'enquiries', label: 'Enquiries', icon: '📥' },
  { id: 'bookings', label: 'Bookings', icon: '📅' },
  { id: 'reviews', label: 'Reviews', icon: '⭐' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

function Sidebar({ active, setActive, unreadCount, sidebarOpen, setSidebarOpen, onLogout }: {
  active: Module;
  setActive: (m: Module) => void;
  unreadCount: number;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  onLogout: () => void;
}) {
  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-56 bg-[#070b18] border-r border-slate-800/60 z-30 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="px-4 py-5 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xl">♛</span>
            <div>
              <div className="text-white text-sm font-bold leading-tight">Crown Auto</div>
              <div className="text-amber-500/70 text-xs">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-3">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors relative ${
                active === item.id
                  ? 'bg-amber-500/10 text-amber-400 border-r-2 border-amber-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {item.id === 'enquiries' && unreadCount > 0 && (
                <span className="ml-auto bg-amber-500 text-black text-xs font-bold px-1.5 py-0.5 min-w-[20px] text-center">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-slate-800/60">
          <button onClick={onLogout} className="w-full text-left text-xs text-slate-500 hover:text-red-400 transition-colors py-1">
            ← Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [activeModule, setActiveModule] = useState<Module>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [vehicles, setVehicles] = useState<Vehicle[]>(SEED_VEHICLES);
  const [services, setServices] = useState<Service[]>(SEED_SERVICES);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(SEED_ENQUIRIES);
  const [bookings, setBookings] = useState<Booking[]>(SEED_BOOKINGS);
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [settings, setSettings] = useState<BusinessSettings>(SEED_SETTINGS);
  const [activity, setActivity] = useState<ActivityEntry[]>([
    { id: uid(), time: '10:32 AM', action: 'System initialized with seed data', module: 'Dashboard' },
  ]);

  const { toasts, add: addToast, remove: removeToast } = useToast();

  const addActivity = (action: string, module: string) => {
    const time = new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });
    setActivity(p => [{ id: uid(), time, action, module }, ...p].slice(0, 50));
  };

  const toast = (msg: string, type?: Toast['type']) => addToast(msg, type);

  const unreadCount = enquiries.filter(e => !e.read).length;

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-[#070b18] text-white flex" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; border-radius: revert !important; }
        .admin-root, .admin-root * { border-radius: revert !important; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes slide-in { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slide-in { animation: slide-in 0.2s ease; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }
        select option { background: #1e293b; }
      `}</style>

      <Sidebar
        active={activeModule}
        setActive={setActiveModule}
        unreadCount={unreadCount}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={() => setAuthed(false)}
      />

      <div className="flex-1 md:ml-56 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex items-center gap-3 px-4 md:px-6 py-3 bg-[#070b18]/95 backdrop-blur border-b border-slate-800/60">
          <button className="md:hidden text-slate-400 hover:text-white p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="flex-1">
            <h1 className="text-sm font-semibold text-white">
              {NAV_ITEMS.find(n => n.id === activeModule)?.icon} {NAV_ITEMS.find(n => n.id === activeModule)?.label}
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">Crown Auto Trading — 37 Corners Drive, Tarneit VIC 3029</p>
          </div>
          <div className="text-xs text-slate-500 hidden md:block">
            {new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 max-w-7xl w-full mx-auto">
          {activeModule === 'dashboard' && (
            <DashboardModule vehicles={vehicles} services={services} enquiries={enquiries} bookings={bookings} reviews={reviews} activity={activity} />
          )}
          {activeModule === 'inventory' && (
            <InventoryModule vehicles={vehicles} setVehicles={setVehicles} addActivity={addActivity} toast={toast} />
          )}
          {activeModule === 'services' && (
            <ServicesModule services={services} setServices={setServices} addActivity={addActivity} toast={toast} />
          )}
          {activeModule === 'enquiries' && (
            <EnquiriesModule enquiries={enquiries} setEnquiries={setEnquiries} addActivity={addActivity} toast={toast} />
          )}
          {activeModule === 'bookings' && (
            <BookingsModule bookings={bookings} setBookings={setBookings} addActivity={addActivity} toast={toast} />
          )}
          {activeModule === 'reviews' && (
            <ReviewsModule reviews={reviews} setReviews={setReviews} addActivity={addActivity} toast={toast} />
          )}
          {activeModule === 'settings' && (
            <SettingsModule settings={settings} setSettings={setSettings} addActivity={addActivity} toast={toast} />
          )}
        </main>
      </div>

      <ToastContainer toasts={toasts} remove={removeToast} />
    </div>
  );
}
