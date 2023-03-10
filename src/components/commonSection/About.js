import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Text from "./Text";

const About = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const {
    aboutPlaceholder,
    aboutStyle,
    fontColor,
    fontSize,
    fontWeight,
    textAlign,
    maxW,
    minW,
    margin,
    maxwidth,
    minWidth,
    minHeight,
  } = props;
  return (
    <Box
      maxW={maxW ? maxW : ""}
      minW={minW ? minW : ""}
      margin={margin ? margin : ""}
      minHeight={minHeight ? minHeight : ""}
    >
      <Text
        placeholder={
          aboutPlaceholder
            ? aboutPlaceholder
            : "Short and Engaging pitch about yourself"
        }
        customClass={` ${aboutStyle}`}
        value={resumeData?.objective?.body}
        path="objective.body"
        color={fontColor ? fontColor : "#000"}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        maxWidth={maxwidth}
        minWidth={minWidth}
      />
    </Box>
  );
};

export default About;
