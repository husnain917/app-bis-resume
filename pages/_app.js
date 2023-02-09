import "../styles/globals.css";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import store, { persistor } from "../config/store";
import "antd/dist/antd.css";
import "react-tippy/dist/tippy.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createWrapper } from "next-redux-wrapper";
import GoToTopBtn from "../src/components/goTopBtn/GoToTopBtn";
import Layout from "../src/Layout";
import { getToken } from "../src/components/localStorage/LocalStorage";
import { getLoggedInUser, redirect } from "../store/actions/AuthAction";
import { useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Grammarly } from "@grammarly/editor-sdk-react";
import { useRouter } from "next/router";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    loading && (
      <div className="spinner-wrapper">
        {/* <div className="spinner"></div> */}
        <RingLoader
          css={override}
          size={150}
          color={"#FFFFFF"}
          loading={loading}
        />
      </div>
    )
  );
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    if (getToken()) {
      let token = getToken();
      if (token.access_token) {
        dispatch(redirect());
        console.log("sami", token);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setShowChild(true);
  }, []);
  useEffect(() => {
    dispatch(getLoggedInUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        <ChakraProvider>
          <Layout>
            <Grammarly clientId="client_1ELZ9wGkGZnLMaooRjbfxR">
              <PersistGate loading={null} persistor={persistor}>
                <>
                  <Loading />
                  <Component {...pageProps} />
                </>
              </PersistGate>
            </Grammarly>
          </Layout>
        </ChakraProvider>
        <GoToTopBtn />
      </SessionProvider>
    );
  }
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
