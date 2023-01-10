import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import CallToAction from "../src/components/CallToAction";
import Layout from "../src/Layout";
import CompProfessionalResume from "../src/components/compProfessionalResume/CompProfessionalResume";
import HintSection from "../src/components/hintSection/HintSection";
import FaqsSection from "../src/components/faqsComponent/FaqsSection";
import Advantages from "../src/components/advantages/Advantages";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
// import styles from "../styles/resumeFormats.module.css";
// import styles from "../styles/sideBarSection.module.css";

import SideBar from "../src/components/sideBar/SideBar";
import SliderComponent from "../src/components/sliderComponent/SliderComponent";
import BuildResume from "../src/components/BuildResume";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";
import ChatButton from "../src/components/resumeExampleData/chatButton/chatButton";
// import styles from "../../../styles/sideBarSection.module.css";
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
      <Box>
        <Head>
          <title>Bis Resume App</title>
          <meta name="description" content="Create resume with ease!" />
        </Head>
        {/* <Box position={"absolute"}>
          <SideBar />
        </Box> */}
        <Box
          maxW={["0%", "0%", "0%", "5%"]}
          // padding={'70px 0px 0px 0px'}
          padding={"40px 0px 0px 0px"}
          display={["none", "none", "none", "block"]}
        >
          <Box>
            {/* <SideBar /> */}
            {/* <SideBarSection /> */}
          </Box>
        </Box>

        <CallToAction />
        {/* <SliderComponent /> */}

        <HintSection />
        {isVisible && (
          <Fade center>
            <Advantages />
          </Fade>
        )}
        <CompProfessionalResume />
        <FaqsSection />
        <BuildResume />
      </Box>
    </>
  );
}
