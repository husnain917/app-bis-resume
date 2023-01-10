import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useWindowSizing } from "../../../customHooks/useWindowSizing";
export default function Hint({
  message,
  description,
  number,
  imgSrc,
  isRight,
}) {
  const size = useWindowSizing();
  const width = size.width;
  return (
    <>
      <Box margin={["2rem 0", "2rem 0", "4rem 0", "6rem 0", "6rem 0"]}>
        <Box
          id={"cardContent"}
          bg={["#F5F5F5", "#F5F5F5", "#F5F5F5", "transparent", "transparent"]}
          padding={
            width > 610
              ? ["1.2rem", "1.2rem", "1.2rem", "0rem", "0rem"]
              : "0.2rem"
          }
          display={"flex"}
          flexDir={
            width > 610
              ? [
                  "column",
                  "row",
                  "row",
                  isRight ? "row" : "row-reverse",
                  isRight ? "row" : "row-reverse",
                ]
              : "column"
          }
          justifyContent={[
            "space-around",
            "space-around",
            "space-around",
            "normal",
            "normal",
          ]}
        >
          <Box
            id="cardText"
            display={"flex"}
            flexDirection="column"
            w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
            alignItems={isRight ? "flex-end" : "flex-start"}
          >
            <Box
              display={["none", "none", "none", "flex", "flex"]}
              className={"only-font-family"}
              fontSize={"7rem"}
              width="10rem"
              height="9rem"
              lineHeight={"15rem"}
              color="white"
              borderRadius={"1rem"}
              marginBottom={"2rem"}
              justifyContent="center"
              alignItems={"center"}
              bgColor={isRight ? "#51E2C2" : "#4BCBED"}
            >
              {number}
            </Box>
            <Box
              id="cardText"
              background={"#F5F5F5"}
              padding={
                width > 610
                  ? [
                      "0 3rem 0 0",
                      "0 3rem 0 0",
                      "0 3rem 0 0",
                      "0 4rem",
                      "0 4rem",
                    ]
                  : "0"
              }
              borderRadius="1rem"
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              style={{
                flexGrow: 1,
              }}
            >
              <Text
                id={"cardHeadline"}
                marginBottom={["0.6rem", "0.6rem", "0.6rem", "1rem", "1rem"]}
                display="flex"
                fontWeight={["700", "700", "700", "600", "600"]}
                fontSize={["1.4rem", "1.4rem", "1.8rem", "2rem", "2rem"]}
                className="small-heading"
              >
                <Text display={["flex", "flex", "flex", "none", "none"]}>
                  {number}{" "}
                  <p
                    style={{
                      margin: "0px 2px 0px 2px",
                    }}
                  >
                    .
                  </p>
                </Text>
                {message}
              </Text>
              <Text
                id={"cardbodyText"}
                className={"small-text"}
                fontSize={
                  width > 610
                    ? ["1.2rem", "1.1rem", "1.2rem", "1.2rem", "1.2rem"]
                    : "1rem"
                }
                fontWeight={"400"}
                marginBottom={"1rem"}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                lineHeight={["26px", "26px", "30px", "30px", "30px"]}
              >
                {description}
              </Text>
            </Box>
          </Box>
          <Box
            id="cardImage"
            background={"#F5F5F5"}
            margin={[
              "0 0 0 0",
              "0 0 0 0",
              isRight ? "0 0 0 1.6rem" : "0 1.6rem 0 0",
              isRight ? "0 0 0 1.6rem" : "0 1.6rem 0 0",
              isRight ? "0 0 0 1.6rem" : "0 1.6rem 0 0",
            ]}
            width={width > 610 ? ["50%", "50%", "50%", "45%", "40%"] : "100%"}
            borderRadius={"1rem"}

            // padding={"0 4rem"}
            // borderRadius="2rem"
            // display={"flex"}
            // flexDirection={"row"}
            // justifyContent={"center"}
          >
            <Image
              src={imgSrc}
              alt="sorry image not available"
              w="100%"
              height="100%"
              bg={isRight ? "#51E2C2" : "#4BCBED"}
              borderRadius="1rem"
            />
          </Box>
        </Box>
      </Box>
      {/* <Box
        w="100%"
        display="flex"
        flexDir={[
          "column",
          "column",
          "column",
          isRight ? "row" : "row-reverse",
        ]}
        alignItems="center"
        justifyContent="center"
        pl="10%"
        pr="10%"
        mt="50px"
      >
        <Box
          w={["100%", "100%", "100%", "49%"]}
          display="flex"
          flexDir="column"
          alignSelf="start"
          // mt="1%"
          ml={isRight ? "0" : "10px"}
          alignItems={isRight ? "flex-end" : "flex-start"}
        >
          <Text
            display={["none", "none", "none", "block"]}
            w="25%"
            fontWeight="bold"
            fontSize={[
              isRight ? "4rem" : "4rem",
              "4rem",
              "6rem",
              "8rem",
              "8rem",
              "6rem",
            ]}
            color="white"
            bgColor={isRight ? "#51E2C2" : "#4BCBED"}
            align="center"
            pt={["5px"]}
            pb="5px"
            borderRadius="20px"
            ml={isRight ? "74%" : "0%"}
          >
            {number}
          </Text>
          <Box
            bgColor={["none", "none", "none", "#F5F5F5"]}
            borderRadius="20px"
            mr="10px"
            px={["10px", "20px", "30px", "50px"]}
            py={["10px", "20px", "30px", "60px"]}
            mt={[, , , "5%", "3.4%", "3.4%"]}
            height={[, "auto", "auto", "320px", "300px", "406px", "406px"]}
          >
            <Text
              fontSize={["1.2rem", "2rem", "2.5rem", "2rem", "", "3rem"]}
              fontWeight="bold"
              color=" #313B47"
              pt="10px"
              textAlign="left"
            >
              {message}
            </Text>
            <Text
              fontSize={["1rem", "1.4rem", "1.7rem", "1.3rem", "", "1.9rem"]}
              color=" #313B47"
              mt={[, , "0px", "10px"]}
              mb="5%"
              fontWeight="500"
              textAlign="justify"
            >
              {description}
            </Text>
          </Box>
        </Box>
        <Box
          w={["100%", "100%", "100%", "50%"]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src={imgSrc}
            alt="sorry image not available"
            w="100%"
            bg={isRight ? "#51E2C2" : "#4BCBED"}
            borderRadius={"5px"}
            // height={["auto", "auto", "auto", "465px", "555px", "615px"]}
            margin={[
              "0 0 0 0",
              "0 0 0 0",
              "0 0 0 0",
              isRight ? "0 auto 0 20px" : "20px 0 0 auto",
            ]}
          />
        </Box>
      </Box> */}
    </>
  );
}
