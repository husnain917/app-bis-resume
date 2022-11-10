import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  PhoneIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
const MostPopular = () => {
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
          <PhoneIcon w={8} h={8} fontWeight={"100"} mt={"1"} />

          <Box
            ml="10px"
            fontSize="3em"
            lineHeight={"40px"}
            fontWeight={"400"}
            transition={"color .15s"}
          >
            Most Popular
          </Box>
        </Box>
        <Box display={"flex"}>
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
          >
            <ChevronRightIcon w={8} h={8} />
          </Box>
        </Box>
      </Box>
      <Box
        position={"relative"}
        padding={"0 44px"}
        overflow={"hidden"}
        width={"100vw"}
      >
        <Box
          opacity={1}
          position={"relative"}
          maxWidth={"1122px"}
          margin={"0 auto"}
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
            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MostPopular;
