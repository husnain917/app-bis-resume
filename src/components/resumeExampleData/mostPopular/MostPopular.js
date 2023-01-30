import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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

const MostPopular = ({ data }) => {
  const swiperRef = useRef();
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
  };
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
            <Image src="./diamond.png" h="3.5em" alt="will load soon" />
          </Box>
          <Box
            ml="10px"
            fontSize={["26px", "26px", "30px", "2.5em", "2.5em"]}
            fontWeight={"400"}
            transition={"color .15s"}
          >
            {data.title}
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
      <Box position={"relative"} overflow={"hidden"}>
        <Box
          opacity={1}
          maxWidth={"1122px"}
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
              spaceBetween={20}
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
                  slidesPerView: 4,
                },
                1600: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.popularTemplates.map((template, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      key={index}
                      bg={"whitesmoke"}
                      padding={"5"}
                      borderRadius={"10"}
                      _hover={{
                        cursor: "pointer",
                      }}
                      maxW={80}
                      onClick={() => {}}
                    >
                      <Text fontSize={["1.1em", "1.3em"]} fontWeight={"500"}>
                        {template.label}
                      </Text>
                      <Box mt={6}>
                        <Link href={template.link || "/templates/templ"}>
                          <Image
                            src={template.src}
                            alt={template.alt}
                            height={"300px"}
                          />
                        </Link>
                      </Box>
                    </Box>
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
