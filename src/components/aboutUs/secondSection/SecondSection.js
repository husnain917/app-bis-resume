import React from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const SecondSection = ({ heading, content, image, direction, subHeading }) => {
  //   const content = contentLinks === 1 ? "<> Ahsan</> " : "<>Bilal</>";
  return (
    <Box
    // w={["100%", "94%", "94%", "960px", "1220px", "1500px"]}
    >
      <Grid
        marginTop="1.2rem"
        templateAreas={[`"${direction}"`]}
        gridTemplateRows={"1,1fr"}
        gridTemplateColumns={[
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
        ]}
        color="blackAlpha.700"
        // margin="3.2rem auto"
        display={["flex", "flex", "grid", "grid", "grid", "grid", "grid"]}
        flexDirection={["column-reverse"]}
        marginInlineStart="40px"
        marginInlineEnd="40px"
      >
        <GridItem pl="2" area={"textArea"} position="relative">
          <Text fontSize={["3.6rem"]} fontWeight="600" fontFamily={"heading"}>
            {heading}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]}
            fontWeight={"bold"}
            margin={"0 0 20px 0"}
          >
            {" "}
            {subHeading}
          </Text>
          <Text margin={"0 0 20px"}>{content}</Text>
        </GridItem>
        <GridItem
          pl="2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          marginInlineStart="40px"
          marginInlineEnd="40px"
          area={"image"}
        >
          <Image objectFit="cover" src={image} alt="Loading" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecondSection;
