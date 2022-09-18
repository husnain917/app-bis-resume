import React, { useEffect } from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const FaqsComponent = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box maxW={["90vw"]}>
      {/* <div data-aos="fade-in"> */}
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      {/* </div> */}
    </Box>
  );
};

export default FaqsComponent;
