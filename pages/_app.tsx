import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '@kfonts/neodgm';
import { Global, ThemeProvider } from '@emotion/react';

import * as gtag from '@/utils/gtag';
import { globalStyles } from '@/styles/globalStyles';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>classic gameBTI!</title>
			</Head>
			<Global styles={globalStyles} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
