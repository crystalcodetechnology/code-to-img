import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        {/* Gogole Adservice Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        {/* Google Tagmanager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DPNQZEQHZ6"
          strategy="beforeInteractive"
        />
        <Script
          id="ads"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DPNQZEQHZ6');  
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
