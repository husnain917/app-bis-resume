import React from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const FaqRightImage = ({ heading, text1, text2, text3, text4, image }) => {
  return (
    <Box w={["100%", "100%", "100%", "960px", "1220px", "1500px"]}>
      <Grid
        marginTop="1.2rem"
        templateAreas={[`"image textArea ."`]}
        gridTemplateRows={"1,1fr"}
        gridTemplateColumns={[
          "1fr 1fr 1fr",
          "1fr 2fr 0fr",
          "1fr 2fr 0fr",
          "1fr 2fr 1fr",
          "1fr 2fr 1fr",
        ]}
        display={["flex", "flex", "grid", "grid", "grid", "grid", "grid"]}
        flexDirection={["column-reverse"]}
        marginInlineStart="40px"
        marginInlineEnd="40px"
        style={{
          letterSpacing: "0.8px",
        }}
      >
        <GridItem pl="2" area={"textArea"} position="relative">
          <Text
            fontSize={["1.9em"]}
            fontWeight="600"
            style={{
              letterSpacing: "0px",
            }}
          >
            {heading}
          </Text>
          <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.3em"]} my={4}>
            {" "}
            {text1}
          </Text>
          <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.3em"]} my={4}>
            {text2}
          </Text>
          <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.3em"]} my={4}>
            {text3}
          </Text>
          <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.3em"]} my={4}>
            {text4}
          </Text>
        </GridItem>
        <GridItem
          pl="2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          // marginInlineStart="40px"
          // marginInlineEnd="40px"
          area={"image"}
        >
          <Image objectFit="cover" src={image} alt="Loading" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqRightImage;
