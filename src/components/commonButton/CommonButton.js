import React from "react";
import { Button } from "@chakra-ui/react";

export default function CommonButton({
  title,
  loading = false,
  disabled = false,
  className,
  onClick,
  color,
  rightIcon,
  leftIcon,
  backgroundColor,
  padding,
  border,
  hoverBackgroundColor,
  hoverColor,
  hoverCursor,
  hoverBorder,
  hoverTransition,
  width,
  height,
  borderRadius,
  fontSize,
  fontWeight,
}) {
  return (
    // bg="#2CACD5"
    // colorScheme="#2CACD5"
    // borderRadius="20px"
    // fontWeight="bold"
    // color="white"
    // rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
    // mt={5}
    // mb={1}
    <Button
      className={`button-text ${className}`}
      width={width}
      height={height}
      color={color}
      padding={padding || "10px 17px 10px 17px"}
      border={border || "none"}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      _hover={{
        // border: { hoverBorder },
        // cursor: hoverCursor || "pointer",
        // color: hoverColor,
        // backgroundColor: hoverBackgroundColor,
        // transition: hoverTransition || "0.5s",
        backgroundcolor: "#50bce0",
        boxShadow: "-1px -2px 4px 5px #8fd1e7",
        borderRadius: "8px",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? loading : title || "AddTitle"}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
}
