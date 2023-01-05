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
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { ArrowLeftIcon } from "@chakra-ui/icons";
const Carasol = () => {
  const swiperRef = useRef();
  return (
    <Box
      marginLeft="30px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        _hover={{
          cursor: "pointer",
        }}
        display={["none", "none", "none", "block", "block"]}
        marginRight={"3%"}
        onClick={() => swiperRef.current.slidePrev()}
      >
        <ArrowLeftIcon />
      </Box>
      <Swiper
        // id="selectResume"
        spaceBetween={15}
        grabCursor
        initialSlide={1}
        centeredSlides={true}
        loop
        dots={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            pagination: true,
            spaceBetween: 2,
          },
          390: {
            slidesPerView: 1,
            pagination: true,
            spaceBetween: 2,
          },
          786: {
            slidesPerView: 3,
            pagination: true,
            spaceBetween: 1,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 1,
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
                      height={["520px"]}
                      minW={["395px", "395px", "395px", "395px", "395px"]}
                      maxW={["395px", "395px", "395px", "395px", "395px"]}
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
        left={["35%", "28%", "25%", "23%", "23%"]}
        opacity={["1", "1", "1", "0", "0"]}
        onClick={() => swiperRef.current.slidePrev()}
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </Box>
      <Box
        className={"resume-templates__slider-button"}
        right={["35%", "28%", "25%", "23%", "23%"]}
        opacity={["1", "1", "1", "0", "0"]}
        onClick={() => swiperRef.current.slideNext()}
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </Box>
    </Box>
  );
};

export default Carasol;
