'use client'

import { useState } from 'react'

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    lines: ['37 Corners Drive', 'Tarneit, VIC 3029'],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=37+Corners+Drive+Tarneit+VIC+3029' },
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: ['0450 758 282'],
    action: { label: 'Call Now', href: 'tel:0450758282' },
  },
  {
    icon: '✉️',
    title: 'Email Us',
    lines: ['info@crownautotrading.com.au'],
    action: { label: 'Send Email', href: 'mailto:info@crownautotrading.com.au' },
  },
  {
    icon: '🕐',
    title: 'Opening Hours',
    lines: ['Mon–Fri: 9am – 6pm', 'Saturday: 9am – 5pm', 'Sun: By Appointment'],
    action: null,
  },
]

const enquiryTypes = [
  'Buy a Vehicle',
  'Sell My Car',
  'Trade-In',
  'Auto Repair / Service',
  'Pre-Purchase Inspection',
  'Finance Enquiry',
  'Roadworthy Certificate',
  'General Enquiry',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    vehicle: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="relative py-16 overflow-hidden">
        <div className="hero-glow w-[500px] h-64 bg-gold-700 top-0 left-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
            <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            Have a question? Want a quote? Ready to buy or sell? We'd love to hear from you. Our team typically responds within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactInfo.map((item) => (
            <div key={item.title} className="gold-border bg-crown-low rounded-xl p-6 card-hover">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-gray-400 text-sm">{line}</p>
              ))}
              {item.action && (
                <a
                  href={item.action.href}
                  target={item.action.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 text-xs font-bold tracking-widest uppercase mt-3 hover:text-gold-300 transition-colors group"
                >
                  {item.action.label}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="gold-border bg-crown-low rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-white mb-6">
                Send Us a <span className="gold-text">Message</span>
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out. We'll get back to you within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', enquiryType: '', vehicle: '', message: '' }) }}
                    className="btn-outline-gold px-6 py-3 rounded text-sm font-bold tracking-widest"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="form-input w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="04XX XXX XXX"
                        className="form-input w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="form-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3 rounded-lg text-sm bg-crown-low"
                    >
                      <option value="">Select an enquiry type...</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                      Vehicle (if applicable)
                    </label>
                    <input
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      placeholder="e.g. 2020 Toyota Camry or I'm looking for a SUV"
                      className="form-input w-full px-4 py-3 rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="form-input w-full px-4 py-3 rounded-lg text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 rounded-lg text-sm font-bold tracking-widest disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      'SEND MESSAGE →'
                    )}
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    We respond within 2 hours during business hours. Your details are kept private.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map + Extra Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Google Maps embed placeholder */}
            <div className="gold-border bg-crown-low rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-5xl mb-3">🗺️</div>
                  <div className="text-gray-400 text-sm mb-4">37 Corners Drive<br />Tarneit, VIC 3029</div>
                  <a
                    href="https://maps.google.com/?q=37+Corners+Drive+Tarneit+VIC+3029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold px-5 py-2.5 rounded text-xs font-bold tracking-widest inline-block"
                  >
                    OPEN IN MAPS
                  </a>
                </div>
                {/* Replace above div content with actual Google Maps iframe in production: */}
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                /> */}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="gold-border bg-crown-low rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:0450758282"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all group"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="text-white font-bold text-sm group-hover:text-gold-400 transition-colors">Call Now</div>
                    <div className="text-gray-400 text-xs">0450 758 282</div>
                  </div>
                  <span className="ml-auto text-gold-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="mailto:info@crownautotrading.com.au"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gold-500/5 border border-gold-500/20 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all group"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="text-white font-bold text-sm group-hover:text-gold-400 transition-colors">Email Us</div>
                    <div className="text-gray-400 text-xs">Replied within 2hrs</div>
                  </div>
                  <span className="ml-auto text-gold-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://wa.me/61450758282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                >
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">WhatsApp</div>
                    <div className="text-gray-400 text-xs">Chat instantly</div>
                  </div>
                  <span className="ml-auto text-green-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="gold-border bg-crown-low rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2.5">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM', open: true },
                  { day: 'Saturday', hours: '9:00 AM – 5:00 PM', open: true },
                  { day: 'Sunday', hours: 'By Appointment', open: false },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{h.day}</span>
                    <span className={`text-sm font-semibold ${h.open ? 'text-gold-400' : 'text-gray-500'}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Open Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
