import React, { Component,useRef,useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightCard from "./RightCard"
import { cardData } from "../ConstantData"
import { useWindowSizing } from "../../../../customHooks/useWindowSizing";


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




export default function CardSliderFunc({cardWidth}) {
 const size = useWindowSizing()
 const screenWidth = size.width
  const ref = useRef(400);

  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);

  },[screenWidth]);

  return (
    <div ref={ref}>
    <CardSlider  cardWidth={cardWidth} height={height}/>
    </div>

  )
}


 class CardSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div  style={{ maxWidth: this.props.cardWidth , border:"1px solid",  padding:"5px 12px"}} >
                <Slider   {...settings}>
                    {cardData.map((item, index) => {
                        return (
                               <RightCard cardData={item} height={this.props.height} key={index} />
                         
                        )
                    })
                    }
                </Slider>
            </div>
        );
    }
}