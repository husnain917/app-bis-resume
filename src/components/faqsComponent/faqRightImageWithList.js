import React from "react";
import {
  Grid,
  UnorderedList,
  ListItem,
  GridItem,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";

const FaqRightImageWithList = ({
  heading,
  text1,
  text2,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  image,
}) => {
  return (
    <Box w={["100%", "100%", "100%", "1000px", "92%", "95%"]}>
      <Grid
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
        marginInlineStart={["20px", "40px", "60px", "35px", "40px"]}
        marginInlineEnd={["20px", "40px", "60px", "35px", "40px"]}
      >
        <GridItem
          pl="2"
          area={"textArea"}
          position="relative"
          // className="small-text"
        >
          <Text
            fontSize={["1.4em", "1.4em", "1.9em", "1.9em", "1.9em"]}
            lineHeight={["30px", "30px", "30px", "30px", "30px"]}
            className="sub-heading"
          >
            {heading}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {" "}
            {text1}
          </Text>
          {item1 ? (
            <>
              <UnorderedList
                ml={2}
                fontSize={["0.9em", "0.9em", "1em", "1em", "1.1em"]}
                lineHeight={["20px", "20px", "24px", "24px", "24px"]}
                className={"medium-text"}
              >
                <ListItem ml="3" mb={0.5}>
                  {item1}
                </ListItem>
                <ListItem ml="3" mb={0.5}>
                  {item2}
                </ListItem>
                <ListItem ml="3" mb={0.5}>
                  {item3}
                </ListItem>
                <ListItem ml="3" mb={0.5}>
                  {item4}
                </ListItem>
              </UnorderedList>
            </>
          ) : (
            ""
          )}

          <Text
            fontSize={["1em", "1em", "1em", "1.1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text2}
          </Text>
          {item5 ? (
            <>
              <UnorderedList
                ml={2}
                className={"medium-text"}
                fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                lineHeight={["20px", "20px", "24px", "24px", "24px"]}
              >
                <ListItem ml="3" mb={0.5}>
                  {item5}
                </ListItem>
                <ListItem ml="3" mb={0.5}>
                  {item6}
                </ListItem>
                <ListItem ml="3">{item7}</ListItem>
              </UnorderedList>
            </>
          ) : (
            ""
          )}
        </GridItem>
        <GridItem
          // pl="2"
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

export default FaqRightImageWithList;
