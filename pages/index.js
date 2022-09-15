import Head from "next/head";
import CallToAction from "./CallToAction";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <div>
        <CallToAction />
      </div>
    </div>
  );
}
