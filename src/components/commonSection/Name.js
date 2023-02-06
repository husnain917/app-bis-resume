import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Text from "./Text";

const Name = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
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
  } = props;
  console.log("maxChr: " + maxchr, "MAXCHR", props.maxchr);
  return (
    <Stack
      direction={direction ? direction : "column"}
      className={`${parentContainerStyle ? parentContainerStyle : ""}`}
      m={margin ? margin : ""}
    >
      {FName && (
        <Text
          value={resumeData?.profile?.firstName}
          placeholder={FNamePlaceholder ? FNamePlaceholder : "First Name"}
          customClass={`${FNameStyle}`}
          path={"profile.firstName"}
          color={fontColor ? fontColor : ""}
          minWidth={props.maxWidth}
          maxWidth={props.minWidth}
          maxChr={props.maxChr}
          lineHeight={props.lineHeight}
          textAlign={textAlign}
        />
      )}
      {SName && (
        <Text
          value={resumeData?.profile?.lastName}
          placeholder={SNamePlaceholder ? SNamePlaceholder : "Last Name"}
          customClass={`${SNameStyle}`}
          path={"profile.lastName"}
          minWidth={props.maxWidth}
          maxWidth={props.minWidth}
          maxChr={props.maxChr}
          color={fontColor ? fontColor : ""}
          lineHeight={props.lineHeight}
        />
      )}
    </Stack>
  );
};

export default Name;
