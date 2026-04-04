import Image from 'next/image'
import crownLogo from '../images/logo/logo.webp'

type BrandLogoProps = {
  variant?: 'full' | 'compact' | 'mark'
  align?: 'center' | 'start'
  className?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const variantStyles = {
  full: 'h-16 sm:h-20 lg:h-24 w-auto',
  compact: 'h-9 sm:h-11 w-auto',
  mark: 'h-10 sm:h-12 w-auto',
} as const

export default function BrandLogo({
  variant = 'compact',
  align = 'center',
  className,
}: BrandLogoProps) {
  return (
    <div className={cn('inline-flex', align === 'start' ? 'justify-start' : 'justify-center')}>
      <Image
        src={crownLogo}
        alt={variant === 'mark' ? '' : 'Crown Auto Trading'}
        priority={variant !== 'mark'}
        className={cn(
          'object-contain',
          variantStyles[variant],
          className,
          variant === 'mark'
            ? 'opacity-72'
            : 'drop-shadow-[0_18px_34px_rgba(0,0,0,0.38)]'
        )}
      />
    </div>
  )
}
