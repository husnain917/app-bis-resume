import "../styles/globals.css";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import store from "../config/store";
import "antd/dist/antd.css";
import "react-tippy/dist/tippy.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createWrapper } from "next-redux-wrapper";
import GoToTopBtn from "../src/components/goTopBtn/GoToTopBtn";
import Layout from "../src/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
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
            <Component {...pageProps} />
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
