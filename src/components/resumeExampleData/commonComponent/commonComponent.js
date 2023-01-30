import React, { useRef, useState, useEffect } from "react";
import { Box, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import Link from "next/link";
import { useWindowSizing } from "../../../../customHooks/useWindowSizing";
import CommonButton from "../../commonButton/CommonButton";

import {
  PhoneIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const CommonComponent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const size = useWindowSizing();
  const width = size.width;

  const dataForDisplay =
    !expanded && width > 1250
      ? data.exampleData.slice(0, 4)
      : !expanded && width <= 1250 && width > 767
      ? data.exampleData.slice(0, 3)
      : !expanded && width <= 767 && width > 500
      ? data.exampleData.slice(0, 2)
      : !expanded && width <= 500
      ? data.exampleData.slice(0, 1)
      : data.exampleData;

  return (
    <Box overflow={["visible", "visible", "hidden"]} mb={10}>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "column", "row", "row"]}
        paddingBottom={"20px"}
        borderBottom={"1px solid whitesmoke"}
        justifyContent={"space-between"}
        height={["auto", "auto", "100px", "100px", "100px"]}
        marginBottom={"inherit"}
      >
        <Box display={"flex"}>
          <Box>
            <Image
              src={data.icon || "./diamond.png"}
              width={"40px"}
              height={"40px"}
              alt="will load soon..."
            />
          </Box>

          <Box
            ml="10px"
            className={"main-heading"}
            fontSize={["17px", "17px", "30px", "1.9em", "2.5em"]}
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
            <Text
              fontSize={["12px", "12px", "12px", "14px", "14px"]}
              className="xsmall-text"
              lineHeight={"20px"}
              letterSpacing={"1px"}
              color={"gray.600"}
            >
              {data.description ||
                "Our tailor-made samples and guides has all of the tools you needto easily craft a government CV in just seconds. Our samples have been field-tested and are expertly designed to set you up for success."}
            </Text>
          </Box>
        </Box>
      </Box>
      <SimpleGrid columns={[1, 1, 3, 3, 4]} spacing={10}>
        {width <= 500
          ? dataForDisplay.map((template, index) => {
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
                  <Text
                    fontSize={["1.1em", "1.3em"]}
                    className={"medium-heading"}
                  >
                    {template.label}
                  </Text>
                  <Box mt={6} border={"1px solid black"}>
                    <Link href={template.link || "/templates/templ"}>
                      <Image
                        src={template.src}
                        alt={template.alt}
                        minHeight={"300px"}
                        width={"100%"}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })
          : width <= 767
          ? dataForDisplay.map((template, index) => {
              return (
                <Box
                  key={index}
                  bg={"whitesmoke"}
                  padding={"5"}
                  borderRadius={"10"}
                  _hover={{
                    background: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  <Text
                    fontSize={["1.1em", "1.3em"]}
                    className={"medium-heading"}
                  >
                    {template.label}
                  </Text>
                  <Box mt={6} border={"1px solid black"}>
                    <Link href={template.link || "/templates/templ"}>
                      <Image
                        src={template.src}
                        alt={template.alt}
                        minHeight={"300px"}
                        width={"100%"}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })
          : width <= 1250
          ? dataForDisplay.map((template, index) => {
              return (
                <Box
                  key={index}
                  bg={"whitesmoke"}
                  padding={"5"}
                  borderRadius={"10"}
                  _hover={{
                    background: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  <Text
                    fontSize={["1.1em", "1.3em"]}
                    fontWeight={"500"}
                    className={"medium-heading"}
                  >
                    {template.label}
                  </Text>
                  <Box mt={6}>
                    <Link
                      border={"1px solid black"}
                      href={template.link || "/templates/templ"}
                    >
                      <Image
                        src={template.src}
                        alt={template.alt}
                        minHeight={"300px"}
                        width={"100%"}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })
          : dataForDisplay.map((template, index) => {
              return (
                <Box
                  key={index}
                  bg={"whitesmoke"}
                  padding={"5"}
                  borderRadius={"10"}
                  _hover={{
                    background: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  <Text
                    fontSize={["1.1em", "1.3em"]}
                    className={"medium-heading"}
                  >
                    {template.label}
                  </Text>
                  <Box mt={6} border={"1px solid black"}>
                    <Link href={template.link || "/templates/templ"}>
                      <Image
                        src={template.src}
                        alt={template.alt}
                        minHeight={"300px"}
                        width={"100%"}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })}
      </SimpleGrid>

      <Box m={4}>
        <CommonButton
          backgroundColor={"#2CACD5"}
          color={"whitesmoke"}
          borderRadius={"none"}
          height={"40px"}
          width={"150px"}
          title={expanded ? "Show Less" : "Show More"}
          onClick={() => setExpanded(!expanded)}
          mt={"8"}
        />
      </Box>
    </Box>
  );
};

export default CommonComponent;
