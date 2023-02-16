import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { Box, Button, Text, Popover, PopoverTrigger } from "@chakra-ui/react";
import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import FontPopover from "../fontPopover/FontPopover";
import LayoutModal from "../tempNav/LayoutModal";
import ThemeModal from "../themeModal/ThemeModal";
import DownloadModal from "../downloadModel/DownloadModal";

const ChangeTempBtn = ({
  onPress,
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  interest,
  certificate,
  achievements,
  downloadPDF,
  colorLength,
}) => {
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "96px", lg: "96px" }}
      mb={"40px"}
      left={"40px"}
      zIndex="999"
      cursor={"pointer"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Box
        onClick={onPress}
        bg={"#006772"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        color={"#fff"}
        p={"12px 8px"}
        borderRadius={6}
        _hover={{
          color: "#00c8aa",
          transition: "0.5s color",
        }}
        width={"fit-content"}
      >
        <Text mb={"5px"}>
          <BsArrowLeftRight size={18} />
        </Text>
        <Text fontSize={"10px"} fontWeight={600}>
          Switch <br />
          Template
        </Text>
      </Box>
      <Box
        maxWidth="650px"
        display={{ base: "flex", lg: "none" }}
        bgColor="#006772"
        flexWrap={"wrap"}
        borderRadius={"10px"}
        justifyContent="center"
        alignItems={"center"}
        py={1}
        ml={{ base: "15px" }}
        mr={{ base: "20px" }}
      >
        <Popover>
          <PopoverTrigger>
            <Button
              bgColor="transparent"
              fontSize={{ base: "12px", sm: "14px", md: "16px" }}
              color="white"
              _hover={{
                backgroundColor: "transparent",
                color: "#313C4E",
                transition: "0.4s",
              }}
            >
              <EditIcon mr="5px" />
              Fonts
            </Button>
          </PopoverTrigger>
          <FontPopover />
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button
              bgColor="transparent"
              fontSize={{ base: "12px", sm: "14px", md: "16px" }}
              color="white"
              _hover={{
                backgroundColor: "transparent",

                color: "#313C4E",
                transition: "0.4s",
              }}
            >
              <MoonIcon mr="5px" />
              Theme
            </Button>
          </PopoverTrigger>
          <ThemeModal colorLength={colorLength} />
        </Popover>
        <LayoutModal
          work={work}
          education={education}
          references={references}
          skills={skills}
          languages={languages}
          projects={projects}
          organization={organization}
          interest={interest}
          certificate={certificate}
          achievements={achievements}
        />
        <DownloadModal downloadPDF={downloadPDF} />
      </Box>
    </Box>
  );
};

export default ChangeTempBtn;
