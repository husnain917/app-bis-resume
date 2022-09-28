import Head from "next/head";
import CallToAction from "../src/components/CallToAction";
import Layout from "../src/Layout";

import Hint from "../src/components/hintSection/Hint";
import SoftEngineer from "./templates/softEngineer/SoftEngineer";
import CompProfessionalResume from "../src/components/compProfessionalResume/CompProfessionalResume";
import HintSection from "../src/components/hintSection/HintSection";
import Advantages from "../src/components/advantages/Advantages";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
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
      <Layout>
        <CallToAction />
        <HintSection />
        {isVisible && (
          <Fade center>
            <Advantages />
          </Fade>
        )}
        <SliderComponent />
        <CompProfessionalResume />
      </Layout>
    </>
  );
}
