import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import FaqsComponent from "../src/components/faqsComponent/FaqsComponent";
import RatingComponent from "../src/components/ratingComponent/RatingComponent";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
import HintSection from "../src/components/hintSection/HintSection";
import Layout from "../src/Layout";
import styles from "../styles/Index.module.css";
import { Text } from "@chakra-ui/react";
import { FaMinus } from "react-icons/fa";

import Hint from "../src/components/hintSection/Hint";
import PracticingGrid from "../src/components/faqsComponent/PracticingGrid";
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
          {/* <CallToAction />
          <SliderComponent /> */}
          {/* <FaqsComponent /> */}
          {/* <Flex1 /> */}
          <HintSection />
          <PracticingGrid />
          {/* <FaqsComponent /> */}
        </Layout>
      </div>
    </>
  );
}
