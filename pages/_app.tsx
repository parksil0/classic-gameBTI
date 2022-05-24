import type { AppProps } from 'next/app';
import { ThemeProvider } from '@react95/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/utils/gtag';

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
		<ThemeProvider>
			<>
				<Head>
					<title>classic gameBTI!</title>
				</Head>
				<Component {...pageProps} />
			</>
		</ThemeProvider>
	);
};

export default MyApp;
