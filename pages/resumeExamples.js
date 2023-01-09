import React from "react";
import { Box, Text, Button, Container } from "@chakra-ui/react";
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
import SideBar from "../src/components/sideBar/SideBar";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";
import styles from "../styles/sideBarSection.module.css";
import Sidebar from "../src/components/blog/Sidebar";
const ResumeExamples = () => {
  return (
    <>
      <Box position={"relative"}>
        {/* <SideBar /> */}
        <Box
          maxW={["0%", "0%", "0%", "5%"]}
          // padding={'70px 0px 0px 0px'}
          padding={"40px 0px 0px 0px"}
          position={"fixed"}
          display={["none", "none", "none", "block"]}
        >
          <Box
          // className={styles.sideBarContainer}
          >
            {/* <SideBar /> */}
            <SideBarSection />
          </Box>
        </Box>
        <Box
        // fontFamily={"EuclidCircularB-Light"}
        >
          {/* <Carasol1 /> */}
          {/* <Carasol /> */}
          {/* <ChatButton /> */}

          <Box
            bg="#EFF2F9"
            height={"auto"}
            width={["100wv", "100wv", "100wv", "100wv", "100wv"]}
          >
            <WritingGuides />
          </Box>
          <Box>
            1
            <Box
              padding={[
                "80px 20px 20px 20px",
                "80px 20px 20px 20px",
                "80px 44px 20px 44px",
                "80px 44px 20px 44px",
                "80px 44px 20px 44px",
              ]}
            >
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
        </Box>
      </Box>
    </>
  );
};

export default ResumeExamples;
