import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="hero-glow left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-gold-700" />

      <div className="gold-border relative z-10 max-w-xl rounded-[34px] p-10 text-center">
        <div className="gold-text font-body text-[5rem] font-extrabold leading-none opacity-20">
          404
        </div>
        <h1 className="mt-8 font-display text-4xl font-semibold text-white">Page Not Found</h1>
        <p className="mt-4 text-base leading-8 text-white/56">
          This page is missing, but the rest of the showroom is still open.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-gold rounded-full px-8 py-4 text-[0.72rem]">
            Go Home
          </Link>
          <Link href="/inventory" className="btn-outline-gold rounded-full px-8 py-4 text-[0.72rem]">
            View Cars
          </Link>
        </div>
      </div>
    </div>
  )
}
