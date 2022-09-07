import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import * as gtag from "../src/lib/gtag";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
          crossOrigin="anonymous"
        ></Script>
        <Script
          strategy="beforeInteractive"
          defer
          data-domain="codetoimg.com"
          src="https://plausible.io/js/plausible.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
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
