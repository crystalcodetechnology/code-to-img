import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Header from "../src/components/Header";
import SEO from "../src/components/SEO";
import { EditorProvider } from "../src/contexts/EditorContext";
import { GA_TRACKING_ID } from "../src/lib/gtag";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <EditorProvider>
      <Head>
        <script>var ezoicId = 411426;</script>
        <script
          async
          type="text/javascript"
          src="//go.ezoic.net/ezoic/ezoic.js"
        ></script>
      </Head>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </EditorProvider>
  );
};

export default MyApp;
