import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularData } from "../resumeExampleData";

import {
  PhoneIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const imagesArr = [
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
];
const MostPopular = () => {
  const swiperRef = useRef();
  // console.log("Swiper", swiperRef);
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
  };
  console.log("mostPopular", popularData);
  return (
    <Box overflow={["visible", "visible", "hidden"]}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        paddingBottom={"20px"}
        borderBottom={"1px solid whitesmoke"}
        marginBottom={"24px"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <Box>
            <Image src="./diamond.png" h="3.5em" />
          </Box>
          <Box
            ml="10px"
            fontSize="2.5em"
            fontWeight={"400"}
            transition={"color .15s"}
          >
            {}
          </Box>
        </Box>
        <Box display={["none", "none", "flex", "flex", "flex"]}>
          {" "}
          <Box
            borderRadius={"50%"}
            bg={"gray.300"}
            h={"12"}
            w={"12"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mr={"10px"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ChevronLeftIcon w={8} h={8} />
          </Box>
          <Box
            borderRadius={"50%"}
            bg={"gray.300"}
            h={"12"}
            w={"12"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => swiperRef.current.slideNext()}
          >
            <ChevronRightIcon w={8} h={8} />
          </Box>
        </Box>
      </Box>
      <Box
        position={"relative"}
        // padding={"0 44px"}
        overflow={"hidden"}
        // width={"100vw"}
      >
        <Box
          opacity={1}
          // position={"relative"}
          maxWidth={"1122px"}
          // margin={" 0 auto"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            position={"relative"}
            display={"flex"}
            flexShrink={"0"}
            width={"100%"}
            marginBottom={"40px"}
          >
            <Swiper
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
                550: {
                  slidesPerView: 3,
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
              {imagesArr.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image src={img.src} alt={img.alt} />
                    console
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MostPopular;
