export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  dir?: 'funnels' | 'samples'
}

/**
 * No funnel or website projects are currently being showcased.
 * This file is kept for compatibility with the original template.
 */

export const gymFunnel: Funnel[] = []

export const bookingFunnel: Funnel[] = []

export const websiteFunnel: Funnel[] = []

export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#FF7A1A',
}
