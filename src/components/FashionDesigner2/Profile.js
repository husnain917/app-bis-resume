import React from "react";
import { Text } from "./index";
import { useSelector } from "react-redux";
import { useWindowSize } from "@react-hook/window-size";

export default function Profile() {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          customclass={"fDesigner2"}
          path={"profile.firstName"}
          fontSize="60px"
          color="black"
        />
        &nbsp;
        <Text
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          customclass={"fDesigner2a"}
          path={"profile.lastName"}
          fontSize="30px"
          color="black"
        />
      </div>
    </>
  );
}
