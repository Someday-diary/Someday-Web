import { RecoilRoot } from 'recoil';

import type { AppProps } from "next/app";

import GlobalStyle from 'src/styles/global-styles';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <GlobalStyle />
        <Component {...pageProps} />
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export default MyApp
