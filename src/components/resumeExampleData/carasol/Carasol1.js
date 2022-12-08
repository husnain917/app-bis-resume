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
const Carasol1 = () => {
  const swiperRef = useRef();
  console.log("SLIDER DATA >>>>>>", sliderData);
  return (
    <Box>
      <Swiper
        id="selectResume"
        spaceBetween={5}
        grabCursor
        initialSlide={1}
        centeredSlides={true}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={true}
        paginationClickable={true}
        modules={[Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 3,
            pagination: true,
          },
          390: {
            slidesPerView: 3,
            pagination: true,
          },
          786: {
            slidesPerView: 2,
            pagination: true,
          },
          992: {
            slidesPerView: 3,
            pagination: true,
          },
          1300: {
            slidesPerView: 3,
            pagination: true,
          },
          1600: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 4,
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
                height={"700px"}
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
                      height={"700px"}
                      minW={"600px"}
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

export default Carasol1;
