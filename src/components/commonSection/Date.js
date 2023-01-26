import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DateSection = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  useEffect(() => {}, [resumeData?.date?.creationDate]);
  const { font } = useSelector((state) => state.fontReducer.font);

  return (
    <>
      {resumeData?.date?.creationDate ? (
        <Stack
          display={"flex"}
          justifyContent="flex-end"
          alignItems={"flex-end"}
        >
          <Text fontFamily={font}>{resumeData?.date?.date}</Text>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
};

export default DateSection;
