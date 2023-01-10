import React from "react";
import {
  UnorderedList,
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  ListItem,
} from "@chakra-ui/react";

const FaqLeftImage = ({
  heading,
  text1,
  text01,
  text2,
  text3,
  item1,
  item2,
  item3,
  item4,
  item5,
  item1h,
  item2h,
  item3h,
  item4h,
  item5h,
  item6,
  item6h,
  image,
}) => {
  return (
    <Box w={["100%", "100%", "100%", "1000px", "92%", "95%"]}>
      <Grid
        templateAreas={[`". textArea image"`]}
        gridTemplateRows={"1,1fr"}
        gridTemplateColumns={[
          "1fr 1fr 1fr",
          "0fr 2fr 1fr",
          "0fr 2fr 1fr",
          "1fr 2fr 1fr",
          "1fr 2fr 1fr",
        ]}
        marginInlineStart={["20px", "30px", "60px", "60px", "40px"]}
        marginInlineEnd={["20px", "30px", "60px", "60px", "40px"]}
        display={["flex", "flex", "grid", "grid", "grid", "grid", "grid"]}
        flexDirection={["column-reverse"]}
      >
        <GridItem
          pl="2"
          area={"textArea"}
          position="relative"
          style={{
            letterSpacing: "0.3px",
          }}
        >
          <Text
            className="sub-heading"
            fontSize={["1.4em", "1.4em", "1.9em", "1.9em", "1.9em"]}
            lineHeight={["26px", "30px", "30px", "30px", "30px"]}
          >
            {heading}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", , "1.1em", "1.3em"]}
            my={4}
            lineHeight={["30px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {" "}
            {text01}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text1}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text2}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={["23px", "24px", "30px", "30px", "30px"]}
            className={"small-text"}
          >
            {text3}
          </Text>
          {item1 ? (
            <UnorderedList
              ml={4}
              fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
              lineHeight={["20px", "20px", "24px", "24px", "24px"]}
              className={"small-text"}
              style={{
                letterSpacing: "0.1px",
              }}
            >
              <ListItem mb={"5px"}>
                <Text
                  as="span"
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  className="sub-heading"
                  lineHeight={"0px"}
                >
                  {item1h}
                </Text>
                <Text
                  as="span"
                  ml={1}
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                >
                  {item1}
                </Text>
              </ListItem>
              <ListItem mb={"5px"}>
                <Text
                  as="span"
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  className="sub-heading"
                  lineHeight={"0px"}
                >
                  {item2h}
                </Text>
                <Text
                  as="span"
                  ml={1}
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                >
                  {item2}
                </Text>
              </ListItem>
              <ListItem mb={"5px"}>
                <Text
                  as="span"
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  className="sub-heading"
                  lineHeight={"0px"}
                >
                  {item3h}
                </Text>
                <Text
                  as="span"
                  ml={1}
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                >
                  {item3}
                </Text>
              </ListItem>
              <ListItem mb={"5px"}>
                <Text
                  as="span"
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  className="sub-heading"
                  lineHeight={"0px"}
                >
                  {item4h}
                </Text>
                <Text
                  as="span"
                  ml={1}
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                >
                  {item4}
                </Text>
              </ListItem>
              <ListItem mb={"5px"}>
                <Text
                  as="span"
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  className="sub-heading"
                  lineHeight={"0px"}
                >
                  {item5h}
                </Text>
                <Text
                  as="span"
                  ml={1}
                  fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                >
                  {item5}
                </Text>
              </ListItem>
              {item6 ? (
                <ListItem mb={"3px"}>
                  <Text
                    as="span"
                    fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                    className="sub-heading"
                    lineHeight={"0px"}
                  >
                    {item6h}
                  </Text>
                  <Text
                    as="span"
                    ml={1}
                    fontSize={["0.9em", "0.9em", "1em", "1em", "1em"]}
                  >
                    {item6}
                  </Text>
                </ListItem>
              ) : (
                ""
              )}
            </UnorderedList>
          ) : (
            ""
          )}
        </GridItem>
        <GridItem
          pl="2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          marginInlineStart={["20px", "20px", "20px", "10px", "10px"]}
          marginInlineEnd="20px"
          area={"image"}
        >
          <Image objectFit="cover" src={image} alt="Dan Abramov" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqLeftImage;
