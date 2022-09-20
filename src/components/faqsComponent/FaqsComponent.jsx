import React, { useEffect } from "react";
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
import "aos/dist/aos.css"; // You can also use <link> for styles

const FaqsComponent = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box maxW={["100vw"]} overflow="hidden" mt={10} mb={10}>
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
        <GridItem colSpan={3} rowSpan={2} maxW="850">
          <Text fontSize={["2.75em"]} className="font">
            Why should I use a resume builder?
          </Text>
          <Text fontSize="2xl" my={4}>
            {" "}
            Using a resume builder makes the process of creating a resume
            significantly faster and easier. Ever tried building your resume
            with Word?
          </Text>
          <Text fontSize="2xl" my={4}>
            The whole process is a huge pain – you make a TINY change to your
            resume, and the entire resume layout gets completely messed up.
          </Text>
          <Text fontSize="2xl" my={4}>
            With a resume builder, you don’t have to worry about the nitty
            gritty of resume creation, like font selection, layout, formatting,
            etc.
          </Text>
          <Text fontSize="2xl" my={4}>
            All you have to do is pick a resume template, fill it in, and then
            you’re ready to start applying for jobs!
          </Text>
        </GridItem>
      </Grid>
      <Grid
        h="400px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        overflow="hidden"
      >
        <GridItem colSpan={1} rowSpan={6} />
        <GridItem colSpan={3} rowSpan={6} bg="turquoise">
          <Text fontSize={["2.75em"]} className="font">
            What is the best resume builder?
          </Text>
          <Text fontSize="2xl" my={4} fontWeight="500" letterSpacing={2}>
            {" "}
            Over the past 7 years, we’ve been working hard to make Novorésumé
            the best resume builder out there.
          </Text>
          <Text fontSize="2xl" my={4}>
            And we’d say we succeeded! Here’s what sets us apart from the rest
            of the competition:
          </Text>
          <UnorderedList ml={8} fontSize={20}>
            <ListItem>
              <Text>Easy to Use</Text>
              <Text>
                Our builder is very easy to use, even if you're not too
                tech-friendly.
              </Text>
            </ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          rowSpan={2}
          colSpan={1}
        >
          <Image objectFit="cover" src="/faq1@2x.png" alt="Dan Abramov" />
        </GridItem>
      </Grid>
      <Grid
        h="400px"
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
          <Image objectFit="cover" src="/faq2@2x.png" alt="Dan Abramov" />
        </GridItem>
        <GridItem colSpan={3} rowSpan={6} bg="tomato" />
      </Grid>
      <Grid
        h="400px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} rowSpan={6}>
          {" "}
        </GridItem>
        <GridItem colSpan={3} rowSpan={6} bg="turquoise" />
        <GridItem
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          rowSpan={2}
          colSpan={1}
        >
          {" "}
          <Image objectFit="cover" src="/faq3@2x.png" alt="Dan Abramov" />
        </GridItem>
      </Grid>

      {/* </div> */}
    </Box>
  );
};

export default FaqsComponent;
