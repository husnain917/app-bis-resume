import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

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
  margin,
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
  icon,
  onMouseOver,
  minWidth,
}) {
  const [currentIconColor, setCurrentIconColor] = useState("#463477");
  return (
    <Box>
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
        margin={margin}
        minWidth={minWidth}
        minH={"10px"}
        onMouseOver={onMouseOver}
        _hover={{
          // border: { hoverBorder },
          // cursor: hoverCursor || "pointer",
          color: hoverColor,
          backgroundColor: hoverBackgroundColor,
          // transition: hoverTransition || "0.5s",
          // backgroundcolor: "#50bce0",
          boxShadow: "-1px -2px 4px 5px #8fd1e7",
          borderRadius: "8px",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        <a target="_blank">{loading ? loading : icon}</a>
      </Button>
    </Box>
  );
}
