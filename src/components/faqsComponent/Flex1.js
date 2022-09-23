import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Flex1 = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      w={["100%", "94%", "860px", "960px", "1220px", "1500px"]}
    >
      <Box>
        <Image objectFit="cover" src="/faq0@2x.png" alt="Dan Abramov" />
      </Box>
      <Box
        w={["100%", "80%", "100%", "100%", "100%", "100%", "80%"]}
        minH="400px"
      >
        <Text fontSize={["2.75em"]} className="font">
          Why should I use a resume builder?
        </Text>
        <Text fontSize={["1.5em"]} my={4}>
          {" "}
          Using a resume builder makes the process of creating a resume
          significantly faster and easier. Ever tried building your resume with
          Word?
        </Text>
        <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]} my={4}>
          The whole process is a huge pain - you make a TINY change to your
          resume, and the entire resume layout gets completely messed up.
        </Text>
        <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]} my={4}>
          With a resume builder, you don&#39;t have to worry about the nitty
          gritty of resume creation, like font selection, layout, formatting,
          etc.
        </Text>
        <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]} my={4}>
          All you have to do is pick a resume template, fill it in, and then
          you&#39;re ready to start applying for jobs!
        </Text>
      </Box>
    </Box>
  );
};

export default Flex1;
