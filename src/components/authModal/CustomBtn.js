import { Button } from "@chakra-ui/react";
import React from "react";

export default function CustomBtn({ title, color, bgColor, mt }) {
  return (
    <div>
      <Button
        w="85%"
        ml="8%"
        borderRadius="100px"
        mt={mt}
        color={color}
        bgColor={bgColor}
      >
        {title}
      </Button>
    </div>
  );
}
