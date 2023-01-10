import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import SearchBar from "../src/components/resumeExampleData/searchBar/SearchBar";
import MostPopular from "../src/components/resumeExampleData/mostPopular/MostPopular";
import CommonComponent from "../src/components/resumeExampleData/commonComponent/commonComponent";
import WritingGuides from "../src/components/resumeExampleData/writingGuides/WritingGuides";
import {
  data,
  popularData,
} from "../src/components/resumeExampleData/resumeExampleData";
import TryResume from "../src/components/resumeExampleData/tryResume/tryResume";
import BlogPost from "../src/components/resumeExampleData/blogPost/blogPost";
import SelectResume from "../src/components/resumeExampleData/selectResume/SelectResume";
import ChatButton from "../src/components/resumeExampleData/chatButton/chatButton";
import Carasol from "../src/components/resumeExampleData/carasol/Carasol";
import Carasol1 from "../src/components/resumeExampleData/carasol/Carasol1";
import Sidebar from "../src/components/blog/Sidebar";
import styles from "../styles/resumeFormats.module.css";
import Fade from "react-reveal/Fade";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";
const ResumeExamples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToHidden = 0.5;
    let againHide = 7650;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHidden || winScroll > againHide) {
      setIsVisible(false);
    } else if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <Box fontFamily={"EuclidCircularB-Light"}>
      <Box
        borderRadius={["60px"]}
        width={["60px"]}
        position={["fixed"]}
        zIndex={"1049"}
        transform={["scale(1)"]}
        marginLeft={"10px"}
        display={["none", "none", "block", "block", "block"]}
      >
        {isVisible && (
          <Fade>
            {" "}
            <SideBarSection />{" "}
          </Fade>
        )}
      </Box>

      {/* <Box maxW={["0%", "0%", "0%", "10%"]}>
        <Sidebar />
      </Box> */}
      {/* <Carasol1 /> */}
      {/* <Carasol /> */}
      {/* <ChatButton /> */}
      <Box bg="lightcyan" height={"auto"} width={"100wv"}>
        <WritingGuides />
      </Box>

      <Box paddingTop={"80px"} padding={"80px 44px 20px 44px"}>
        <Box maxWidth={"1120px"} display={"flex"} margin={"0 auto"}>
          <Box width={"100%"} flexGrow={"1"}>
            {/* <SearchBar /> */}

            {popularData.map((data, index) => {
              return <MostPopular data={data} key={index} />;
            })}
            {data.map((data, index) => {
              return <CommonComponent data={data} key={index} />;
            })}
          </Box>
        </Box>
      </Box>
      <TryResume />
      <BlogPost />
      <SelectResume />
    </Box>
  );
};

export default ResumeExamples;
