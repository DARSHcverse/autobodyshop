import {
  ShieldCheckIcon,
  SparkIcon,
  SwapIcon,
  WalletIcon,
  WrenchIcon,
} from './icons'

const reasons = [
  {
    icon: ShieldCheckIcon,
    title: 'Quality Guaranteed',
    description:
      'Every vehicle is inspected before it reaches the listing stage so buyers can arrive informed.',
  },
  {
    icon: WalletIcon,
    title: 'Transparent Pricing',
    description:
      'No games, no bloated add-ons, just straight drive-away conversations and clear next steps.',
  },
  {
    icon: SparkIcon,
    title: 'Presentation Matters',
    description:
      'Cars and customer touchpoints are shown with more polish because trust starts before the first call.',
  },
  {
    icon: SwapIcon,
    title: 'Trade-In Ready',
    description:
      'Appraisals, stock selection, and upgrade conversations happen in one place instead of across providers.',
  },
  {
    icon: WrenchIcon,
    title: 'Workshop Backing',
    description:
      'Servicing, repairs, and pre-purchase checks are handled by the same business, not outsourced guesswork.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Post-Sale Support',
    description:
      'The relationship continues after handover with follow-up guidance and workshop access when needed.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative grid-bg py-20">
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="gold-border h-fit rounded-[32px] p-8 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-white/[0.03] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-300">
              The Crown Difference
            </div>

            <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
              A more <span className="gold-text">trust-led</span> dealership experience.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
              The visual refresh is not just decoration. It supports the positioning: premium
              stock, clear communication, and a more considered showroom brand.
            </p>

            <div className="mt-10 rounded-[28px] border border-white/8 bg-black/20 p-6">
              <div className="grid gap-4">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.02] p-4">
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold-300">
                    More Premium
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Cleaner surfaces, stronger hierarchy, and consistent brand placement.
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.02] p-4">
                  <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold-300">
                    More Credible
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Fewer emoji placeholders, clearer value signals, and better visual polish.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <div
                  key={reason.title}
                  className="gold-border card-hover rounded-[28px] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="service-icon inline-flex h-12 w-12 items-center justify-center rounded-2xl text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/34">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/56">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
