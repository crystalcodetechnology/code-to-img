import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <Script
          strategy="beforeInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
