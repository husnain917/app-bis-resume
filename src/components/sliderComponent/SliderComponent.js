import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import RatingComponent from "../ratingComponent/RatingComponent";
import { data } from "./data";
import Slider from "react-slick";
import RatingWeb from "../ratingComponent/RatingWeb";

const SliderComponent = () => {
  console.log("SliderComponent", data);

  {
    data.map((item) => {
      console.log(item);
    });
  }
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        },
      },
    ],
  };
  return (
    <>
      <Text
        textAlign="center"
        fontSize={["1rem", "2rem", "3rem"]}
        fontWeight="bold"
        m={4}
      >
        {" "}
        Zety is Rated Excellent on TrustPilot{" "}
      </Text>
      <Flex
        maxWidth={["100vw", "100vw", "100vw", "15vw", "92vw"]}
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        width="100%"
      >
        <Box>
          <RatingWeb rating={4} />
        </Box>

        <Box
          ml={["2", "6", "6", "0", "0", "4"]}
          my={1}
          w={["90vw", "90vw", "93vw", "76vw", "87%", "89%"]}
          marginLeft={["6%", "4%", "3%", "0.5%"]}
        >
          {/* <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <RatingComponent rating={item.rating} />
              </div>
            ))}
          </Slider> */}
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
        </Box>
      </Flex>
    </>
  );
};

export default SliderComponent;
