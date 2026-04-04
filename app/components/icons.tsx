import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function BaseIcon({
  children,
  ...props
}: IconProps & {
  children?: ReactNode
}) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.15 12.8 19.8 19.8 0 0 1 2.08 4.09 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72l.38 2.7a2 2 0 0 1-.57 1.69l-1.7 1.7a16 16 0 0 0 7 7l1.7-1.7a2 2 0 0 1 1.69-.57l2.7.38A2 2 0 0 1 22 16.92z" />
    </BaseIcon>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
      <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </BaseIcon>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 22s7-3.33 7-10V5l-7-3-7 3v7c0 6.67 7 10 7 10Z" />
      <path d="m9 12 2 2 4-4" />
    </BaseIcon>
  )
}

export function WrenchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m14.7 6.3 3 3" />
      <path d="M11.9 8.1a4.5 4.5 0 1 0 4 4l4.2 4.2a2 2 0 0 0 2.8-2.8L18.7 9.3a4.5 4.5 0 0 0-6.8-1.2Z" />
    </BaseIcon>
  )
}

export function WalletIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1Z" />
      <path d="M16 13h5" />
      <path d="M18 10V6a2 2 0 0 0-2-2H6" />
      <circle cx="16.5" cy="13" r=".5" fill="currentColor" stroke="none" />
    </BaseIcon>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </BaseIcon>
  )
}

export function SwapIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 7h13" />
      <path d="m15 3 5 4-5 4" />
      <path d="M17 17H4" />
      <path d="m9 21-5-4 5-4" />
    </BaseIcon>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m5 16 .9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </BaseIcon>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </BaseIcon>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </BaseIcon>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.74" />
    </BaseIcon>
  )
}

export function GaugeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.9 19a9 9 0 1 1 14.2 0" />
      <path d="M12 13 16.5 8.5" />
      <path d="M12 13 9.5 10.5" />
      <path d="M12 13v6" />
    </BaseIcon>
  )
}

export function CarSideIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 15.5 6.7 10a2.5 2.5 0 0 1 2.4-1.8h5.7a3.5 3.5 0 0 1 2.7 1.3l2.1 2.5a2.5 2.5 0 0 1 .6 1.6v2.9H5v-1Z" />
      <path d="M7.5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      <path d="M17.5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      <path d="M6 13h13" />
      <path d="M9 8.2 10.2 13" />
      <path d="M16.7 9.7 13 13" />
    </BaseIcon>
  )
}
