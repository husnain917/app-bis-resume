import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const TryResume = () => {
  return (
    <Grid
      py={["48px", "48px", "64px", "80px", "80px"]}
      overflow={"hidden"}
      bg={"#EFF2F9"}
      height={"14%"}
    >
      <Box
        px={["22px", "22px", "32px", "44px", "44px"]}
        display={"flex"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Box
          width={["100%", "100%", "45%", "57%", "57%"]}
          maxWidth={["375px", "", "", "", "", ""]}
          marginBottom={["16px"]}
          position={"relative"}
          marginRight={["0", "0", "0", "16px", "32px"]}
          flexShrink={["", "", "", "", "0"]}
        >
          <Image src="/graphicMan.jpg" className="image1" />
          <Image src="/graphicMan.jpg" className="image2" />
          <Image src="/graphicMan.jpg" className="image3" />
        </Box>
        <Box textAlign={"left"} flexGrow={"1"}>
          <Text
            fontWeight={700}
            fontSize={["46px"]}
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
  );
};

export default TryResume;
