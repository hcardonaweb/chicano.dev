import "../styles/globals.css";

import * as gtag from "../data/Gtag";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G4RK7FQL68`}
      />
      <Script
        strategy="afterInteractive"
        id="chicanodev-ga4"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G4RK7FQL68', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
