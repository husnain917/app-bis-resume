import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

const TryResume = () => {
  return (
    <Box py={["48px", "48px", "64px", "80px", "80px"]}>
      <Grid
        columns={2}
        spacing={10}
        px={["22px", "22px", "32px", "44px", "44px"]}
      >
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </Grid>
    </Box>
  );
};

export default TryResume;
