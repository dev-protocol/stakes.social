import NextI18Next from 'next-i18next'

const nextI18Next = new NextI18Next({
  defaultLanguage: 'jp',
  otherLanguages: ['en'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  strictMode: false
})

export type LanguageType = 'jp' | 'en'

export const { Router, Link, useTranslation, appWithTranslation, initPromise, i18n } = nextI18Next

export * from './locales'

export default nextI18Next
