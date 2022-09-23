import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";

const PracticingGrid = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box w={["100%", "94%", "860px", "960px", "1220px", "1500px"]}>
        {/* <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={"header"}>
            Header
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            Main
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid> */}
        <Grid
          templateColumns="repeat(3, 1fr)"
          gridTemplateColumns={[
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 2fr 1fr",
          ]}
          gap={2}
        >
          <GridItem
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            rowSpan={2}
            colSpan={1}
            minHeight="400px"
          >
            <Image objectFit="cover" src="/faq0@2x.png" alt="Dan Abramov" />
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Box>
    </Box>
  );
};

export default PracticingGrid;
