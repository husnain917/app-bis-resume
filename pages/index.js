import Head from "next/head";
<<<<<<< HEAD
import CallToAction from "../src/components/CallToAction";
import Layout from "../src/Layout";
import FaqsSection from "../src/components/faqsComponent/FaqsSection";
import CompProfessionalResume from "../src/components/compProfessionalResume/CompProfessionalResume";
import HintSection from "../src/components/hintSection/HintSection";
import Advantages from "../src/components/advantages/Advantages";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
=======
import RatingComponent from "../src/components/ratingComponent/RatingComponent";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
import styles from "../styles/Index.module.css";

>>>>>>> 3265bab (sample rating component)
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToHidden = 2550;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      <Head>
        <title>Bis Resume App</title>
        <meta name="description" content="Create resume with ease!" />
      </Head>
<<<<<<< HEAD
      <Layout>
        <CallToAction />
        <SliderComponent />

        <HintSection />
        {isVisible && (
          <Fade center>
            <Advantages />
          </Fade>
        )}
        <CompProfessionalResume />
        <FaqsSection />
      </Layout>
    </>
=======
      <h1>Bis resume Landing Page</h1>
      <SliderComponent />
    </div>
>>>>>>> 3265bab (sample rating component)
  );
}
