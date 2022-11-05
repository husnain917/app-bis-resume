import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function ContactButton({ button, index }) {
  const [Index, setIndex] = useState("");
  const onFocunHandler = () => {
    setIndex(index);
  };

  return (
    <div>
      <Button
        pt="0px"
        pb="0px"
        color="grey"
        size={["sm", , "xs", "xs", "sm"]}
        ml="10px"
        borderRadius="5px"
        bgColor={`${Index === index ? "#1B6672" : "none"}`}
        _hover={{ bg: "grey.500", color: " #1B6672" }}
        // _focus={{ bg: "#1B6672",  color: " white" }}
        onClick={onFocunHandler}
      >
        {button.title}
      </Button>
    </div>
  );
}
