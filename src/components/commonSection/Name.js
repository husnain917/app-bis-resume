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
    maxWidth,
  } = props;
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
          maxWidth={maxWidth}
        />
      )}
      {SName && (
        <Text
          value={resumeData?.profile?.lastName}
          placeholder={SNamePlaceholder ? SNamePlaceholder : "Last Name"}
          customClass={`${SNameStyle}`}
          path={"profile.lastName"}
          color={fontColor ? fontColor : ""}
          maxWidth={maxWidth}
        />
      )}
    </Stack>
  );
};

export default Name;
