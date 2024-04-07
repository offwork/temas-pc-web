const isProd = Boolean(import.meta.env.PROD)
const measurementId = import.meta.env.GOOGLE_MEASUREMENT_ID
const mapKey = import.meta.env.GOOGLE_MAPS_KEY

export const site = {
  url: 'https://temas-pc-technik.de/',
  title: 'Devhints.io cheatsheets'
} as const

export const googleAnalytics = {
  enabled: isProd,
  measurementId: measurementId
} as const

export const googleMaps = {
  enabled: isProd,
  mapKey: mapKey
} as const

export const github = {
  repositoryUrl: 'https://github.com/offwork/temas-pc-web',
  branch: 'main'
} as const
