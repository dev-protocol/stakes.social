import NextI18Next from 'next-i18next';
var nextI18Next = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['ja'],
    localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
    strictMode: false
});
export var Router = nextI18Next.Router, Link = nextI18Next.Link, useTranslation = nextI18Next.useTranslation, appWithTranslation = nextI18Next.appWithTranslation, initPromise = nextI18Next.initPromise, i18n = nextI18Next.i18n;
export * from './locales';
export default nextI18Next;
