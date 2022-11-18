import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function ContactButton({
  button,
  index,
  onFocunHandler,
  bgColor,
  color
}) {
  return (
    <div>
      <Button
        pt="0px"
        pb="0px"
        color={color}
        size={["sm", , "xs", "xs", "sm"]}
        ml="10px"
        borderRadius="5px"
        bgColor={bgColor}
        _hover={{ bg: "grey.500", color: " #1B6672" }}
        _focus={{ bg: "#1B6672",  color: " white" }}
        onClick={() => onFocunHandler(index)}
      >
        {button.title}
      </Button>
    </div>
  );
}
