import React from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const FaqRightImage = ({
  heading,
  text1,
  text2,
  text3,
  text4,
  image,
  height,
}) => {
  return (
    <Box
      w={["100%", "100%", "100%", "1000px", "92%", "95%"]}
      marginTop={"1.2rem"}
    >
      <Grid
        marginTop="0.5rem"
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
        marginInlineStart={["20px", "30px", "40px", "40px", "40px"]}
        marginInlineEnd={["20px", "30px", "40px", "40px", "40px"]}
        style={{
          letterSpacing: "0.3px",
        }}
        h={height}
      >
        <GridItem pl="2" area={"textArea"} position="relative">
          <Text
            fontSize={["1.4em", "1.4em", "1.9em", "1.9em", "1.9em"]}
            lineHeight={["26px", "30px", "30px", "30px", "30px"]}
            className="sub-heading"
          >
            {heading}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {" "}
            {text1}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
            my={4}
          >
            {text2}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text3}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text4}
          </Text>
        </GridItem>
        <GridItem
          pl="2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          // marginInlineStart={["20px", "20px", "20px", "10px", "10px"]}
          // marginInlineEnd="20px"
          area={"image"}
        >
          <Image objectFit="cover" src={image} alt="Loading" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqRightImage;
