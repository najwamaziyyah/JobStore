import { useTranslation } from 'next-i18next';

import { home } from '~/modules/urls';

export const useHeader = () => {
  const { t } = useTranslation('header');

  const HOME_HEADER_LINKS = [
    {
      title: t('Browse Job'),
      url: home,
    },
    {
      title: t('Companies'),
      url: home,
    },

    {
      title: t('Download App'),
      url: home,
    },
  ];
  return HOME_HEADER_LINKS;
};
