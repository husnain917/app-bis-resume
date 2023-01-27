import React, { useRef, useState } from "react";
import { Box, Text, Button, Image, } from "@chakra-ui/react";
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
import CommonButton from "../../commonButton/CommonButton";
import {
  ArrowLeftIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const SelectResume = () => {
  const [showCarasol, setShowCarasol] = useState("");
  const size = useWindowSizing();
  const width = size.width;
  const swiperRef = useRef();
  return (
    <>
      {showCarasol ? (
        <Box
          position={"relative"}
          padding={["40px 44px", "30px 44px", "30px 44px", "30px 44px"]}
          backgroundColor={["#282b8f"]}
          overflow={["hidden"]}
        >
          <Carasol1 />
        </Box>
      ) : (
        <>
          <Box
            position={"relative"}
            padding={["40px 44px", "40px 44px", "80px 100px", "80px 100px"]}
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
                    Elegant and Professional Resume Templates
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
                   {`Make a lasting impression on potential employers with one 
                   of our 18 beautifully designed, ready-to-use resume templates.
                    These templates are professionally crafted to help you stand
                     out from the competition and win over recruiters. Simply download 
                     the template in Word or PDF format and fill in your information to
                      create a polished and professional resume. With our easy-to-use templates, you can create
                    a resume that showcases your skills and experiences in a visually appealing and elegant way.`}
                  </Box>
                  <Box
                    marginBottom={"60px"}
                    display={["none", "none", "none", "block", "block"]}
                  >
                    <Box mx={2}>
                      <Link
                        href={'/templates'}
                        _hover={{
                          textDecoration: 'none'
                        }}
                      >
                        <CommonButton
                          backgroundColor={"#2CACD5"}
                          color={"whitesmoke"}
                          fontSize={["14x", "14px", "16px", "16px", "16px"]}
                          height={"40px"}
                          width={"180px"}
                          padding={"20px"}
                          borderRadius={"5px"}
                          title={"Select Template"}
                        />
                      </Link>
                    </Box>
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
              marginTop={["10px", "10px", "10px", "-10px", "-10px", "-10px"]}
              transition={"opacity 0.1s ease-in 0s"}
              opacity={["1"]}
              pointerEvents={["auto"]}
              className={"resume-templates__slider-wrapper"}
              left={["44%", "44%", "44%", "48%", "44%"]}
            >
              <Box
                className={"resume-templates__slider-container"}
                width={"1406px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Carasol />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default SelectResume;
