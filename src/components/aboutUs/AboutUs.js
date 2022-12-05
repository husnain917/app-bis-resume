import React, { useEffect } from "react";
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
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box className="masterWrapper">
      <Box>navBar</Box>
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
                  <Text fontSize={"4.8rem"} lineHeight={"7rem"}>
                    About Us
                  </Text>
                  <Text margin={"0 0 20px"}>
                    We give you the tools, expert advice and knowledge to help
                    you build your career and be successful
                  </Text>
                </Box>
                <Box width={"45%"} textAlign={"center"} position={"relative"}>
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
              Since 2013, MyPerfectResume has helped more than 15 million people
              worldwide create stronger resumes, navigate their job search, and
              achieve career fulfillment.
            </Text>
            <Text>
              Our team of experts is dedicated to helping you every step of the
              way, from using our tools to create a showstopping resume and
              cover letter to providing professional interview tips and career
              guidance.
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
        <Box className="container" width={["750", "970", "1170px"]}>
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
                <Swiper
                  id={"aboutUs"}
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                  className="wrap-slides"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <Box
                  margin={["15px auto"]}
                  width={"100%"}
                  height={"20px"}
                  position={"relative"}
                  textAlign={"center"}
                ></Box>
              </Box>
              <Box class="arrow-position">
                <Button class="left-arrow arrows eos" onclick="arrowPrev()">
                  ←
                </Button>
                <Button class="right-arrow arrows" onclick="arrowNext()">
                  →
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
