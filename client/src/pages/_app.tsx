import 'tailwindcss/tailwind.css';
import { ThemeProvider } from '@material-tailwind/react';

import React from 'react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
