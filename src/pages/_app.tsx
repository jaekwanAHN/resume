import type { AppProps } from 'next/app';
import '@/style/reset.css';
import '@/style/globalStyle.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
