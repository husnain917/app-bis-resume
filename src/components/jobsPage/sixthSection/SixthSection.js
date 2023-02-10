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
      padding={"30px 0px"}
    >
      {sixthContent?.map((item, index) => {
        return (
          <>
            <GridItem
              colSpan={2}
              w={["80%", "80%", "60%", "40%", "40%"]}
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
                    colSpan={[2, 2, 1, 1, 1]}
                    w="100%"
                    bg="#FAFAFA"
                    padding={[
                      "10px 20px ",
                      "10px 20px ",
                      "10px 20px ",
                      "20px 52px ",
                      "20px 52px ",
                    ]}
                    borderRadius={"20px"}
                  >
                    <Text id={item?.id} mt={"2%"} className={"xsmall-text"}>
                      <ContentText
                        id={item?.id}
                        text={item?.text}
                        className={item?.className}
                        fontSize={item?.fontSize}
                        margin={item?.margin}
                        textAlign={item.textAlign}
                        backgroundColor={item?.backgroundColor}
                        width={item?.width}
                        lineHeight={item?.lineHeight}
                      />
                    </Text>

                    <Text id={item?.id} mt={"2%"} className={"xsmall-text"}>
                      <ContentText
                        id={item?.id}
                        text={item?.author}
                        className={item?.className}
                        fontSize={item?.fontSize}
                        margin={item?.margin}
                        textAlign={item.authorTextAlign}
                        backgroundColor={item?.backgroundColor}
                        width={item?.width}
                      />
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
