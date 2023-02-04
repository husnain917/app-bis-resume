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
  hoverBoxShadow,
  focusBg,
  focusColor,
  width,
  height,
  borderRadius,
  fontSize,
  fontWeight,
  margin,
  hoverborderRadius,
  paddingLeft,
  paddingRight,
}) {
  return (
    <Button
      className={`button-text ${className}`}
      margin={margin}
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
      pl={paddingLeft}
      pr={paddingRight}
      _hover={{
        border: hoverBorder,
        color: hoverColor,
        transition: hoverTransition || "0.5s",
        backgroundcolor: hoverBackgroundColor || "#50bce0",
        boxShadow: hoverBoxShadow || "-1px -2px 4px 5px #8fd1e7",
        borderRadius: hoverborderRadius || "8px",
        bg: hoverBackgroundColor,
      }}
      _focus={{ bg: focusBg, color: focusColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? loading : title || "AddTitle"}
    </Button>
  );
}
