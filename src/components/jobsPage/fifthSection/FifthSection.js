import React from "react";
import ContentText from "../components/ContentText";
import CommonButton from "../../commonButton/CommonButton";
import { Box, Text, Image } from "@chakra-ui/react";
import { fifthContent } from "../data";

const FifthSection = () => {
  return (
    <Box padding={"100px 0px"} bg={"#FAFAFA"}>
      {fifthContent.map((item, index) => {
        return (
          <>
            <Box padding={"0px 380px"}>
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
            </Box>
            <Box
              display={"flex"}
              margin={"0 auto"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              padding={"0px 60px"}
            >
              {item?.Content?.map((item, index) => {
                return (
                  <>
                    <Box>
                      <Image src={item.imageUrl} alt="not available" />
                      <Box maxW={"290px"} minH={"110px"}>
                        <ContentText
                          id={item?.id}
                          text={item?.tag}
                          className={item?.className}
                          fontSize={item?.fontSize}
                          margin={item?.margin}
                          textAlign={item.textAlign}
                          backgroundColor={item?.backgroundColor}
                          width={item?.width}
                          whiteSpace={item?.whiteSpace}
                        />
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Box>
          </>
        );
      })}
      <Box>
        <Box
          id="HeadingRightSide"
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
          padding={"30px 30px 0px 30px"}
        >
          <Text
            className={"medium-text"}
            mt={2}
            color={"black"}
            fontSize={"26px"}
          >
            Job Search Masterclass
          </Text>
          <Text
            className={"small-text"}
            marginTop={"0.3rem"}
            fontSize={"21px"}
            display={"flex"}
          >
            $10.99
            <Text ml={2} textDecoration={"line-through"}>
              {" "}
              $15.00{" "}
            </Text>
          </Text>
          <CommonButton
            height={"5rem"}
            width={"11rem"}
            padding={"24px"}
            borderRadius={"40px"}
            title={"Buy Today"}
            margin={"24px 0px"}
            fontSize={"18px"}
            backgroundColor={"rgb(75,204,239)"}
          />
          <Box
            height={"2px"}
            backgroundColor={"black"}
            mt={4}
            width={"25%"}
          ></Box>
          <CommonButton
            className={"medium-text"}
            width={"20rem"}
            height={"4.5rem"}
            title={"Download Sample"}
            backgroundColor={"#E6E6E6"}
            fontSize={"18px"}
            margin={"1.5rem 0rem 0rem 0rem"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FifthSection;
