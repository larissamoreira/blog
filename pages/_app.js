import "../styles/globals.css";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  console.log("pageProps: ", pageProps);
  console.log("Component: ", Component);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
