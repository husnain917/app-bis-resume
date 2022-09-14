import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import store from '../config/store';
import 'antd/dist/antd.css'
import 'react-tippy/dist/tippy.css';
import { createWrapper } from 'next-redux-wrapper';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)