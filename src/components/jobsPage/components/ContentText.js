import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ContentText = ({
  padding,
  margin,
  className,
  textAlign,
  color,
  fontSize,
  text,
  id,
  backgroundColor,
  width,
  marginBox,
  fontWeight,
  whiteSpace,
  lineHeight,
}) => {
  return (
    <Box
      padding={padding}
      backgroundColor={backgroundColor}
      width={width}
      margin={marginBox}
    >
      {" "}
      <Text
        id={id || "text"}
        className={`${className ? className : "medium-text"}`}
        margin={margin}
        color={color}
        textAlign={textAlign || "center"}
        fontSize={fontSize}
        fontWeight={fontWeight}
        whiteSpace={whiteSpace}
        lineHeight={lineHeight}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ContentText;
