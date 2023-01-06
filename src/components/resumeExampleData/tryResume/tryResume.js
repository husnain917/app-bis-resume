import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import CommonButton from "../../commonButton/CommonButton";

const TryResume = () => {
  return (
    <Grid
      py={["48px", "48px", "64px", "80px", "80px"]}
      overflow={"hidden"}
      bg={"#EFF2F9"}
      height={["50em", "50em", "40em", "40em", "40em"]}
      // mb={"2em"}
      posiition={"relative"}
    >
      <Grid px={["0px", "0px", "32px", "44px", "44px"]} mx={"auto"}>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row", "row", "row"]}
          alignItems={["center", "center", "", "", ""]}
        >
          <Box
            width={["100%", "100%", "45%", "57%", "49%"]}
            // maxWidth={["375px", "", "", "", "", ""]}
            marginBottom={["16px"]}
            position="relative"
            marginRight={["0", "0", "0", "16px", "32px"]}
            flexShrink={["0", "0", "", "", "0"]}
            minWidth={["50%", "", "", "0%", "0%"]}
            height={["320px"]}
            // className={"builder-cta__visual"}
          >
            <Image
              src="./sampleTemplate.png"
              className="image1"
              alt="not availabale"
            />
            <Image
              src="./sampleTemplate.png"
              className="image2"
              alt="not availabale"
            />
            <Image
              src="./sampleTemplate.png"
              className="image3"
              alt="not availabale"
            />
          </Box>
          <Box
            flexGrow={"1"}
            minWidth={"50%"}
            // display={"flex"}
            // flexDirection={"column"}
            // alignItems={[
            //   "center",
            //   "center",
            //   "baseline",
            //   "baseline",
            //   "baseline",
            // ]}
            // justifyContent={"center"}
            textAlign={["center", "center", "start", "start", "start"]}
          >
            <Text
              fontWeight={700}
              fontSize={["2em", "2.4em", "2.5em", "3.8em", "3.8em"]}
              lineHeight={["36px", "36px", "48px", "48px", "48px"]}
              marginBottom={["20px"]}
              maxWidth={["auto", "auto", "10em", "10em", "10em"]}
              className={"sub-heading"}
            >
              Try our Professional Resume builder now!
            </Text>
            <Box
              padding={[
                "20px 10px",
                "20px",
                "20px 0px",
                "20px 0px",
                "20px 0px",
              ]}
            >
              {" "}
              <Text
                className="small-text"
                fontSize={["16px", "16px", "16px", "16px", "16px"]}
                lineHeight={"24px"}
              >
                Save time with our easy 3-step resume builder. No more writer’s
                block or formatting difficulties in Word. Rapidly make a perfect
                resume employers love.
              </Text>{" "}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              {/* <Button
                flexShrink={0}
                marginRight={["12px", "12px", "16px", "16px", "16px"]}
                className="button1"
                bg="blue.400"
                variant="solid"
                fontSize={["14x", "14px", "16px", "16px", "16px"]}
              >
                Create My Resume
              </Button> */}
              <Box mx={2}>
                <CommonButton
                  backgroundColor={"#2CACD5"}
                  color={"whitesmoke"}
                  fontSize={["14x", "14px", "16px", "16px", "16px"]}
                  height={"40px"}
                  width={"150px"}
                  padding={"20px"}
                  borderRadius={"5px"}
                  title={"Create My Resume"}
                />
              </Box>
              <Button fontSize={["14x", "14px", "16px", "16px", "16px"]}>
                Resume Examples
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TryResume;
