import Head from 'next/head'
import Layout from '../src/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <Layout>
        <h1>Bis resume Landing Page</h1>
      </Layout>
    </>
  )
}
