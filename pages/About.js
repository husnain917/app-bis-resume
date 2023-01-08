import React from "react";
import { Box } from "@chakra-ui/react";
import AboutUs from "../src/components/aboutUs/AboutUs";
// import Footer from "../src/components/footer/Footer";
// import Navbar from "../src/components/navbar/Navbar";
import SideBar from "../src/components/sideBar/SideBar";

const About = () => {
  return (
    <>
      <Box>
        {/* <SideBar /> */}
        <AboutUs />
      </Box>
    </>
  );
};

export default About;
