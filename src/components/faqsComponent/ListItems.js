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

const ListItems = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      overflow="hidden"
    >
      <GridItem colSpan={1} rowSpan={6} />
      <GridItem
        colSpan={3}
        rowSpan={6}
        maxW={["100", "100vw", "100vw", "100vw", "80vw"]}
      >
        <Text fontSize={["2.75em"]} className="font">
          What is the best resume builder?
        </Text>
        <Text fontSize="2xl" my={4} fontWeight="500" letterSpacing={2}>
          {" "}
          Over the past 7 years, we’ve been working hard to make Novorésumé the
          best resume builder out there.
        </Text>
        <Text fontSize="2xl" my={4}>
          And we’d say we succeeded! Here’s what sets us apart from the rest of
          the competition:
        </Text>
        <UnorderedList ml={8} fontSize={18}>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Easy to Use
            </span>
            <span
              style={{
                marginLeft: 3,
              }}
            >
              - Our builder is very easy to use, even if you're not too
              tech-friendly.
            </span>
          </ListItem>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Get Started in under 5 Minutes
            </span>
            <span
              style={{
                marginLeft: 3,
              }}
            >
              - Just pick one of our resume templates, and you're good to go!
            </span>
          </ListItem>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              It's 100% free
            </span>
            <span
              style={{
                marginLeft: 3,
                maxWidth: "14ch",
              }}
            >
              - Some resume builders out there pretend to be free… and then they
              hit you with a paywall once you’re done writing your resume! We
              don’t do that. Our builder will instantly notify you if you’re
              using any of our premium features.
            </span>
          </ListItem>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Cover Letter Builder
            </span>
            <span
              style={{
                marginLeft: 3,
              }}
            >
              - If you’re using Novorésumé Premium, you gain access to our cover
              letter builder for free (including matching cover letter
              templates).
            </span>
          </ListItem>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Tons of Customization and Design Options
            </span>
            <span
              style={{
                marginLeft: 3,
              }}
            >
              - Our builder offers a ton of customization. You can make changes
              to the layout, color schemes, and much more.
            </span>
          </ListItem>
          <ListItem>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              ATS-Friendly Resume Templates
            </span>
            <span
              style={{
                marginLeft: 3,
              }}
            >
              - Our resume templates are built on top of some of the most
              popular applicant tracking systems out there. Meaning, your resume
              won't automatically get rejected by any ATS.
            </span>
          </ListItem>
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
  );
};

export default ListItems;
