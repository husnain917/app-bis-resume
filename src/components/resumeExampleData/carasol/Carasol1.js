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
        pagination={{
          dynamicBullets: true,
        }}
        paginationClickable={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          100: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 2,
          },
          390: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 2,
          },
          786: {
            slidesPerView: 2,
            pagination: true,
            spaceBetween: 2,
          },
          992: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 2,
          },
          1300: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 2,
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
      {/* <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </Box>
  );
};

export default Carasol1;
