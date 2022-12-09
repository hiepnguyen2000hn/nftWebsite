/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import "lib/styles/globals.scss";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../lib/redux/reducer/rootReducer";
const MyApp = ({ Component, pageProps }: AppProps) => {
  function getLibrary(provider: any) {
    return new Web3Provider(provider);
  }

  const store = configureStore({ reducer: rootReducer });
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Chakra>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Chakra>
      </Web3ReactProvider>
    </Provider>
  );
};

export default MyApp;
