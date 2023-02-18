import './style.css';
import 'src/locales/i18n';
import 'simplebar-react/dist/simplebar.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';

import ProgressBar from 'src/components/progress-bar';
import SnackbarProvider from 'src/components/snackbar';
import { MotionLazyContainer } from 'src/components/animate';
import ThemeSettings from 'src/components/settings';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import createEmotionCache from 'src/utils/createEmotionCache';
import ThemeProvider from 'src/theme';
import ThemeLocalization from 'src/locales';
import AppApolloProvider from "src/contexts/ApolloContext";


const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {

  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AppApolloProvider>
      <SettingsProvider>
        <MotionLazyContainer>
          <ThemeProvider>
            <ThemeSettings>
              <ThemeLocalization>
                <SnackbarProvider>
                  <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
              </ThemeLocalization>
            </ThemeSettings>
          </ThemeProvider>
        </MotionLazyContainer>
        </SettingsProvider>
      </AppApolloProvider>
    </CacheProvider>
  );
}
