import React from "react";
import { Box } from "@chakra-ui/react";
import AboutUs from "../src/components/aboutUs/AboutUs";
import SideBar from "../src/components/sideBar/SideBar";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";
import styles from "../styles/sideBarSection.module.css";

const About = () => {
  return (
    <>
      <Box>
        <AboutUs />
      </Box>
    </>
  );
};

export default About;
