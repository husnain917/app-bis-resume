import React from "react";
import Slider3 from "./slider3";

const MostPopular3 = () => {
  const slides = [
    { url: "./about.jpg", title: "beach" },
    { url: "./four.jpg", title: "boat" },
    { url: "./imageProfile.jpg", title: "forest" },
    { url: "./gdBanner.jpg", title: "city" },
    { url: "./about.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <Slider3 slides={slides} />
      </div>
    </div>
  );
};

export default MostPopular3;
