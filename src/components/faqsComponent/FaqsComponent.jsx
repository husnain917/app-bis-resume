import React, { useEffect } from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const FaqsComponent = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box>
      {/* <div data-aos="fade-in"> */}
      <Text textAlign="center" fontSize="2em" fontWeight="bold">
        Resume Builder FAQ.
      </Text>
      {/* </div> */}
    </Box>
  );
};

export default FaqsComponent;
