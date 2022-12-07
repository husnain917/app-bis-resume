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
        <Text textAlign={"center"} fontSize={"3.4rem"}>
          Meet our team of experts
        </Text>
        <Text textAlign={"center"} fontSize={"18px"} mt={"20px"}>
          Get to know some of the passionate professionals, career experts,
          technologists, and certified resume writers behind My Perfect Resume.
        </Text>
      </Box>
      <Box className="cardContent">
        <Card />
      </Box>
    </Box>
  );
};

export default Section5;
