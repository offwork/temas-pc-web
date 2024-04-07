const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://temas-pc-technik.de/',
  title: 'Devhints.io cheatsheets'
} as const

export const googleAnalytics = {
  enabled: isProd,
  measurementId: "G-D7ZV4YM2WX"
} as const

export const googleMaps = {
  enabled: isProd,
  mapKey: "AIzaSyAXB5ArSBw7RzZqM7InfT6Q21tMQKTYSiY"
} as const

export const github = {
  repositoryUrl: 'https://github.com/offwork/temas-pc-web',
  branch: 'main'
} as const
