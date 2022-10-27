import React from "react";
import { Button } from "@chakra-ui/react";

export default function ContactButton({ button }) {
  return (
    <div>
      <Button
        pt="0px"
        pb="0px"
        color="grey"
        size={["sm", , "xs", "xs", "sm"]}
        ml="10px"
        borderRadius="5px"
        _hover={{ bg: "grey.500", color: " #1B6672" }}
        _focus={{ bg: "#1B6672", color: " white" }}
      >
        {button.title}
      </Button>
    </div>
  );
}
