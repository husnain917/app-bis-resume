import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";

import Layout from "../src/Layout";
export default function Home() {
  return (
    <>
      <div
      // className={styles.container}
      >
        <Head>
          <title>Bis Resume App</title>
          <meta name="description" content="Create resume with ease!" />
        </Head>
        <Layout>
          <CallToAction />
          <SliderComponent />
        </Layout>
      </div>
    </>
  );
}
