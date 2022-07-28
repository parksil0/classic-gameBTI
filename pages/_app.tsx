import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@kfonts/neodgm';
import { Global, ThemeProvider } from '@emotion/react';

import { globalStyles } from '@/styles/globalStyles';
import theme from '@/styles/theme';
import usePageView from '@/hooks/usePageView';
import GoogleAnalytics from '@/components/Script/GoogleAnalytics';
import KakaoDevelopers from '@/components/Script/KakaoDevelopers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>classic gameBTI!</title>
      </Head>
      <KakaoDevelopers />
      <GoogleAnalytics />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
