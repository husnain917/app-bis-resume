import React from "react";
import { Button } from "@chakra-ui/react";

export default function CommonButton(props) {
  const {
    title,
    loading = false,
    disabled = false,
    className,
    onClick,
    color,
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
  } = props;
  return (
    <Button
      className={`button-text ${className}`}
      width={width}
      height={height}
      color={color || "white"}
      padding={padding || "10px 17px 10px 17px"}
      border={border || "none"}
      backgroundColor={backgroundColor || "#00C8AA"}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      _hover={{
        border: { hoverBorder },
        cursor: hoverCursor || "pointer",
        color: hoverColor,
        backgroundColor: hoverBackgroundColor,
        transition: hoverTransition || "0.5s",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? loading : title || AddTitle}
    </Button>
  );
}
