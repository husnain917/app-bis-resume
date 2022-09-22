import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqsWithoutList = () => {
  return (
    <Grid
      minHeight="400px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        rowSpan={2}
        colSpan={1}
      >
        <Image objectFit="cover" src="/faq0@2x.png" alt="Dan Abramov" />
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        w={["100%", "100%", "100%", "100%", "100%", "100%", "80%"]}
      >
        <Text fontSize={["2.75em"]} className="font">
          Why should I use a resume builder?
        </Text>
        <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]} my={4}>
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
          With a resume builder, you don`&#39;`t have to worry about the nitty
          gritty of resume creation, like font selection, layout, formatting,
          etc.
        </Text>
        <Text fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]} my={4}>
          All you have to do is pick a resume template, fill it in, and then
          you`&#39;`re ready to start applying for jobs!
        </Text>
      </GridItem>
    </Grid>
  );
};

export default FaqsWithoutList;
