import React from "react";
import ContentText from "../components/ContentText";
import CommonButton from "../../commonButton/CommonButton";
import { Box, Text, Image } from "@chakra-ui/react";
import { fifthContent } from "../data";
import Link from "next/link";

const FifthSection = () => {
  return (
    <Box
      padding={["10px 0px", "10px 0px", "10px 0px", "10px 0px", "10px 0px"]}
      bg={"#FAFAFA"}
    >
      {fifthContent.map((item, index) => {
        return (
          <>
            <Box
              padding={[
                "0px 35px",
                "0px 35px",
                "0px 135px",
                "0px 260px",
                "0px 380px",
              ]}
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
                lineHeight={item?.lineHeight}
              />
            </Box>
            <Box
              display={["flex"]}
              flexDirection={["column", "column", "row", "row", "row"]}
              margin={"0 auto"}
              justifyContent={[
                "space-between",
                "space-between",
                "space-between",
                "space-evenly",
                "space-evenly",
              ]}
              alignItems={"center"}
              padding={[
                "10px 20px",
                "10px 20px",
                "10px 60px",
                "0px 60px",
                "0px 60px",
              ]}
            >
              {item?.Content?.map((item, index) => {
                return (
                  <>
                    <Box>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Image
                          src={item.imageUrl}
                          alt="not available"
                          height={["200px", "200px", "100%", "100%", "100%"]}
                        />
                      </Box>
                      <Box
                        maxW={["350px", "350px", "290px", "290px", "290px"]}
                        minH={["50px", "50px", "90px", "110px", "110px"]}
                      >
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
          padding={[
            "0px 30px 0px 30px",
            "0px 30px 0px 30px",
            "0px 30px 0px 30px",
            "30px 30px 0px 30px",
            "30px 30px 0px 30px",
          ]}
        >
          {/* <Text
            className={"medium-text"}
            mt={2}
            color={"black"}
            fontSize={["21px", "21px", "21px", "26px", "26px"]}
          >
            Job Search Masterclass
          </Text>
          <Text
            className={"small-text"}
            marginTop={"0.3rem"}
            fontSize={["18px", "18px", "18px", "26px", "26px"]}
            display={"flex"}
          >
            $10.99
            <Text ml={2} textDecoration={"line-through"}>
              {" "}
              $15.00{" "}
            </Text>
          </Text>
          <Link href="/templates">
            <CommonButton
              height={"3.5rem"}
              width={"10rem"}
              padding={"24px"}
              borderRadius={"40px"}
              title={"Buy Today"}
              margin={"24px 0px"}
              fontSize={"17px"}
              backgroundColor={"rgb(75,204,239)"}
            />
          </Link> */}
          <Box
            height={"2px"}
            backgroundColor={"black"}
            mt={4}
            width={"25%"}
          ></Box>
          <Link href="/templates">
            <CommonButton
              className={"medium-text"}
              width={["12rem", "12rem", "12rem", "14rem", "14rem"]}
              height={["3.4rem", "3.8rem", "3.8rem", "3.8rem", "3.8rem"]}
              title={"Download Sample"}
              backgroundColor={"#E6E6E6"}
              fontSize={"17px"}
              margin={"1.5rem 0rem 0rem 0rem"}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FifthSection;
