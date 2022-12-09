import '../styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import store from '../config/store';
import 'antd/dist/antd.css';
import 'react-tippy/dist/tippy.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createWrapper } from 'next-redux-wrapper';
import GoToTopBtn from '../src/components/goTopBtn/GoToTopBtn';
// import Navbar from "../src/components/navbar/Navbar";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </ChakraProvider>
      <GoToTopBtn />
    </SessionProvider>
  );
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
