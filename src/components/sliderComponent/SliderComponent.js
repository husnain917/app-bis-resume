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
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
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
        maxWidth={["100vw", "100vw", "100vw", "13vw", "96vw"]}
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        width="100%"
      >
        <Box>
          <RatingWeb rating={4} />
        </Box>

        <Box
          ml={["2", "6", "6", "2", "0"]}
          my={1}
          w={["90vw", "90vw", "93vw", "70vw", "79vw", "80vw"]}
        >
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <RatingComponent rating={item.rating} />
              </div>
            ))}
          </Slider>
        </Box>
      </Flex>
    </>
  );
};

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         background: "black",
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default SliderComponent;
