import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const image = "https://source.unsplash.com/featured/300x201";

export default function App() {
  const images = new Array(6).fill({ url: image });

  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="App">
      <div className="carousel-container">
        <div className="swiper-button" ref={prevRef}>
          prev
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          className="external-buttons"
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          updateOnWindowResize
          observer
          observeParents
          initialSlide={2}
          onSwiper={setSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                height="200"
                width="300"
                alt="img"
                className="image"
                src={image.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button" ref={nextRef}>
          next
        </div>
      </div>
    </div>
  );
}
