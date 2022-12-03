import React, { useRef } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Navigation } from "swiper";
import Slider from "react-slick";
import { sliderData } from "../resumeExampleData";
import Link from "next/link";
const Carasol = () => {
  const swiperRef = useRef();
  console.log("SLIDER DATA >>>>>>", sliderData);
  return (
    <Box>
      <Swiper
        // id="selectResume"
        spaceBetween={15}
        grabCursor
        initialSlide={1}
        centeredSlides={true}
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
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 3,
            pagination: false,
            spaceBetween: 6,
          },
        }}
      >
        {sliderData.map((template, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                key={index}
                bg={"whitesmoke"}
                maxW={"395px"}
                height={"520px"}
                //   padding={"5"}
                borderRadius={"10"}
                _hover={{
                  background: "white",
                  cursor: "pointer",
                }}
                onClick={() => {}}
              >
                <Box>
                  <Link href={template.link || "/templates/templ"}>
                    <Image
                      src={template.src}
                      alt={template.alt}
                      height={"520px"}
                      minW={"395px"}
                    />
                  </Link>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Carasol;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";

// export default function Carasol() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         // className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
