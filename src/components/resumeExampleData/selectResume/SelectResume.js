import React, { useRef, useState } from "react";
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
import { useWindowSizing } from "../../../../customHooks/useWindowSizing";
import Carasol from "../carasol/Carasol";
import Carasol1 from "../carasol/Carasol1";
import { ArrowLeftIcon } from "@chakra-ui/icons";
const SelectResume = () => {
  const [showCarasol, setShowCarasol] = useState("");
  const size = useWindowSizing();
  const width = size.width;
  const swiperRef = useRef();
  return (
    <>
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
        {showCarasol ? (
          <Carasol1 />
        ) : (
          <>
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
                {/* <Box
                  className={"resume-templates__slider-arrow-container"}
                  onClick={() => setShowCarasol(!showCarasol)}
                  _hover={{
                    cursor: "pointer",
                  }}
                  height={"30px"}
                  width={"30px"}
                  bg={"black"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="resume-templates__arrow"
                    // _hover={{
                    //   cursor: "pointer",
                    // }}
                  >
                    <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="resume-templates__arrow"
                  >
                    <path d="M14.6 16.7l-1.4 1.5-5.9-5.5a1 1 0 010-1.4l6-5.5 1.3 1.5L9.5 12l5 4.7z"></path>
                  </svg>
                </Box> */}
                <Box className={"resume-templates__info"}>
                  <Text
                    fontSize={["32px", "32px", "32px", "46px", "46px"]}
                    fontWeight={"700"}
                    lineHeight={["34px", "34px", "34px", "40px", "40px"]}
                    color={"white"}
                    marginBottom={["8px", "8px", "8px", "24px", "24px"]}
                    textAlign={[
                      "center",
                      "center",
                      "center",
                      "left",
                      "left",
                      "left",
                    ]}
                  >
                    Beautiful ready-to-use resume templates
                  </Text>
                  <Box
                    color={"white"}
                    marginBottom={"24px"}
                    textAlign={[
                      "center",
                      "center",
                      "center",
                      "left",
                      "left",
                      "left",
                    ]}
                  >
                    Win over employers and recruiters by using one of our 18
                    elegant, professionally-designed resume templates. Download
                    to word or PDF.
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
                  <Box
                    fontSize={["14px"]}
                    lineHeight={["16px"]}
                    color={["white"]}
                  >
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
              marginTop={["-57px", "-57px", "-57px", "-57px", "-80px", "-80px"]}
              transition={"opacity 0.1s ease-in 0s"}
              opacity={["1"]}
              pointerEvents={["auto"]}
              className={"resume-templates__slider-wrapper"}
              left={["44%", "44%", "44%", "48%", "44%"]}
            >
              <Box
                onClick={() => setShowCarasol(!showCarasol)}
                _hover={{
                  cursor: "pointer",
                }}
                display={"flex"}
              >
                <ArrowLeftIcon />
              </Box>
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
                <Carasol />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default SelectResume;
