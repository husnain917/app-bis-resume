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
  focusBg,
  focusColor,
  margin,
  width,
  height,
  borderRadius,
  fontSize,
  fontWeight,
}) {
  return (
    <Button
      className={`button-text ${className}`}
      width={width}
      height={height || "45px"}
      color={color}
      padding={padding || "10px 17px 10px 17px"}
      border={border || "none"}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius || "50px"}
      fontSize={fontSize}
      fontWeight={fontWeight}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      _hover={{
        backgroundcolor: "#50bce0",
        boxShadow: "-1px -2px 4px 5px #8fd1e7",
        borderRadius: "8px",
        bg: hoverBackgroundColor, 
        color: hoverColor,
      }}
      _focus={{ bg: focusBg, color: focusColor }}
      margin={margin}
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
