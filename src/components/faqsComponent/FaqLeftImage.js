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
        marginInlineStart={["60px", "60px", "60px", "60px", "40px"]}
        marginInlineEnd={["60px", "60px", "60px", "60px", "40px"]}
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
          <Text fontSize={["1.9em"]} className="sub-heading">
            {heading}
          </Text>
          <Text fontSize={["1em", "1em", "1em", , "1.1em", "1.3em"]} my={4}>
            {" "}
            {text1}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={"2"}
          >
            {text01}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
            lineHeight={"2"}
          >
            {text2}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1.1em", "1.3em"]}
            my={4}
          >
            {text3}
          </Text>
          {item1 ? (
            <UnorderedList ml={4} fontSize={"0.9em"} fontWeight={500}>
              <ListItem mb={"5px"}>
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item1h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    fontWeight: "normal",
                  }}
                >
                  {item1}
                </span>
              </ListItem>
              <ListItem mb={"5px"}>
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item2h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    fontWeight: "normal",
                  }}
                >
                  {item2}
                </span>
              </ListItem>
              <ListItem mb={"5px"}>
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item3h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    maxWidth: "14ch",
                    fontWeight: "normal",
                  }}
                >
                  {item3}
                </span>
              </ListItem>
              <ListItem mb={"5px"}>
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item4h}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    fontWeight: "normal",
                  }}
                >
                  {item4}
                </span>
              </ListItem>
              <ListItem mb={"5px"}>
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item5h}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    fontWeight: "normal",
                  }}
                >
                  {item5}
                </span>
              </ListItem>
              {item6 ? (
                <ListItem mb={"3px"}>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {item6h}
                  </span>
                  <span
                    style={{
                      marginLeft: 3,
                      fontWeight: "normal",
                    }}
                  >
                    {item6}
                  </span>
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
