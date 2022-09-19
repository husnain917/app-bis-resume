import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Adv from "./Adv";

export default function Advantages() {
  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize="2rem"
          align="center"
          fontWeight="600"
          color="#002D6B"
          mt="5%"
          pt="5%"
        >
          Advantages of Using My Perfect BisResume
        </Text>
        <Box
          w="100%"
          h="100vh"
          display="flex"
          flexDir="row"
          justifyContent="center"
        >
          <Box>
            <Image src="/adv.png" width={250} height={460} />
          </Box>
          <Box>
            <Adv advNum="1" title="Professional, customizable templates" />
            <Adv advNum="2" title="Expertly crafted phrases" />
            <Adv advNum="3" title="Popular format downloads" />
            <Adv advNum="4" title="Optimize your resume" />
            <Adv advNum="5" title="Customize your resume to the job" />
            <Adv advNum="6" title="Up your application game" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
