import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import FaqsComponent from "../src/components/faqsComponent/FaqsComponent";
import RatingComponent from "../src/components/ratingComponent/RatingComponent";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div
    // className={styles.container}
    >
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
      <div>
        <CallToAction />
        {/* <div>Ahsan Ali</div> */}
        <FaqsComponent />
        {/* <div></div> */}
        <SliderComponent />
      </div>
    </div>
  );
}
