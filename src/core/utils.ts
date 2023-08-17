import dayjs from 'dayjs';
import { i18n } from 'next-i18next';
import { toast } from 'react-toastify';

import { IMAGE_URL } from './config';

export const formatDateTime = (value: string) =>
  dayjs(value).format('DD/MM/YYYY h:mm:ss A');

export const shortFormatDate = (value: string) =>
  dayjs(value).format('DD MMM YYYY');

export const getImageUrl = (src?: string) => {
  if (src) {
    return `${IMAGE_URL}${src}`;
  }

  return '';
};

export const triggerReLogin = (error: any, forceReLogin?: boolean) => {
  if (error?.error?.status === 401 || forceReLogin) {
    toast.error(i18n?.t('unauthenticated'));
  }
};
