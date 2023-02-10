import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Button, Image, calc } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import SecondSection from "./secondSection/SecondSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "./secondSection/data";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules

import SideBar from "../sideBar/SideBar";

import styles from "../../../styles/sideBarSection.module.css";
const AboutUs = () => {
  const swiperRef = useRef();
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box classNam="sitecontainer1">
      <Box className="masterWrapper">
        <Box>
          <Box>
            <Box
              padding={"50px 0px 50px 0px"}
              className={"mainWrapper"}
              bg={"#f6f5f0"}
              borderBottomLeftRadius={"100px"}
            >
              <Box borderRadius={"0% 10% 0% 10%"}>
                <Box
                  display={"flex"}
                  position={"relative"}
                  justifyContent={"space-between"}
                  maxWidth={"1140px"}
                  margin={"0 auto"}
                  flexDirection={["column", "column", "row", "row", "row"]}
                  alignItems={["center", "center", "", "", ""]}
                >
                  <Box
                    width={"57%"}
                    maxWidth={"540px"}
                    position={"relative"}
                    fontWeight={"bold"}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    marginLeft={["0px", "0px", "15px", "30px", "0px"]}
                  >
                    <Text
                      fontSize={[
                        "2.6rem",
                        "3.4rem",
                        "4.8rem",
                        "4.8rem",
                        "4.8rem",
                      ]}
                      lineHeight={"7rem"}
                      textAlign={[
                        "center",
                        "center",
                        "start",
                        "start",
                        "start",
                      ]}
                      className={"sub-heading"}
                    >
                      About Us
                    </Text>
                    <Text
                      margin={"0 0 20px"}
                      textAlign={[
                        "center",
                        "center",
                        "initial",
                        "initial",
                        "initial",
                      ]}
                      fontSize={["16px", "16px", "20px", "20px", "20px"]}
                      lineHeight={"26px"}
                      className={"small-heading"}
                    >
                      {`At JobReady, we have been empowering job seekers to achieve their career goals since 2015`}
                    </Text>
                  </Box>
                  <Box
                    width={["85%", "85%", "45%", "45%", "45%"]}
                    textAlign={"center"}
                    position={"relative"}
                  >
                    <Image src="/about-us.webp" alt="will show soon" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          maxW={["100%", "100%", "80%", "80%", "85%"]}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box
            padding={"40px 0px"}
            maxW={["0%", "0%", "0%", "10%"]}
            zIndex={"1049"}
          >
            <Box className={styles.sideBarContainer} ml="20%">
              <SideBar />
            </Box>
          </Box>

          <Box maxW={["100%", "100%", "80%", "80%", "85%"]}>
            <Box className={"section1"} padding={"50px 0px 30px 0px"}>
              <Box maxW={"750px"} className={"container1"}>
                <Box maxW={"750px"} margin={"0 auto"} fontSize={"1.1rem"}>
                  <Text
                    my={5}
                    textAlign={[
                      "center",
                      "center",
                      "initial",
                      "initial",
                      "initial",
                    ]}
                    className={"small-text"}
                  >
                    {`Our team of certified career coaches and resume experts work closely with each individual to
                    understand their unique skills and experiences, and use that knowledge to create a personalized 
                    and effective job search strategy.`}
                  </Text>
                  <Text
                    textAlign={[
                      "center",
                      "center",
                      "initial",
                      "initial",
                      "initial",
                    ]}
                    className={"small-text"}
                  >
                    {`Whether it's crafting a compelling resume and cover letter, preparing for interviews,
                     or providing ongoing career guidance, we are dedicated to helping our clients stand out 
                     in today's competitive job market and land the job of their dreams. So, JobReady is the perfect 
                     solution for your career search journey.`}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              className={"section2"}
              style={{
                padding: "50px 0 0 0",
                position: "relative",
              }}
            >
              <Box
                maxW={"1000px"}
                width={"100%"}

              >
                {data.map((section2, index) => {
                  return (
                    <>
                      <SecondSection
                        key={index}
                        heading={section2.heading}
                        subHeading={section2.subHeading}
                        content={section2.content}
                        image={section2.image}
                        direction={section2.direction}
                      />
                      
                    </>
                  );
                })}
              </Box>
            </Box>
            <Box
              className={"section3"}
              padding={[
                "10px 0px",
                "10px 0px",
                "30px 0px",
                "30px 0px",
                "30px 0px",
              ]}
            >
              <Box maxWidth={"960px"} className="container1">
                <UnorderedList
                  margin={["0px"]}
                  padding={["0px"]}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                  style={{
                    listStyle: "none",
                  }}
                  flexDirection={["column", "column", "row", "row", "row"]}
                >
                  <ListItem>As seen in: </ListItem>
                  <ListItem>
                    <Image src="/thegaurdian-blue.png" alt="will show soon" />
                  </ListItem>
                  <ListItem>
                    <Image src="/time-blue.png" alt="will show soon" />
                  </ListItem>
                  <ListItem>
                    <Image
                      src="/thenewyorktimes-blue.png"
                      alt="will show soon"
                    />
                  </ListItem>
                  <ListItem>
                    <Image src="/msn-blue.png" alt="will show soon" />
                  </ListItem>
                  <ListItem>
                    {" "}
                    <Image src="/forbes-blue.png" alt="will show soon" />
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>

    
     
   
        
  </Box>
  </Box>
   
  );
};

export default AboutUs;
