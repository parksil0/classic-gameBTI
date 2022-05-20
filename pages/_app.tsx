import type { AppProps } from 'next/app';
import { ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
