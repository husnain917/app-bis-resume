import React, { useState, useRef } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import Rating from "../../rating/Rating";
// / Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import RatingComponent from "./RatingComponent";
import { data } from "./sliderData";

const Slider = ({ title, desc, date, name, rating }) => {
  const swiperRef = useRef();
  console.log("RatingComponent:", rating);
  const [currentValue, setCurrentValue] = useState(rating);
  const [hoverValue, setHoverValue] = useState(undefined);
  console.log("hoverValue", hoverValue);
  const property = {
    title: "Excellent and wonderfull",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste impedit maxime? Corrupti, saepe quam!",
    date: "April 5",
    name: "customer",
    rating: 5,
  };

  return (
    <>
      <Swiper
        id={"aboutUs"}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="wrap-slides"
      >
        {data.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <RatingComponent
                  title={item.title}
                  name={item.name}
                  rating={item.rating}
                  date={item.date}
                  feedback={item.feedback}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Box
        class="arrow-position"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Button
          class="left-arrow arrows"
          onClick={() => swiperRef.current.slidePrev()}
        >
          ←
        </Button>

        <Button
          class="right-arrow arrows"
          onClick={() => swiperRef.current.slideNext()}
        >
          →
        </Button>
      </Box>
    </>
  );
};

export default Slider;
