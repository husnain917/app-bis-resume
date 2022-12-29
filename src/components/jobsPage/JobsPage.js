import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import CommonButton from "../commonButton/CommonButton";

const JobsPage = () => {
  const handleButton = () => {
    console.log("FOCUSED");
  };
  return (
    <Box w={"100%"}>
      <Box bg={"#FFD67B"} paddingY={"10px"}>
        <Box display={"flex"} padding={"20px 10px 20px 10px"}>
          <Box w={"50%"}>
            <Box
              id="HeadingLeftSide"
              display={"flex"}
              flexDirection="column"
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              alignItems={"flex-end"}
              padding={"40px 30px 40px 60px"}
            >
              <Box
                display={["flex", "flex"]}
                className={"only-font-family"}
                lineHeight={"15rem"}
                justifyContent="center"
                alignItems={"center"}
              >
                <CommonButton
                  color={"white"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box>
              <Image
                src={"./jobsPage/topimage1.png"}
                height={"-webkit-fit-content"}
              />
              <Box display={"flex"} alignItems={"flex-start"}>
                <CommonButton
                  color={"white"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box>
            </Box>
          </Box>
          <Box w={"50%"}>
            <Box
              id="HeadingRightSide"
              display={"flex"}
              flexDirection="column"
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              padding={"30px"}
            >
              <Text
                className={"sub-heading"}
                fontSize={["2.8rem", "2.8rem", "2.8rem", "2.8rem", "3.2rem"]}
                color={"black"}
                lineHeight={"70px"}
                mt={20}
              >
                {" "}
                Job Search Masterclass
              </Text>
              <Text className={"medium-text"} mt={1} fontSize={"21px"}>
                An E-book by Novoresume
              </Text>
              <Text className={"medium-text"} mt={3} fontSize={"21px"}>
                The only book about the job search process that you’ll ever
                need. Learn how to create an impeccable resume, match it with a
                convincing cover letter, and ace the job interview.
              </Text>
              <Text
                className={"sub-heading"}
                mt={2}
                color={"black"}
                fontSize={"22px"}
                fontWeight={800}
              >
                Digital Download: PDF
              </Text>
              <Text
                className={"sub-heading"}
                mt={2}
                color={"black"}
                fontSize={"22px"}
              >
                Prices are in USD.
              </Text>
              <Text
                className={"medium-text"}
                mt={2}
                color={"black"}
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
                margin={"24px 0rem"}
                fontSize={"18px"}
                backgroundColor={"rgb(75,204,239)"}
              />
              <Box
                height={"2px"}
                backgroundColor={"black"}
                mt={4}
                width={"30%"}
              ></Box>

              <Text
                className={"medium-text"}
                mt={4}
                color={"black"}
                fontSize={"22px"}
              >
                Unsure? Check out our free sample!
              </Text>
              <CommonButton
                className={"medium-text"}
                width={"17rem"}
                height={"5rem"}
                title={"Download Sample"}
                marginTop={"1rem"}
                backgroundColor={"white"}
                fontSize={"18px"}
                margin={"24px 0rem"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobsPage;
