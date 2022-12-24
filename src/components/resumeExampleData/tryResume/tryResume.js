import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

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
      <Grid px={["22px", "22px", "32px", "44px", "44px"]} mx={"auto"}>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row", "row", "row"]}
          alignItems={["center", "center", "", "", ""]}
        >
          <Box
            width={["100%", "100%", "45%", "57%", "57%"]}
            maxWidth={["375px", "", "", "", "", ""]}
            marginBottom={["16px"]}
            position="relative"
            marginRight={["0", "0", "0", "16px", "32px"]}
            flexShrink={["0", "0", "", "", "0"]}
            minWidth={["50%", "", "", "0%", "0%"]}
            height={["320px"]}
            // className={"builder-cta__visual"}
          >
            <Image src="./about.jpg" className="image1" alt="not availabale" />
            <Image src="./about1.png" className="image2" alt="not availabale" />
            <Image src="./about2.png" className="image3" alt="not availabale" />
          </Box>
          <Box
            textAlign={"left"}
            flexGrow={"1"}
            minWidth={"50%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={[
              "center",
              "center",
              "baseline",
              "baseline",
              "baseline",
            ]}
            justifyContent={"center"}
          >
            <Text
              fontWeight={700}
              fontSize={["2em", "2.8em", "2.5em", "3.8em", "3.8em"]}
              lineHeight={"48px"}
              marginBottom={["20px"]}
              maxWidth={"10em"}
            >
              Try our Professional Resume builder now!
            </Text>
            <Box marginBottom={"20px"}>
              {" "}
              <Text fontWeight={"600"} fontSize={"16px"}>
                Save time with our easy 3-step resume builder. No more writer’s
                block or formatting difficulties in Word. Rapidly make a perfect
                resume employers love.
              </Text>{" "}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Button
                flexShrink={0}
                marginRight={"16px"}
                className="button1"
                bg="blue.400"
                variant="solid"
              >
                Create My Resume
              </Button>
              <Button>Resume Examples</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TryResume;
