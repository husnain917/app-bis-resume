import Head from "next/head";
import RatingComponent from "../src/components/ratingComponent/RatingComponent";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <h1>Bis resume Landing Page</h1>
      <SliderComponent />
    </div>
  );
}
