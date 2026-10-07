import { Sparkle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  what: string
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

/**
 * No AI systems are currently being showcased.
 * This file is kept for compatibility with the original template.
 */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Healthcare administrative, research, and medical data support.',
  stack: 'Medical Virtual Assistance',
  children: [],
}
