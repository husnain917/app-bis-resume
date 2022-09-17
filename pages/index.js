import Head from "next/head";
import CallToAction from '../src/components/CallToAction'
import Layout from '../src/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <Layout >
        <CallToAction />
      </Layout>
    </>
  )
}
