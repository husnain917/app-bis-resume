import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
// import "./styles.css";

const imagesArr = [
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
  {
    src: "https://source.unsplash.com/random/300x500",
    alt: "random from unsplash",
  },
];

export default function Slider() {
  return (
    <Swiper
      id="coverEffectSlider"
      navigation
      spaceBetween={15}
      grabCursor
      initialSlide={1}
      loop
      dots={true}
      modules={[Navigation]}
      breakpoints={{
        100: {
          slidesPerView: 1,
        },
        390: {
          slidesPerView: 2,
        },
        550: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      }}
    >
      {imagesArr.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
