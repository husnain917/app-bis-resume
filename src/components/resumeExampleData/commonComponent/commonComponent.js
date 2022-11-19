import React, { useRef, useState } from "react";
import { Box, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import Link from "next/link";

import {
  PhoneIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const CommonComponent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  // console.log("DATAAA", data);

  const imagesArr = [
    {
      label: "Education",
      src: "https://source.unsplash.com/random/300x500",
      alt: "random from unsplash",
    },
    {
      label: "Education1",
      src: "https://source.unsplash.com/random/300x500",
      alt: "random from unsplash",
    },
    {
      label: "Education2",
      src: "https://source.unsplash.com/random/300x500",
      alt: "random from unsplash",
    },
    {
      label: "Education3",
      src: "https://source.unsplash.com/random/300x500",
      alt: "random from unsplash",
    },
    {
      label: "Education4",
      src: "https://source.unsplash.com/random/300x500",
      alt: "random from unsplash",
    },
  ];
  const dataForDisplay = expanded
    ? data.exampleData
    : data.exampleData.slice(0, 4);
  return (
    <Box overflow={["visible", "visible", "hidden"]} mb={10}>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "column", "row", "row"]}
        paddingBottom={"20px"}
        borderBottom={"1px solid whitesmoke"}
        marginBottom={"24px"}
        justifyContent={"space-between"}
        height={"100px"}
      >
        <Box display={"flex"}>
          <Box>
            <Image src={data.icon || "./diamond.png"} h="3.5em" />
          </Box>

          <Box
            ml="10px"
            fontSize="2.5em"
            fontWeight={"400"}
            transition={"color .15s"}
            display={"flex"}
          >
            {data.title || "Add Header"}
            <Badge
              ml="3"
              fontSize="0.4em"
              colorScheme="green"
              borderRadius={"50%"}
              height={"30px"}
              width={"30px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text>{data.exampleData.length}</Text>
            </Badge>
          </Box>
        </Box>
        <Box display={["none", "none", "flex", "flex", "flex"]}>
          {" "}
          <Box h={12} w={"40em"}>
            <Text>
              {data.description ||
                "Our tailor-made samples and guides has all of the tools you needto easily craft a government CV in just minutes. Our samples have been field-tested and are expertly designed to set you up for success."}
            </Text>
          </Box>
        </Box>
      </Box>
      <SimpleGrid columns={[2, null, 4]} spacing={10}>
        {dataForDisplay.map((template, index) => {
          // console.log("TEMPLETE", template);
          return (
            <Box
              key={index}
              bg={"whitesmoke"}
              // h={["auto", "auto", "200px", "200px", "200px"]}
              padding={"5"}
              borderRadius={"10"}
              _hover={{
                background: "white",
                cursor: "pointer",
              }}
              onClick={() => {}}
            >
              <Text fontSize={["1.1em", "1.3em"]} fontWeight={"500"}>
                {template.label}
              </Text>
              <Box mt={2}>
                <Link href={template.link || "/templates/templ"}>
                  <Image
                    src={template.src}
                    alt={template.alt}
                    height={"300px"}
                  />
                </Link>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
      <Button type="button" onClick={() => setExpanded(!expanded)} mt={"8"}>
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

export default CommonComponent;
