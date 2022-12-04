import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../src/lib/gtag";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <Script
          strategy="beforeInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></Script>
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
          }}
        />

        <Script
          id="buymeacoffee-widget"
          strategy="beforeInteractive"
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="rohid"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#6366F1"
          data-position="Right"
          data-x_margin="24"
          data-y_margin="156"
        ></Script>

        <Script
          id="ezoic-code"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "var ezoicId = 411426;",
          }}
        ></Script>
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src="//go.ezoic.net/ezoic/ezoic.js"
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
