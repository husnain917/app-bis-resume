import { Box, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/Auth.module.css";
export default function AuthButton({
  btn,
  bgColor,
  onChangeHandler,
  color,
}) {
  return (
    <>
      <Button
        w="100%"
        pl={["1.8rem", "4rem", "7.5rem", "2.2rem"]}
        pr={["1.8rem", "4rem", "7.5rem", "2.2rem"]}
        color={color}
        bgColor={bgColor}
        borderRadius="10px"
        _hover={{ bg: "#00C8AA", color: " white", borderRadius: "10px" }}
        _focus={{ bg: "#00C8AA", color: " white", borderRadius: "10px" }}
        onClick={() => onChangeHandler(btn.id)}
      >
        {btn.btnName}
      </Button>
    </>
  );
}
