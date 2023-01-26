import React, { useState, useRef } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Card from "./Card";

const Section5 = () => {
  return (
    <Box py={"50px"}>
      <Box
        maxW={"780px"}
        width={"100%"}
        margin={"0 auto 30px"}
        padding={"0 15px"}
      >
        <Text
          textAlign={"center"}
          fontSize={["2rem", "2rem", "2.6rem", "3.4rem", "3.4rem"]}
          className={"medium-heading1"}
        >
          Meet our team of experts
        </Text>
        <Text
          textAlign={"center"}
          fontSize={["16px", "16px", "18px", "18px", "18px"]}
          mt={"20px"}
          className={"small-text"}
        >
          Get to know some of the passionate professionals, career experts,
          technologists, and certified resume writers behind BisResume.
        </Text>
      </Box>
      <Box className="cardContent">
        <Card />
      </Box>
    </Box>
  );
};

export default Section5;
