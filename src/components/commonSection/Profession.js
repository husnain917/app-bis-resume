import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Text from "./Text";

const Profession = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const {
    professionPlaceholder,
    professionStyle,
    containerStyle,
    margin,
    fontColor,
    maxWidth,
  } = props;

  return (
    <Box
      className={`${containerStyle ? containerStyle : ""}`}
      m={margin ? margin : ""}
    >
      <Text
        placeholder={
          resumeData?.profile?.profession
            ? resumeData?.profile?.profession
            : "Profession"
        }
        maxWidth={maxWidth}
        customClass={`${professionStyle}`}
        path={"profile.profession"}
        value={resumeData?.profile?.profession}
        color={fontColor ? fontColor : ""}
      />
    </Box>
  );
};

export default Profession;
