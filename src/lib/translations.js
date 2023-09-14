import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'], // you can use regexes as well!
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./en/about.json')
      ).default,
    },
    {
      locale: 'ru',
      key: 'common',
      loader: async () => (
        await import('./ru/common.json')
      ).default,
    },
    {
      locale: 'ru',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./ru/home.json')
      ).default,
    },
    {
      locale: 'ru',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./ru/about.json')
      ).default,
    },
    {
      locale: 'ar',
      key: 'common',
      loader: async () => (
        await import('./ar/common.json')
      ).default,
    },
    {
      locale: 'ar',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./ar/home.json')
      ).default,
    },
    {
      locale: 'ar',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./ar/about.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);