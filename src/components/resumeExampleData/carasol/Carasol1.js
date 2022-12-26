import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Navigation } from "swiper";
import { sliderData } from "../resumeExampleData";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Carasol1 = () => {
  const swiperRef = useRef();
  return (
    <Box>
      <Swiper
        id="selectResume"
        dots="true"
        spaceBetween={5}
        grabCursor
        initialSlide={1}
        centeredSlides={true}
        loop
        slideLabelMessage={"USE THIS TEMPLATE"}
        focusableElements={"LABEL"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
          // el: ".swiper-pagination",
          clickable: true,
        }}
        paginationClickable={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          100: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 1,
          },
          390: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 1,
          },
          786: {
            slidesPerView: 2,
            pagination: true,
            spaceBetween: 1,
          },
          992: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 2,
          },
          1300: {
            slidesPerView: 3,
            // pagination: true,
            spaceBetween: 2,
          },
          1600: {
            slidesPerView: 3,
            // pagination: true,
            spaceBetween: 3,
          },
        }}
      >
        {sliderData.map((template, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                key={index}
                bg={"whitesmoke"}
                maxW={"600px"}
                height={["300px", "400px", "500px", "500px", "500px"]}
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
                      height={["400px", "500px", "500px", "500px", "600px"]}
                      minW={[
                        "200px",
                        "280px",
                        "380px",
                        "340px",
                        "450px",
                        "500px",
                      ]}
                      maxW={[
                        "200px",
                        "280px",
                        "380px",
                        "340px",
                        "450px",
                        "600px",
                      ]}
                    />
                  </Link>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        className={"resume-templates__slider-button"}
        left={["35%", "28%", "25%", "15%", "15%"]}
        onClick={() => swiperRef.current.slidePrev()}
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </Box>
      <Box
        className={"resume-templates__slider-button"}
        right={["35%", "28%", "25%", "15%", "15%"]}
        onClick={() => swiperRef.current.slideNext()}
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </Box>
    </Box>
  );
};

export default Carasol1;
