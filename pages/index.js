import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import Layout from "../src/Layout";
import FaqsSection from "../src/components/faqsComponent/FaqsSection";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Bis Resume App</title>
          <meta name="description" content="Create resume with ease!" />
        </Head>
        <Layout>
          <CallToAction />
          <FaqsSection />
        </Layout>
      </div>
    </>
  );
}
