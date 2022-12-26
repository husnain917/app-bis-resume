import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const RenderData = ({ condition1, condition2 }) => {
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
      <Box mt={6}>
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
};

export default RenderData;
