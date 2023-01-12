import React, { useState, useEffect, useRef } from "react";
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
import Fade from "react-reveal/Fade";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";
import SideBar from "../src/components/sideBar/SideBar";
import styles from "../styles/sideBarSection.module.css"

const ResumeExamples = () => {

  return (
    <Box fontFamily={"EuclidCircularB-Light"} >
      <Box bg="lightcyan" height={"auto"} width={"100wv"}>
        <WritingGuides />
      </Box>
      <Box
        maxW={["100%", "100%", "92%", "92%"]}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          padding={'40px 0px'}
          maxW={["0%", "0%", "0%", "10%"]}
          zIndex={"1049"}
        >
          <Box
            className={styles.sideBarContainer}
            display={["none", "none", "block", "block", "block"]}
          >
            <SideBar />
          </Box>
        </Box>
        <Box maxW={["100%", "100%", "92%", "92%", "100%"]}>
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
        </Box>
      </Box>
      <TryResume />

      <BlogPost />
      <SelectResume />

    </Box>
  );
};

export default ResumeExamples;
