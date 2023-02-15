import { Stack, Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Text from "./Text";

const Name = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  console.log("ResumeData in name function", resumeData?.profile?.firstName);
  const {
    direction,
    FName,
    SName,
    FNameStyle,
    SNameStyle,
    FNamePlaceholder,
    SNamePlaceholder,
    parentContainerStyle,
    margin,
    fontColor,
    maxchr,
    textAlign,
    maxWidth,
  } = props;
  return (
    <Stack
      direction={direction ? direction : "column"}
      className={`${parentContainerStyle ? parentContainerStyle : ""}`}
      m={margin ? margin : ""}
    >
      {FName && (
        <Box maxWidth={props.maxCWidth}>
          <Text
            value={resumeData?.profile?.firstName}
            placeholder={FNamePlaceholder ? FNamePlaceholder : "First Name"}
            customClass={`${FNameStyle}`}
            path={"profile.firstName"}
            color={fontColor ? fontColor : ""}
            minWidth={props.minWidth}
            maxWidth={props.maxWidth}
            maxChr={props.maxChr}
            textAlign={textAlign}
            margin={props.fmargin}
          />
        </Box>
      )}
      {SName && (
        <Box maxWidth={props.maxCWidth}>
          <Text
            value={resumeData?.profile?.lastName}
            placeholder={
              resumeData?.profile?.lastName
                ? resumeData?.profile?.lastName
                : "Last Name"
            }
            customClass={`${SNameStyle}`}
            path={"profile.lastName"}
            minWidth={props.maxWidth}
            maxWidth={props.minWidth}
            maxChr={props.maxChr}
            margin={props.fmargin}
            color={fontColor ? fontColor : ""}
          />
        </Box>
      )}
    </Stack>
  );
};

export default Name;
