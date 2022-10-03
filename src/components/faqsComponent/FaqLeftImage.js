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
  console.log(item4h, item5h);
  return (
    <Box w={["100%", "94%", "94%px", "960px", "1220px", "1500px"]}>
      <Grid
        // marginTop="1.2rem"
        templateAreas={[`". textArea image"`]}
        gridTemplateRows={"1,1fr"}
        gridTemplateColumns={[
          "1fr 1fr 1fr",
          "0fr 2fr 1fr",
          "0fr 2fr 1fr",
          "1fr 2fr 1fr",
          "1fr 2fr 1fr",
        ]}
        marginInlineStart="40px"
        marginInlineEnd="40px"
        color="blackAlpha.700"
        // margin="3.2rem auto"
        display={["flex", "flex", "grid", "grid", "grid", "grid", "grid"]}
        flexDirection={["column-reverse"]}
      >
        <GridItem pl="2" area={"textArea"} position="relative">
          <Text fontSize={["2.75em"]} fontWeight="600">
            {heading}
          </Text>
          <Text fontSize="2xl" my={4}>
            {" "}
            {text1}
          </Text>
          <Text fontSize="2xl" my={4}>
            {text01}
          </Text>
          <Text fontSize="2xl" my={4}>
            {text2}
          </Text>
          <Text fontSize="2xl" my={4}>
            {text3}
          </Text>
          {item1 ? (
            <UnorderedList ml={8} fontSize={18}>
              <ListItem>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item1h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                  }}
                >
                  {item1}
                </span>
              </ListItem>
              <ListItem>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item2h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                  }}
                >
                  {item2}
                </span>
              </ListItem>
              <ListItem>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item3h}{" "}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                    maxWidth: "14ch",
                  }}
                >
                  {item3}
                </span>
              </ListItem>
              <ListItem>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item4h}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                  }}
                >
                  {item4}
                </span>
              </ListItem>
              <ListItem>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item5h}
                </span>
                <span
                  style={{
                    marginLeft: 3,
                  }}
                >
                  {item5}
                </span>
              </ListItem>
              {item6 ? (
                <ListItem>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {item6h}
                  </span>
                  <span
                    style={{
                      marginLeft: 3,
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
          marginInlineStart="40px"
          marginInlineEnd="40px"
          area={"image"}
        >
          <Image objectFit="cover" src={image} alt="Dan Abramov" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqLeftImage;
