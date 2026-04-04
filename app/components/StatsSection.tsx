import {
  CalendarIcon,
  GaugeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from './icons'

const stats = [
  {
    value: '500+',
    label: 'Vehicles Sold',
    icon: ShieldCheckIcon,
    detail: 'Inspected and presented with confidence.',
  },
  {
    value: '10+',
    label: 'Years Experience',
    icon: CalendarIcon,
    detail: 'Serving Melbourne buyers since 2014.',
  },
  {
    value: '4.9/5',
    label: 'Customer Rating',
    icon: GaugeIcon,
    detail: 'Built on consistent service and clean delivery.',
  },
  {
    value: '1,000+',
    label: 'Happy Customers',
    icon: UsersIcon,
    detail: 'Buying, selling, trade-ins, and workshop care.',
  },
]

export default function StatsSection() {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div key={stat.label} className="stat-card rounded-[28px] p-6 card-hover">
                <div className="flex items-center justify-between gap-4">
                  <div className="service-icon inline-flex h-12 w-12 items-center justify-center rounded-2xl text-gold-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/38">
                    Crown Metric
                  </div>
                </div>

                <div className="gold-text mt-8 text-4xl font-extrabold">{stat.value}</div>
                <div className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/52">
                  {stat.label}
                </div>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/56">{stat.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
