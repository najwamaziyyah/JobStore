module.exports = {
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
  },
  nonExplicitSupportedLngs: true,
};
