import { AppProps } from "next/app";
import Script from "next/script";
import Header from "../src/components/Header";
import SEO from "../src/components/SEO";
import { EditorProvider } from "../src/contexts/EditorContext";
import { GA_TRACKING_ID } from "../src/lib/gtag";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <EditorProvider>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>
          <Script
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
            crossOrigin="anonymous"
          ></Script>
        </>
      )}
      <SEO />
      <Header />
      <Component {...pageProps} />
    </EditorProvider>
  );
};

export default MyApp;
