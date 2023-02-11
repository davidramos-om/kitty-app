import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from '../utils/createEmotionCache';
import palette from '../theme/palette';
import { primaryFont } from '../theme/typography';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={primaryFont.className}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />

          {/* PWA primary color */}
          <meta name="theme-color" content={palette('light').primary.main} />

          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

          <script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js" defer/> 
          <script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js" defer/>
          <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js" defer/>
          <script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js" defer/>
          <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" defer/>


          {/* Emotion */}
          <meta name="emotion-insertion-point" content="" />
          {(this.props as any).emotionStyleTags}

          {/* Meta */}
          <meta
            name="description"
            content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
          />
          <meta name="keywords" content="react,material,kit,application,dashboard,admin,template" />
          <meta name="author" content="Minimal UI Kit" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
