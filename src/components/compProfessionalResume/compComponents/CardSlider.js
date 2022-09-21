import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightCard from "./RightCard"
import { cardData } from "../ConstantData";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  }}
        onClick={onClick}
      />
    );
  }





export default class CardSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div style={{ maxWidth: "500px" ,border:"1px solid", padding:"5px 20px"}} >
                <Slider   {...settings}>
                    {cardData.map((item, index) => {
                        return (
                            <RightCard cardData={item} key={index} />
                        )
                    })
                    }
                </Slider>
            </div>
        );
    }
}