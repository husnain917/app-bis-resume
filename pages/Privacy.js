import React from "react";
import PrivacyPage from "../src/components/privacyPage/PrivacyPage";
import { Text, Box, Image } from "@chakra-ui/react";
import SideBar from "../src/components/sideBar/SideBar";
import SideBarSection from "../src/components/aboutUs/SideBarSection/SideBarSection";

const Privacy = () => {
  return (
    <div>
      {/* <SideBar /> */}
      {/* <Box
        borderRadius={["60px"]}
        width={["60px"]}
        position={["fixed"]}
        zIndex={"1049"}
        transform={["scale(1)"]}
        marginLeft={"10px"}
        display={["none", "none", "block", "block", "block"]}
      >
        <SideBarSection />
      </Box> */}
      <PrivacyPage />
    </div>
  );
};

export default Privacy;
