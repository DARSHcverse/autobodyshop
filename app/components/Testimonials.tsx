import { StarIcon } from './icons'

const testimonials = [
  {
    name: 'Michael T.',
    location: 'Hoppers Crossing, VIC',
    text: 'Bought a Mazda CX-5 from Crown Auto and the experience was flawless. The team was honest, professional, and got me a great deal on finance.',
  },
  {
    name: 'Sarah K.',
    location: 'Werribee, VIC',
    text: 'Sold my old car here and got a fair price the same day. No lowballing, no time-wasting. Crown Auto is the real deal.',
  },
  {
    name: 'James R.',
    location: 'Point Cook, VIC',
    text: 'The repair service is top-notch. They diagnosed my car quickly, kept me updated, and had it back on the road ahead of schedule.',
  },
  {
    name: 'Priya M.',
    location: 'Tarneit, VIC',
    text: 'As a first-time buyer I was nervous, but the whole process felt considered and stress-free. The team made the right impression from the start.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-crown-lowest py-20">
      <div className="hero-glow bottom-0 right-10 h-96 w-96 bg-gold-500" />
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
              Customer Reviews
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
              Presentation matters, but <span className="gold-text">service keeps people talking.</span>
            </h2>
          </div>

          <div className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/56">
            Verified local buyers and workshop customers
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="gold-border card-hover relative overflow-hidden rounded-[30px] p-7"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-1.5 text-gold-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-4 w-4 fill-current stroke-none" />
                    ))}
                  </div>
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/36">
                    Google Review
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-300/20 bg-gold-400/10 text-sm font-bold text-gold-300">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/42">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
