import { Stack } from "@chakra-ui/react";
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
          placeholder={
            resumeData?.profile?.firstName
              ? resumeData?.profile?.firstName
              : "First Name"
          }
          customClass={`${FNameStyle}`}
          path={"profile.firstName"}
          color={fontColor ? fontColor : ""}
          minWidth={props.maxWidth}
          maxWidth={props.minWidth}
          maxChr={props.maxChr}
        />
      )}
      {SName && (
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
          color={fontColor ? fontColor : ""}
        />
      )}
    </Stack>
  );
};

export default Name;
