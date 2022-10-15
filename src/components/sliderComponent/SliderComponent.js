import React from "react";
<<<<<<< HEAD
import { Box, Text, Flex } from "@chakra-ui/react";
=======
import { Box, Text } from "@chakra-ui/react";
>>>>>>> 3265bab (sample rating component)
import RatingComponent from "../ratingComponent/RatingComponent";
import { data } from "./data";
import Slider from "react-slick";
import RatingWeb from "../ratingComponent/RatingWeb";

const SliderComponent = () => {
  console.log("SliderComponent", data);
<<<<<<< HEAD

=======
>>>>>>> 3265bab (sample rating component)
  {
    data.map((item) => {
      console.log(item);
    });
  }
  var settings = {
<<<<<<< HEAD
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
=======
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
>>>>>>> 3265bab (sample rating component)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
<<<<<<< HEAD
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
=======
          dots: true,
        },
      },
      {
        breakpoint: 600,
>>>>>>> 3265bab (sample rating component)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
<<<<<<< HEAD
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
=======
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
>>>>>>> 3265bab (sample rating component)
        },
      },
    ],
  };
  return (
    <>
<<<<<<< HEAD
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
=======
      <Text textAlign="center" fontSize={36} fontWeight="bold" m={4}>
        {" "}
        Zety is Rated Excellent on TrustPilot{" "}
      </Text>
      <Box display="flex" maxWidth="50px" justifyContent="space-between">
        <Box>
          <RatingWeb rating={4} />
        </Box>
        <Box maxW={1600} ml={2}>
>>>>>>> 3265bab (sample rating component)
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <RatingComponent rating={item.rating} />
              </div>
            ))}
          </Slider>
        </Box>
<<<<<<< HEAD
      </Flex>
=======
      </Box>
>>>>>>> 3265bab (sample rating component)
    </>
  );
};

<<<<<<< HEAD
export default SliderComponent;
=======
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

// .slick-next:before, .slick-prev:before
>>>>>>> 3265bab (sample rating component)
