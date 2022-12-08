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
import Slider from "react-slick";
import { sliderData } from "../resumeExampleData";
import Link from "next/link";
const Carasol = () => {
  const swiperRef = useRef();
  console.log("SLIDER DATA >>>>>>", sliderData);
  return (
    <Box marginLeft="60px">
      <Swiper
        id="selectResume"
        spaceBetween={15}
        grabCursor
        initialSlide={1}
        centeredSlides={true}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 1,

            spaceBetween: 2,
          },
          390: {
            slidesPerView: 2,

            spaceBetween: 2,
          },
          786: {
            slidesPerView: 2,

            spaceBetween: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 3,
            pagination: false,
            spaceBetween: 6,
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
      </Swiper>
    </Box>
  );
};

export default Carasol;
