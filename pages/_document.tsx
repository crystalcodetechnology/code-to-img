import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../src/lib/gtag";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
