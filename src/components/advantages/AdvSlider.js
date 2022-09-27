import React from 'react'
import Slider from "react-slick";
import Adv from "./Adv";
import { data } from "./Constant";
import MobileAdv from "./MobileAdv";

export default function AdvSlider() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <MobileAdv
              key={index}
              advNum={item.advNum}
              title={item.title}
              advDesc={item.advDesc}
              imgSrc={item.imgSrc}
              isSlider={false}
            />
          );
        })}
      </Slider>
    </div>
  );
};
