/* eslint-disable no-console */
import { StyleProvider } from '@ant-design/cssinjs';
import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import React, { useState, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import ToastContainer from './components/ToastContainer';
import { IS_DEV } from './core/config';
import store from './core/redux/store';
import { triggerReLogin } from './core/utils';
import { ICON_DEFAULT_SIZE } from '~/core/constants/theme';

type ConfigureAppProps = Pick<
  AppProps<{ dehydratedState?: DehydratedState }>,
  'pageProps'
> &
  PropsWithChildren;

const ConfigureApp = ({ children, pageProps }: ConfigureAppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
          mutations: {
            retry: false,
            onError: (error) => triggerReLogin(error),
          },
        },
        logger: {
          log: console.log,
          warn: console.warn,
          error: !IS_DEV ? () => {} : console.error,
        },
      }),
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps?.dehydratedState}>
          <IconProvider
            value={{ ...DEFAULT_ICON_CONFIGS, size: ICON_DEFAULT_SIZE }}
          >
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#004e5a',
                  fontFamily: 'Montserrat, sans-serif;',
                  colorTextBase: '#0f172a',
                },
                components: {
                  Button: {
                    borderRadius: 0,
                  },
                  Typography: {
                    sizeMarginHeadingVerticalStart: 0,
                    sizeMarginHeadingVerticalEnd: 0,
                  },
                  Steps: {
                    controlItemBgActive: '#d1fae5',
                    iconSize: 48,
                  },
                },
              }}
            >
              <StyleProvider hashPriority="high">{children}</StyleProvider>
            </ConfigProvider>
          </IconProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default ConfigureApp;
