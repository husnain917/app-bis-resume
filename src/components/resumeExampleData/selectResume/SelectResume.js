import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Slider from "react-slick";
import { sliderData } from "../resumeExampleData";
import Link from "next/link";
const SelectResume = () => {
  const swiperRef = useRef();
  console.log("SLIDER DATA >>>>>>", sliderData);
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "resume-templates__slider",
    // autoplay: true,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        },
      },
    ],
  };
  return (
    <Box
      position={"relative"}
      padding={[
        "80px 44px",
        "80px 44px",
        "80px 44px",
        "120px 44px 144px",
        "120px 44px 144px",
      ]}
      backgroundColor={["#282b8f"]}
      overflow={["hidden"]}
    >
      <Box
        position={"relative"}
        maxW={["100%", "100%", "100%", "1120px", "1120px"]}
        margin={["0 auto"]}
        display={["flex"]}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Box
          transition={["none 0s ease 0s"]}
          transform={["translateX(0px)"]}
          opacity={["1"]}
          className={"resume-templates__content"}
        >
          <Box className={"resume-templates__slider-arrow-container"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="resume-templates__arrow"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="resume-templates__arrow"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
          </Box>
          <Box className={"resume-templates__info"}>
            <Text
              fontSize={["32px", "32px", "32px", "46px", "46px"]}
              fontWeight={"700"}
              lineHeight={["34px", "34px", "34px", "40px", "40px"]}
              color={"white"}
              marginBottom={["8px", "8px", "8px", "24px", "24px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
            >
              Beautiful ready-to-use resume templates
            </Text>
            <Box
              color={"white"}
              marginBottom={"24px"}
              textAlign={["center", "center", "center", "left", "left", "left"]}
            >
              Win over employers and recruiters by using one of our 18 elegant,
              professionally-designed resume templates. Download to word or PDF.
            </Box>
            <Box
              marginBottom={"142px"}
              display={["none", "none", "none", "block", "block"]}
            >
              <a className="button" href="/app/create-resume">
                Select Template
              </a>
            </Box>
          </Box>
          <Box className="resume-templates__trustpilot">
            <Box className={"resume-templates__stars"}>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
              <Box className={"resume-templates__star"}></Box>
            </Box>
            <Text color={"white"}> 4.5 out of 5 </Text>
            <Box fontSize={["14px"]} lineHeight={["16px"]} color={["white"]}>
              based on 42,982 reviews on
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/resume-examples"
              >
                Trustpilot
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        transform="
          scale(0.835681, 0.8) 
          translateX(900px) translateY(-59.2002px)"
        transition={"opacity 0.1s ease-in 0s"}
        opacity={["1"]}
        pointerEvents={["auto"]}
        className={"resume-templates__slider-wrapper"}
      >
        <Box
          className={"resume-templates__slider-container"}
          width={"1406px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <Box
            className={
              "resume-templates__slider-button--left resume-templates__slider-button"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
          </Box>
          <Box
            className={
              "resume-templates__slider-button--right resume-templates__slider-button"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
            </svg>
          </Box>
          <Slider {...settings}>
            {sliderData.map((template, index) => {
              return (
                <Box
                  key={index}
                  bg={"whitesmoke"}
                  maxW={"395px"}
                  height={"520px"}
                  //   padding={"5"}
                  borderRadius={"10"}
                  _hover={{
                    background: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  <Box>
                    <Link href={template.link || "/templates/templ"}>
                      <Image
                        src={template.src}
                        alt={template.alt}
                        height={"520px"}
                        minW={"395px"}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Slider>
          {/* <Swiper
            id="coverEffectSlider"
            spaceBetween={15}
            grabCursor
            initialSlide={1}
            loop
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              786: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            {sliderData.map((template, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    key={index}
                    bg={"whitesmoke"}
                    maxW={"395px"}
                    height={"520px"}
                    //   padding={"5"}
                    borderRadius={"10"}
                    _hover={{
                      background: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => {}}
                  >
                    <Box>
                      <Link href={template.link || "/templates/templ"}>
                        <Image
                          src={template.src}
                          alt={template.alt}
                          height={"520px"}
                          minW={"395px"}
                        />
                      </Link>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectResume;
