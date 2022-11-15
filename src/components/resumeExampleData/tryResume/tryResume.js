import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const TryResume = () => {
  return (
    <Box py={["48px", "48px", "64px", "80px", "80px"]}>
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
      </Box>
    </Box>
  );
};

export default TryResume;
