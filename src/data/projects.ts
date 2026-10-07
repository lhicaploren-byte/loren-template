export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

const PATIENT_DATA_STATS: AppStat[] = [
  { value: 'Excel', label: 'Platform' },
  { value: '100%', label: 'Accuracy Focus' },
  { value: 'Sample', label: 'Patient Data' },
]

const PATIENT_DATA_DESCRIPTION =
  'A portfolio demonstration focused on accurate patient data entry and records management using Microsoft Excel. The project demonstrates structured patient identification, organized record keeping, and careful handling of healthcare information using fictional sample data.'

export const mobileApps: MobileApp[] = [
  {
    name: 'Patient Data Entry & Records Management',
    tagline: 'Accurate and organized healthcare data management.',
    description: PATIENT_DATA_DESCRIPTION,
    accentColor: '#2563EB',
    stats: PATIENT_DATA_STATS,
    badge: 'Healthcare Data',
  },
]

export const webApps: AppProject[] = []
