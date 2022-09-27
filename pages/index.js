import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import HintSection from "../src/components/hintSection/HintSection";
import { Text } from "@chakra-ui/react";
import Layout from "../src/Layout";

import Hint from "../src/components/hintSection/Hint";
import SoftEngineer from "./templates/softEngineer/SoftEngineer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <Layout>
        <CallToAction />
        <HintSection />

      </Layout>
    </>
  );
}
