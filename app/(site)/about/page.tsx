import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Crown Auto Trading | Melbourne\'s Trusted Used Car Dealer',
  description:
    'Learn about Crown Auto Trading — over 10 years of serving Melbourne\'s west with quality used cars, honest service, and professional auto repairs. Family-owned, community trusted.',
  keywords: [
    'about Crown Auto Trading',
    'used car dealer Melbourne',
    'trusted car dealer Tarneit',
    'car dealer Melbourne west',
    'family car dealer Melbourne',
  ],
  openGraph: {
    title: 'About Crown Auto Trading | Trusted Melbourne Car Dealer',
    description: 'Over 10 years serving Melbourne\'s west. Quality cars, honest service, professional repairs.',
    url: 'https://crownautotrading.com.au/about',
  },
}

const team = [
  {
    name: 'Alex Crown',
    role: 'Founder & Principal Dealer',
    emoji: '👨‍💼',
    bio: '15+ years in the automotive industry. Alex founded Crown Auto Trading with a simple vision: honest car dealing with quality you can trust.',
  },
  {
    name: 'Raj Mehta',
    role: 'Head Mechanic',
    emoji: '👨‍🔧',
    bio: 'Certified master technician with 12 years of experience across all makes and models. Raj leads our repair team with precision and care.',
  },
  {
    name: 'Sarah Williams',
    role: 'Finance & Sales Manager',
    emoji: '👩‍💼',
    bio: 'Sarah makes the buying process seamless. She specialises in tailored finance solutions that get customers on the road faster.',
  },
  {
    name: 'Tom Clarke',
    role: 'Vehicle Inspector',
    emoji: '🔍',
    bio: 'Former RACV inspector with an obsessive eye for detail. Tom ensures every car on our lot meets the Crown standard.',
  },
]

const milestones = [
  { year: '2014', event: 'Crown Auto Trading founded in Tarneit, VIC' },
  { year: '2016', event: 'Expanded to include full mechanical repair workshop' },
  { year: '2018', event: 'Reached 200+ vehicles sold milestone' },
  { year: '2020', event: 'Introduced pre-purchase inspection services' },
  { year: '2022', event: 'Launched finance options for all credit types' },
  { year: '2024', event: '500+ happy customers — still going strong' },
]

const values = [
  {
    icon: '🤝',
    title: 'Honesty',
    desc: 'We tell you exactly what you\'re getting. No hidden fees, no surprises — just transparent, straightforward dealings.',
  },
  {
    icon: '🏅',
    title: 'Quality',
    desc: 'Every vehicle is inspected before listing. Every repair is done right. We never cut corners on quality.',
  },
  {
    icon: '❤️',
    title: 'Community',
    desc: 'We\'re proud members of Melbourne\'s west. We sponsor local events and reinvest in the community we serve.',
  },
  {
    icon: '🚀',
    title: 'Excellence',
    desc: 'We\'re constantly improving — our processes, our services, our team. We never settle for good enough.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="relative py-16 overflow-hidden">
        <div className="hero-glow w-[500px] h-64 bg-gold-700 top-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-4">
                <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">Our Story</span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
                About <span className="gold-text">Crown Auto</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Crown Auto Trading was founded on a simple belief: buying or selling a car should be an enjoyable experience — not a stressful one.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Since 2014, we've been serving Melbourne's west from our home in Tarneit. We've grown from a small lot to a full-service automotive destination offering car sales, professional repairs, pre-purchase inspections, and flexible finance — all under one roof.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                What sets us apart isn't just our selection or our prices — it's the way we treat people. We listen, we advise honestly, and we never push. Our customers come back again and again because they trust us. That trust is something we've earned over 10+ years and over 500 happy customers.
              </p>
              <div className="flex gap-4">
                <Link href="/inventory" className="btn-gold px-7 py-3.5 rounded text-xs font-bold tracking-widest inline-block">
                  VIEW CARS
                </Link>
                <Link href="/contact" className="btn-outline-gold px-7 py-3.5 rounded text-xs font-bold tracking-widest inline-block">
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '10+', label: 'Years in Business', icon: '📅' },
                { value: '500+', label: 'Cars Sold', icon: '🚗' },
                { value: '4.9★', label: 'Google Rating', icon: '⭐' },
                { value: '100%', label: 'Satisfaction Focus', icon: '💯' },
              ].map((s) => (
                <div key={s.label} className="stat-card rounded-2xl p-7 text-center card-hover">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="font-display text-3xl font-bold gold-text mb-1">{s.value}</div>
                  <div className="text-gray-400 text-xs tracking-widest uppercase font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="relative py-16 overflow-hidden mt-8">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Our <span className="gold-text">Core Values</span>
            </h2>
            <p className="text-gray-400">The principles we build every interaction on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="gold-border bg-crown-low rounded-xl p-7 text-center card-hover">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-white mb-3">
            Meet the <span className="gold-text">Team</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Real people who care about your car as much as you do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="gold-border bg-crown-low rounded-xl p-7 text-center card-hover group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-600/30 to-yellow-900/20 border border-gold-500/30 flex items-center justify-center text-4xl mx-auto mb-5 group-hover:scale-110 transition-transform">
                {member.emoji}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
              <div className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-3">{member.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative py-16 overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="section-divider absolute bottom-0 left-0 right-0" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Our <span className="gold-text">Journey</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/30 to-transparent -translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="gold-border bg-crown-low rounded-xl p-4 inline-block max-w-xs">
                      <p className="text-gray-300 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center font-display font-bold text-black text-xs text-center leading-tight flex-shrink-0 shadow-lg shadow-yellow-500/30">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1">
                    <span className="gold-text font-display font-bold text-xl">{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">
          Come Visit Us in <span className="gold-text">Tarneit</span>
        </h2>
        <p className="text-gray-400 mb-8">
          We'd love to meet you in person. Drop into the showroom, browse our stock, and let our team help you find the perfect car.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://maps.google.com/?q=37+Corners+Drive+Tarneit+VIC+3029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 rounded text-sm font-bold tracking-widest inline-block"
          >
            📍 GET DIRECTIONS
          </a>
          <a href="tel:0450758282" className="btn-outline-gold px-8 py-4 rounded text-sm font-bold tracking-widest inline-block">
            📞 CALL US NOW
          </a>
        </div>
      </div>
    </div>
  )
}
