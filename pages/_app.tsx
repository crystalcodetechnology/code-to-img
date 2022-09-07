import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../src/components/Header";
import SEO from "../src/components/SEO";
import { EditorProvider } from "../src/contexts/EditorContext";
import "../styles/global.css";
import * as gtag from "../src/lib/gtag";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <EditorProvider>
      <SEO />
      <Header />
      <Component {...pageProps} />
    </EditorProvider>
  );
};

export default MyApp;
