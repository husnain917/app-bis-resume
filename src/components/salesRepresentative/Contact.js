import React from "react";
import { Text } from "./index";
import { useSelector } from "react-redux";
import { useWindowSize } from "@react-hook/window-size";
import { Box, Image } from "@chakra-ui/react";

export default function Contact() {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <Box className={`manager-template-row manager-template-text-center`}>
        <Box className={`manager-template-text-center`}>
          <Text
            value={resumeData?.profile?.address?.city}
            placeholder="City"
            path={"profile.address.city"}
            customclass={"manager-f-name"}
          />
          <Text
            value={resumeData?.profile?.address?.state}
            placeholder="State"
            path={"profile.address.state"}
            customclass={"manager-f-name"}
          />
          <Text
            value={resumeData?.profile?.address?.zipcode}
            placeholder="Zip"
            customclass={"manager-f-name"}
            path={"profile.address.zipcode"}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>
          <Text
            value={resumeData?.profile?.phone}
            placeholder="Phone"
            customclass={"manager-f-name"}
            path={"profile.phone"}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>

          <Text
            value={resumeData?.profile?.email}
            placeholder="Email"
            customclass={"manager-f-name"}
            path={"profile.email"}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>
          <Text
            value={resumeData?.profile?.linkedinURL}
            placeholder="LinkedIn"
            customclass={"manager-f-name"}
            path={"profile.linkedinURL"}
          />
        </Box>
      </Box>
    </>
  );
}
