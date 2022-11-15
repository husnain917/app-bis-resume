import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const TryResume = () => {
  return (
    <Box py={["48px", "48px", "64px", "80px", "80px"]}>
      <Box px={["22px", "22px", "32px", "44px", "44px"]}>
        <Box display={"flex"}>
          <Image src="/graphicMan.jpg" className="image1" />
          <Image src="/graphicMan.jpg" className="image2" />
          <Image src="/graphicMan.jpg" className="image3" />
        </Box>
      </Box>
    </Box>
  );
};

export default TryResume;
