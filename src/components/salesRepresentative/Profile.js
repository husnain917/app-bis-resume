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
        }}
      >
        <Text
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          path={"profile.firstName"}
          fontSize="60px"
          color="black"
        />
        <Text
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          path={"profile.lastName"}
          fontSize="60px"
          color="black"
          marginLeft="2px"
        />
      </div>
    </>
  );
}
