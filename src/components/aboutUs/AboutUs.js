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
import { Pagination, Navigation } from "swiper";

import RatingComponent from "../ratingComponent/RatingComponent";
import Slider from "./slider/Slider";
import Section5 from "./section5/Section5";
import SideBar from "../sideBar/SideBar";
import SideBarSection from "./SideBarSection/SideBarSection";
import GoTopButton from "./goToTopButton/GoTopButton";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToHidden = 20;
    let againHide = 4800;
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
  const swiperRef = useRef();
  console.log("Swiper>>>>>>>>>>>>", swiperRef);
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box classNam="siteContainer">
      <Box className="masterWrapper">
        <Box>
          <Box>
            <GoTopButton />
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
                      textAlign={"centers"}
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
                    >
                      We give you the tools, expert advice and knowledge to help
                      you build your career and be successful
                    </Text>
                  </Box>
                  <Box
                    width={["85%", "85%", "45%", "45%", "45%"]}
                    textAlign={"center"}
                    position={"relative"}
                  >
                    <Image src="/about-us.webp" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={"section1"} padding={"50px 0px 50px 0px"}>
          <Box maxW={"750px"} className={"container"}>
            <Box maxW={"750px"} margin={"0 auto"} fontSize={"1.1rem"}>
              <Text my={6}>
                Since 2013, MyPerfectResume has helped more than 15 million
                people worldwide create stronger resumes, navigate their job
                search, and achieve career fulfillment.
              </Text>
              <Text>
                Our team of experts is dedicated to helping you every step of
                the way, from using our tools to create a showstopping resume
                and cover letter to providing professional interview tips and
                career guidance.
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
            maxW={"950px"}
            width={"100%"}
            style={{
              margin: "0 auto",
            }}
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
                  ;
                </>
              );
            })}
          </Box>
        </Box>
        <Box
          className={"section3"}
          style={{
            padding: "30px 0",
          }}
        >
          <Box maxWidth={"960px"} className="container">
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
            >
              <ListItem>As seen in: </ListItem>
              <ListItem>
                <Image src="/msn-blue.png" />
              </ListItem>
              <ListItem>
                <Image src="/thegaurdian-blue.png" />
              </ListItem>
              <ListItem>
                <Image src="/thenewyorktimes-blue.png" />
              </ListItem>
              <ListItem>
                <Image src="/forbes-blue.png" />
              </ListItem>
              <ListItem>
                {" "}
                <Image src="/time-blue.png" />
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box className="section4" paddingTop={"50px"} bg={"#f6f5f0"}>
          <Box
            className="container"
            width={["", "750px", "750px", "970px", "1170px"]}
          >
            <Box>
              <Text
                textAlign={"center"}
                maxW={"960px"}
                margin={"0 auto"}
                fontSize={"3.4rem"}
                fontFamily={"heading"}
                lineHeight={"1"}
                fontWeight={600}
              >
                Building better lives, one resume and cover letter at a time
              </Text>
              <Box
                className="container tpilot"
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "inline-block",
                  verticalAlign: "top",
                  padding: "30px 0px",
                  color: "#002d6b",
                  position: "relative",
                }}
              >
                <Box className="summary">
                  <p className="excellent">
                    <Text
                      fontSize={"25px"}
                      marginRight={"10px"}
                      fontWeight={"bold"}
                    >
                      EXCELLENT
                    </Text>{" "}
                    <Image
                      width="230px"
                      src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
                      alt="Star Summary"
                    />
                  </p>
                  <p className="excellent">
                    Based on{" "}
                    <a
                      href="https://www.trustpilot.com/review/myperfectresume.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      6829 reviews{" "}
                    </a>{" "}
                    on{" "}
                    <img
                      id="tile-star-alignment"
                      className="svg-logo"
                      src="/logo.svg"
                      alt="logo"
                      width="90"
                      height="22"
                    />
                  </p>
                </Box>
                <Box className="reviews">
                  <Slider />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="section5">
          <Section5 />
        </Box>
        <Box className="awardsSection" padding={"0 15px"}>
          <Box
            maxW={"960px"}
            width={"100%"}
            background={"#f6f5f0"}
            padding={"50px 30px 70px 30px"}
            borderRadius={"100px 0"}
            margin={"0 auto"}
          >
            <Box>
              <Text
                textAlign={"center"}
                fontSize={"3rem"}
                fontFamily={"heading"}
              >
                Awards and recognitions
              </Text>
              <UnorderedList
                margin={["0px"]}
                padding={["0px"]}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                width={"100%"}
                style={{
                  listStyle: "none",
                }}
                mt={"30px"}
              >
                <ListItem>
                  <Image src="/s1.png" />
                </ListItem>
                <ListItem>
                  <Image src="/s2.png" width={"145"} height={"118"} />
                </ListItem>
                <ListItem>
                  <Image src="/s3.png" />
                </ListItem>
                <ListItem>
                  <Image src="/s4.png" />
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box className="contactSection" paddingTop={"50px"}>
          <Box width={"100%"} padding="0 30px">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Text
                textAlign={"center"}
                fontSize={"2rem"}
                minW={"330px"}
                margin={"0"}
                fontWeight={"bold"}
              >
                Get in Touch
              </Text>
              <Box className="cta-wrap" margin={"0 30px"}>
                <Button
                  // className="btn btn-primary"
                  href="https://www.bold.com/bold-jobs/"
                  target="_blank"
                  rel="noopener"
                  backgroundColor="#02818c"
                  color={"white"}
                  _hover={{
                    backgroundColor: "#02818c",
                  }}
                >
                  JOIN OUR TEAM
                </Button>
              </Box>
              <Button
                className="btn btn-primary"
                margin={"0 30px"}
                backgroundColor="#02818c"
                color={"white"}
                href="https://www.myperfectresume.com/contact-us"
                _hover={{
                  border: "1px dashed gray",
                }}
              >
                CONTACT US
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            color: "#46464e",
            fontSize: "12px",
            margin: "30px 0 0",
            textAlign: "center",
          }}
        >
          Advertisement
        </Box>
        <Box
          className="footerNotes"
          maxW={"1020px"}
          padding={"0 15px"}
          margin={"30px auto 0 auto"}
          lineHeight={"1.2"}
          fontSize={"0.5rem"}
          textAlign={"center"}
        >
          <Box margin={"0 0 20px"}>
            *The names and logos of the companies referred to above are all
            trademarks of their respective holders. Unless specifically stated
            otherwise, such references are not intended to imply any affiliation
            or association with MyPerfectResume
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
