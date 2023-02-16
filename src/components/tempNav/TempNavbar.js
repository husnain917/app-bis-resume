import React from "react";
import {
  Box,
  Button,
  Circle,
  Icon,
  Image,
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
import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
  ArrowBackIcon,
  ArrowDownIcon,
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
import SettingModal from "../setting/SettingModal";
import { useDispatch, useSelector } from "react-redux";
import { doLogout, modalOpen } from "../../../store/actions/AuthAction";
import Loader from "../loader/Loader";
export default function TempNavbar({
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
  downloadWord,
  leftMenu,
  setleftMenu,
  saveDataHandler,
  colorLength,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState(false);
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const [loading, setLoading] = useState(false)
  const logoutHandler = () => {
    console.log("Caled logout functions");
    dispatch(doLogout(setLoading));
  };
  const ismodalOpen = async () => {
    dispatch(modalOpen());
  };
  return (
    <Box
      display={"flex"}
      h="auto"
      minW={{ lg: "100vw" }}
      mt={1}
      zIndex="999"
      pos={{ base: "relative", lg: "fixed" }}
      justifyContent={"center"}
    >
      <Link href={"/"}>
        <Image
          src={"https://www.linkpicture.com/q/bisResumeLogo.svg"}
          width="200px"
          height={"auto"}
          style={{
            position: "absolute",
            left: "20px",
            top: "0px",
            cursor: "pointer",
          }}
          alt="Image not Found"
        />
      </Link>
      {!leftMenu && (
        <Box
          w={['750px', '750px', '750px', '720px', '750px']}
          bgColor="#006772"
          borderRadius={"100px"}
          justifyContent="center"
          py={1}
          ml={["0px", "0px", "0px", "145px", "0px"]}
          display={{ base: "none", lg: "flex" }}
        >
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
          <Popover>
            <PopoverTrigger>
              <Button
                bgColor="transparent"
                color="white"
                fontSize={{ base: "12px", sm: "14px", md: "16px" }}
                _hover={{
                  backgroundColor: "transparent",

                  color: "#00c8aa",
                  transition: "0.4s",
                }}
                position={"relative"}
              >
                <SettingsIcon mr="5px" />
                Setting
              </Button>
            </PopoverTrigger>
            <SettingModal />
          </Popover>

          <DownloadModal
            downloadPDF={downloadPDF}
            downloadDocx={downloadWord}
          />
          <Button
            bgColor="transparent"
            color="white"
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            _hover={{
              backgroundColor: "transparent",

              color: "#00c8aa",
              transition: "0.4s",
            }}
            onClick={setleftMenu}
          >
            <ArrowBackIcon mr="5px" />
            Left
          </Button>
          <Button
            bgColor="transparent"
            color="white"
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            _hover={{
              backgroundColor: "transparent",

              color: "#00c8aa",
              transition: "0.4s",
            }}
            onClick={saveDataHandler}
          >
            <ArrowDownIcon mr="5px" />
            Save
          </Button>
        </Box>
      )}

      <Box position={"absolute"} right={{ base: "10px", lg: "25px" }}>
        <Icon
          as={HamburgerIcon}
          onClick={onOpen}
          h="30px"
          w="30px"
          cursor="pointer"
          color={"#006772"}
          mr={{ base: "0px", md: "10px", lg: "0px" }}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href={"/"}>
              <Image
                src={"https://www.linkpicture.com/q/bisResumeLogo.svg"}
                width="200px"
                height={"auto"}
                style={{
                  cursor: "pointer",
                  marginLeft: "-30px",
                  marginBottom: "30px",
                  marginTop: "30px",
                }}
                alt="Image not Found"
              />
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <Box w="full" bg="gray" h="1px" mb="10px" mt="10px"></Box>
            <Text
              fontSize={"16px"}
              _hover={{
                color: "#006772",
                transition: "all .2s  ease-in",
              }}
              onClick={!isUserLoggedIn ? ismodalOpen : logoutHandler}
              cursor="pointer"
            >
              {
                loading ?
                  <Loader size={150} color='green' /> :
                  isUserLoggedIn ?
                    'Sign Out'
                    :
                    'Login'
              }

            </Text>
            <Box display={"flex"} justifyContent="space-evenly" mt="20px">
              <Circle
                size={"35px"}
                bg={"#313C4E"}
                _hover={{
                  bg: " #002D6C",
                  transition: "background .1s ease-out",
                }}
              >
                <FaFacebookF color="#fff" size={"20px"} />
              </Circle>

              <Circle
                size={"35px"}
                bg={"#313C4E"}
                _hover={{
                  bg: "#0073b1",
                  transition: "background .1s ease-out",
                }}
              >
                <FaLinkedinIn color="#fff" size={"20px"} />
              </Circle>
              <Circle
                size={"35px"}
                bg={"#313C4E"}
                _hover={{
                  bg: "#0073b1",
                  transition: "background .1s ease-out",
                }}
              >
                <FaTwitter color="#fff" size={"20px"} />
              </Circle>
              <Circle
                size={"35px"}
                bg={"#313C4E"}
                _hover={{
                  bg: "#cf4848",
                  transition: "background .3s ease-out",
                }}
              >
                <FaInstagram color="#fff" size={"20px"} />
              </Circle>
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
