import React, { Component } from "react";
import Slider from "react-slick";
import Adv from "./Adv";
import { data } from "./Constant";
export default class AdvSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      swipe: false,
      arrows: false,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
      
    };
    return (
      <div>
        <Slider {...settings}>
          {data?.map((item,index) => {
            return (
              <Adv
              key={index}
                advNum={item.advNum}
                title={item.title}
                advDesc={item.advDesc}
                isSlider={false}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
