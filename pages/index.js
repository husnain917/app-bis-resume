import Head from "next/head";
import CallToAction from "../src/components/CallToAction";

import FaqsComponent from "../src/components/faqsComponent/FaqsComponent";
import RatingComponent from "../src/components/ratingComponent/RatingComponent";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";

import HintSection from "../src/components/hintSection/HintSection";
import { Text } from "@chakra-ui/react";

import Layout from "../src/Layout";

import Hint from "../src/components/hintSection/Hint";
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

          {/* <FaqsComponent /> */}
          <SliderComponent />
          {/* <HintSection /> */}
        </Layout>
      </div>
    </>
  );
}
