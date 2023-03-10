import React from "react";
import {
  Box,
  Button,
  Circle,
  Icon,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import LayoutModal from "./LayoutModal";
import { useState } from "react";
import { MobileNavItem } from "../navbar/Navbar";
import { NAV_ITEMS } from "../constant/navbarLinks/NavbarLinks";
import Link from "next/link";
import DownloadModal from "../downloadModel/DownloadModal";

import ThemeModal from "../themeModal/ThemeModal";
import FontPopover from "../fontPopover/FontPopover";
import SideBarSection from "../aboutUs/SideBarSection/SideBarSection";
export default function ThemeSideMenu({
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  interest,
  certificate,
  downloadPDF,
  setleftMenu,
  colorLength
}) {
  return (
    <Box
      w="140px"
      bgColor="#006772"
      borderRadius={"10px"}
      justifyContent="center"
      flexDirection={"column"}
      position={"fixed"}
      top={200}
      left={"10px"}
      alignItems={"center"}
      display={{ base: "none", lg: "flex" }}
    >
      <Button
        bgColor="transparent"
        color="white"
        fontSize={{ base: "12px", sm: "14px", md: "16px" }}
        _hover={{
          backgroundColor: "transparent",

          color: "#00c8aa",
          transition: "0.4s",
        }}
        onClick={() => setleftMenu(false)}
      >
        <ArrowUpIcon mr="5px" />
        Upper
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button
            bgColor="transparent"
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            color="white"
            _hover={{
              backgroundColor: "transparent",
              color: "#00c8aa",
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
              color: "#00c8aa",
              transition: "0.4s",
            }}
          >
            <MoonIcon mr="5px" />
            Theme
          </Button>
        </PopoverTrigger>
        <ThemeModal colorLength={colorLength} />
      </Popover>
      <Box>
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
        />
      </Box>
      <DownloadModal downloadPDF={downloadPDF} />
    </Box>
  );
}
