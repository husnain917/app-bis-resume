import React from "react";
import Slider1 from "./slider1";

const MostPopular1 = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <div style={containerStyles}>
          <Slider1 slides={slides} />
        </div>
      </div>
    </>
  );
};

export default MostPopular1;
