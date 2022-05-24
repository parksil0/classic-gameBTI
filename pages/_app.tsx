import type { AppProps } from 'next/app';
import { ThemeProvider } from '@react95/core';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
