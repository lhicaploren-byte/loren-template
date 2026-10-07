/**
 * Loren H. Liwanag - Personal Portfolio
 *
 * Medical Virtual Assistant | Medical Laboratory Scientist
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Loren H. Liwanag',
  firstName: 'Loren',
  handle: '@lorenliwanag',
  role: 'Medical Virtual Assistant | Medical Laboratory Scientist',
  avatarSrc: '/loren-profile.jpg',
  verifiedLabel: 'Medical Laboratory Scientist',
  email: 'lhicaploren@gmail.com',
  location: 'Philippines',

  stats: [
    {
      value: '3 yrs',
      label: 'Healthcare Experience',
      Icon: Briefcase,
    },
    {
      value: 'MLS',
      label: 'Medical Laboratory Scientist',
      Icon: SealCheck,
    },
    {
      value: 'MVA',
      label: 'Medical Virtual Assistance',
      Icon: Clock,
    },
  ],

  displayName: {
    line1: 'Healthcare expertise.',
    line2: 'Administrative precision.',
  },

  hero: {
    body: 'Medical Laboratory Scientist transitioning into Medical Virtual Assistance, providing reliable healthcare administrative, research, and data support with accuracy and confidentiality.',
    portraitSrc: '/loren-profile.jpg',
    portraitAlt: 'Professional portrait of Loren H. Liwanag',
  },

  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/loren-liwanag-546014306',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
