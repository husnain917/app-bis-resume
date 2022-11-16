import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import Layout from "../src/Layout";
import CompProfessionalResume from "../src/components/compProfessionalResume/CompProfessionalResume";
import HintSection from "../src/components/hintSection/HintSection";
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
        <CompProfessionalResume />
      </Layout>
    </>
  );
}
