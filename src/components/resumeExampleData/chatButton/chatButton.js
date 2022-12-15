import { Box } from "@chakra-ui/react";
import React from "react";
import { RiChat1Line } from "react-icons/ri";

const ChatButton = () => {
  return (
    <Box
      borderRadius={["60px"]}
      height={["60px"]}
      width={["60px"]}
      position={["fixed"]}
      zIndex={"1049"}
      transform={["scale(1)"]}
      background={"#2196f3"}
      right={"0"}
      bottom={"4"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      _hover={{
        cursor: "pointer",
        backgroundColor: "blue",
      }}
      _active={{
        backgroundColor: "black",
      }}
    >
      <RiChat1Line size={48} color="white" />
    </Box>
  );
};

export default ChatButton;
