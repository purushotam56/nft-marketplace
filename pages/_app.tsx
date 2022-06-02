import React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import Web3ReactManager from "@/components/Web3ReactManager";
import createEmotionCache from "@/config/createEmotionCache";
import { lightTheme, darkTheme } from "@/config/theme";
import { AppStateProvider } from "@/contexts/app/context";
import { themeState } from "@/states/theme";

import getLibrary from "../getLibrary";

import "../styles/globals.css";
import "nprogress/nprogress.css";

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.05,
  trickleSpeed: 500,
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App(props: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <RecoilRoot>
      <NextWeb3App {...props} />
    </RecoilRoot>
  );
}

function NextWeb3App(props: AppProps & { emotionCache?: EmotionCache }) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme] = useRecoilState(themeState);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <AppStateProvider>
          <script src="/js/d3-lib.js" />
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <CssBaseline />
              <Web3ReactManager>
                <DefaultLayout>
                  <Component {...pageProps} />
                </DefaultLayout>
              </Web3ReactManager>
            </ThemeProvider>
          </CacheProvider>
        </AppStateProvider>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
