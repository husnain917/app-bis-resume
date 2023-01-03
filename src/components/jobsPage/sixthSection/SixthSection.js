import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import ContentText from "../components/ContentText";
import { sixthContent } from "../data";

const SixthSection = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      width={"85%"}
      margin={"0 auto"}
      padding={"80px 0px"}
    >
      {sixthContent?.map((item, index) => {
        return (
          <>
            <GridItem
              colSpan={2}
              w={["60%", "60%", "60%", "40%", "40%"]}
              margin={"0 auto"}
            >
              <ContentText
                id={item?.id}
                text={item?.text}
                className={item?.className}
                fontSize={item?.fontSize}
                margin={item?.margin}
                textAlign={item.textAlign}
                backgroundColor={item?.backgroundColor}
                width={item?.width}
              />
            </GridItem>

            {item?.Content?.map((item, index) => {
              return (
                <>
                  <GridItem
                    w="100%"
                    bg="#FAFAFA"
                    padding={[
                      "20px 52px ",
                      "20px 52px ",
                      "10px 20px ",
                      "20px 52px ",
                      "20px 52px ",
                    ]}
                    borderRadius={"20px"}
                  >
                    <Text
                      fontSize={["18px", "18px", "18px", "26px", "26px"]}
                      className={"small-text"}
                    >
                      {item.text}
                    </Text>
                    <Text textAlign={"end"} mt={"2%"} className={"xsmall-text"}>
                      {item.author}
                    </Text>
                  </GridItem>
                </>
              );
            })}
          </>
        );
      })}
    </Grid>
  );
};

export default SixthSection;
