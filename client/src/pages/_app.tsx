import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import React from 'react';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, //「react-query」のデフォルトでは、フェッチに失敗した場合は、3回までリトライする設定になっている。今回は、falseを設定したので、リトライはされないようになる。
      refetchOnWindowFocus: false, //「react-query」のデフォルトでは、ユーザーがアプリケーションのブラウザにフォーカスを当てた時に、自動的にフェッチが走るようになっている。過剰なフェッチが発生する可能性があるので、今回はfalseを設定しておく。
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
