import { AppProps } from "next/app";
import { useEffect } from "react";
import Header from "../src/components/Header";
import SEO from "../src/components/SEO";
import { EditorProvider } from "../src/contexts/EditorContext";
import "../styles/global.css";
import * as gtag from "../src/lib/gtag";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    gtag.pageview(location.pathname);
  }, []);

  return (
    <EditorProvider>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </EditorProvider>
  );
};

export default MyApp;
