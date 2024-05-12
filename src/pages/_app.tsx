import type { AppProps } from 'next/app';
import Head from 'next/head';

import MainLayout from 'layout';
import 'assets/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hoang The Nhan - CV</title>
        <meta
          name="description"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="preload"
          href="/fonts/Abolition.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/nunito-sansRegular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Fester.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link rel="preload" as="image" href="banner.png" crossOrigin="" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
