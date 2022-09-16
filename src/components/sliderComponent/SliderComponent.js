import React from "react";
import { Box, Text } from "@chakra-ui/react";
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
    slidesToShow: 5,
    slidesToScroll: 4,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
        },
      },
    ],
  };
  return (
    <>
      <Text textAlign="center" fontSize={36} fontWeight="bold" m={4}>
        {" "}
        Zety is Rated Excellent on TrustPilot{" "}
      </Text>
      <Box display="flex" maxWidth="50px" justifyContent="space-between">
        <Box>
          <RatingWeb rating={4} />
        </Box>
        <Box maxW={1600} ml={2}>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <RatingComponent rating={item.rating} />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
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

// .slick-next:before, .slick-prev:before
