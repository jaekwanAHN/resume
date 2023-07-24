import type { AppProps } from 'next/app';
import '@/style/globalStyle.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
