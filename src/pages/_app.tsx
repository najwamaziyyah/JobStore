import '~/styles/global.css';

import { DehydratedState } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { appWithTranslation, SSRConfig } from 'next-i18next';

import ConfigureApp from '~/ConfigureApp';
import useDisplaySplashScreen from '~/core/hooks/useDisplaySplashScreen';

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState?: DehydratedState }>) => {
  const { isLoading } = useDisplaySplashScreen();
  if (isLoading) {
    return null;
  }
  return (
    <ConfigureApp pageProps={pageProps}>
      <Component {...pageProps} />
    </ConfigureApp>
  );
};

export default appWithTranslation<
  AppProps<{ dehydratedState?: DehydratedState } & SSRConfig>
>(App);
