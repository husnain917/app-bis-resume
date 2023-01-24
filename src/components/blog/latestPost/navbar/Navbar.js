import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CommonSocial from "../../../commonButton/CommonSocial";
import { useWindowSizing } from "../../../../../customHooks/useWindowSizing";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
// import logoIcon from "../../../public/bisResumeLogo.svg";
import Image from "next/image";
import CommonButton from "../../../commonButton/CommonButton";
import { NAV_ITEMS, Login_Buttons } from "./NavbarLinks";
import { NAV_ITEMS1, Login_Buttons1 } from "../NavbarLinks";
import { useState } from "react";
import AuthModal from "../../../authModal/AuthModal";
import { useSelector } from "react-redux";
import ProfileComponent from "./ProfileComponent";
import { useDispatch } from "react-redux";
import { modalClose, modalOpen } from "../../../../../store/actions/AuthAction";
import {
  Drawer,
  Button,
  Input,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

// import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export default function Navbar() {
  const size = useWindowSizing();
  const width = size.width;
  const { isOpen, onToggle } = useDisclosure();
  const [active, setIsActive] = useState(null);
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const modalOpenstate = useSelector((state) => state.AuthReducer.isModalOpen);
  const dispatch = useDispatch();
  const ismodalOpen = async () => {
    dispatch(modalOpen());
  };
  const ismodalClose = async () => {
    dispatch(modalClose());
  };
  const uid = useSelector((state) => state.AuthReducer.userID);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        mx={["5px", "5px", "10px", "10px", "10px"]}
        align={"center"}
      >
        {/* logo */}
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start" }}
          alignItems={{ base: "center" }}
        >
          <Link href="/#">
            <Image
              src="/Dark_Blue.svg"
              alt="Image Not Found"
              fill
              height={"50px"}
              width={"150px"}
            />
          </Link>
          {width < 1320 ? (
            <></>
          ) : (
            <>
              <Link href="/#" mt={"10px"}>
                <Image
                  src="/career-blog.png"
                  alt="Image Not Found"
                  fill
                  height={"26px"}
                  width={"130px"}
                />
              </Link>
            </>
          )}

          {/* deskTop Nav */}
          <Flex
            display={{ base: "none", lg: "flex" }}
            marginTop={{ xl: "11px", lg: "12px" }}
            marginLeft={{ xl: "2rem", lg: "1.2rem" }}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          alignItems={"center"}
          spacing={5}
          marginTop={{ xl: "10px", lg: "12px", md: "15px" }}
        >
          {/* login buttons */}
          {!isUserLoggedIn ? (
            Login_Buttons?.map((items, index) => {
              return (
                <>
                  <Box
                    key={items?.label}
                    // display={{ base: "inline-block", md: "inline-block" }}
                    justify={{ base: "end" }}
                    display={"none"}
                    style={{
                      border: "1px solid #e0e2e8",
                      boxShadow: "0 0.8rem 2.4rem 0 rgb(44 61 124 / 10%)",
                      borderRadius: "0.2rem",
                    }}
                    onClick={
                      items.label === "Register"
                        ? () => {
                            setIsActive(0);
                            localStorage.setItem("active", 0);
                            ismodalOpen();
                          }
                        : items.label === "Login"
                        ? () => {
                            setIsActive(1);
                            localStorage.setItem("active", 1);
                            ismodalOpen();
                          }
                        : ""
                    }
                    cursor={"pointer"}
                    width={{
                      xl: "120px",
                      lg: "80px",
                      md: "110px",
                    }}
                    bg={
                      items?.label === "Register"
                        ? "#006772"
                        : items?.label === "Login"
                        ? "#006772"
                        : ""
                    }
                    textAlign={"center"}
                    padding={"10px 5px"}
                    textTransform={"uppercase"}
                    ml="1.5rem"
                    _hover={{
                      textDecoration: "none",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    {items?.label === "Register" ? (
                      <>
                        <Link
                          // href={items?.href ?? '#'}
                          key={items.label}
                          fontWeight={650}
                          color={"#fdfffc"}
                          fontSize={{ xl: "14px", lg: "12px" }}
                          _hover={{
                            textDecoration: "none",
                            color: "#fff",
                          }}
                          onClick={() => {
                            setIsActive(0);
                            localStorage.setItem("active", 0);
                            ismodalOpen();
                          }}
                        >
                          {items.label}
                        </Link>
                      </>
                    ) : items.label === "Login" ? (
                      <>
                        <Link
                          // href={items?.href ?? '#'}
                          key={items.label}
                          fontWeight={650}
                          color={"#fdfffc"}
                          fontSize={{ xl: "14px", lg: "12px" }}
                          _hover={{
                            textDecoration: "none",
                            color: "#fff",
                          }}
                          onClick={() => {
                            setIsActive(1);
                            localStorage.setItem("active", 1);
                            ismodalOpen();
                          }}
                        >
                          {items.label}
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                    <AuthModal
                      ismodalClose={ismodalClose}
                      isModalOpen={modalOpenstate}
                      setIsModalOpen={ismodalOpen}
                      setIsActive={setIsActive}
                    />
                  </Box>
                </>
              );
            })
          ) : (
            <ProfileComponent />
          )}

          {/* login button end */}

          {/* toggle button */}
          {/* <Flex
            flex={{ base: 1 }}
            ml={{ base: -2 }}
            display={{ base: "flex" }}
            justify={{ base: "end" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={5} h={5} />
                ) : (
                  <HamburgerIcon w={10} h={10} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex> */}

          {/* <RightBar ismodalOpen={modalOpenstate} setIsModalOpen={ismodalOpen} /> */}

          {/* toogle button end */}
        </Stack>
        <Box marginTop={["10px", "10px", "10px", "15px", "10px"]}>
          <RightBar ismodalOpen={modalOpenstate} setIsModalOpen={ismodalOpen} />
        </Box>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity display={"flex"}>
        <MobileNav 
        ismodalOpen={modalOpenstate} setIsModalOpen={ismodalOpen}
         />
      </Collapse> */}
      {/* <RightBar /> */}
    </Box>
  );
}

const DesktopNav = () => {
  const size = useWindowSizing();
  const width = size.width;
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const fontSize = isUserLoggedIn ? "12.5px" : "14px";
  const fontSizes = isUserLoggedIn ? ["14px", "16px"] : ["15px", "17px"];
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={{ xl: 2, lg: 2 }}>
      {NAV_ITEMS?.map((navItem) => {
        return (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger position={"absolute"}>
                {width < 1200 ? (
                  <>
                    <Link
                      href={navItem?.href ?? "#"}
                      fontWeight={500}
                      key={navItem.label}
                      color={linkColor}
                      // border={"1px solid black"}
                      fontSize={fontSize}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                      className="afterlink"
                    >
                      {navItem?.label}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href={navItem?.href ?? "#"}
                      fontWeight={500}
                      key={navItem.label}
                      color={linkColor}
                      // border={"1px solid black"}

                      fontSize={fontSizes}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                      className="afterlink"
                    >
                      {navItem?.label}
                    </Link>
                  </>
                )}
              </PopoverTrigger>
            </Popover>
          </Box>
        );
      })}
      {/* <MobileNav /> */}
      {/* <MobileNavItem /> */}
      {/* <Text>Drop Down</Text> */}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"sm"}
      _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "teal.900" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} _groupHover={{ color: "teal.700" }}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"teal.900"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ setIsModalOpen, ismodalOpen }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      position={"absolute"}
      display={"flex"}
      justifyContent={"flex-end"}
      zIndex={"999"}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {/* login buttons */}
      <Box display={"flex"} justifyContent={"space-evenly"}>
        {Login_Buttons?.map((items, index) => {
          return (
            <>
              <Box
                key={items.label}
                display={{ base: "inline-flex" }}
                style={{
                  border: "1px solid #e0e2e8",
                  boxShadow: "0 0.8rem 2.4rem 0 rgb(44 61 124 / 10%)",
                  borderRadius: "0.2rem",
                  width: "110px",
                }}
                cursor={"pointer"}
                bg={
                  items?.label === "Register"
                    ? "#006772"
                    : items?.label === "Login"
                    ? "#006772"
                    : ""
                }
                justifyContent={"center"}
                padding={"10px 0px"}
                textTransform={"uppercase"}
                _hover={{
                  textDecoration: "none",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                {items?.label === "Register" ? (
                  <>
                    <Link
                      // href={items?.href ?? "#"}
                      fontWeight={650}
                      key={items.label}
                      color={"#fdfffc"}
                      _hover={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                      onClick={() => setIsModalOpen()}
                    >
                      {items.label}
                    </Link>
                  </>
                ) : items.label === "Login" ? (
                  <>
                    <Link
                      // href={items?.href ?? "#"}
                      fontWeight={650}
                      color={"#fdfffc"}
                      key={items.label}
                      _hover={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                      onClick={() => setIsModalOpen()}
                    >
                      {items.label}
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                <AuthModal
                  isModalOpen={ismodalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </Box>
            </>
          );
        })}
      </Box>
      {/* login buttons end */}
    </Stack>
  );
};

export const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const mobileNavColor = useColorModeValue("gray.600", "gray.200");
  const mobileNavBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack
      spacing={4}
      onClick={children && onToggle}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      {label === "About" ? (
        <>
          <Divider />
          <Flex
            fontSize={"14px"}
            as={Link}
            direction={"column"}
            href={href ?? "#"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} margin={"20px 0px"} color={mobileNavColor}>
              {label}
            </Text>
            <Flex direction={"row"} mt={14}>
              <Link href="https://web.facebook.com/login/?_rdc=1&_rdr">
                <CommonSocial
                  hoverCursor={"pointer"}
                  backgroundColor={"#006772"}
                  borderRadius={"50%"}
                  color={"whitesmoke"}
                  margin={"0"}
                  padding={"0"}
                  hoverBorder={"1px solid black"}
                  // className={"hoverEffects"}
                  icon={
                    <FaFacebookF
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"1.1rem"}
                    />
                  }
                />
              </Link>
              <Link href="https://www.linkedin.com/home">
                <CommonSocial
                  hoverCursor={"pointer"}
                  backgroundColor={"#006772"}
                  borderRadius={"50%"}
                  color={"whitesmoke"}
                  margin={"0px 20px 0px 20px"}
                  padding={"0"}
                  hoverBorder={"1px solid black"}
                  icon={
                    <FaLinkedinIn
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"1.1rem"}
                    />
                  }
                />
              </Link>
              <Link href="https://twitter.com/login">
                <CommonSocial
                  hoverCursor={"pointer"}
                  backgroundColor={"#006772"}
                  borderRadius={"50%"}
                  color={"whitesmoke"}
                  margin={"0px 20px 0px 0px"}
                  padding={"0"}
                  hoverBorder={"1px solid black"}
                  // className={"hoverEffects"}
                  icon={
                    <FaTwitter
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"1.1rem"}
                    />
                  }
                />
              </Link>
              <Link href="https://www.instagram.com/accounts/login/">
                <CommonSocial
                  hoverCursor={"pointer"}
                  backgroundColor={"#006772"}
                  borderRadius={"50%"}
                  color={"whitesmoke"}
                  margin={"0"}
                  padding={"0"}
                  hoverBorder={"1px solid black"}
                  // className={"hoverEffects"}
                  icon={
                    <FaInstagram
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"1.1rem"}
                    />
                  }
                />
              </Link>
            </Flex>
            <Flex
              mt={6}
              fontSize={"14px"}
              as={Link}
              href={
                "mailto://?subject=I%20think%20you%27d%20be%20interested%20in%20this%3A%20Add%20a%20return%20email%20(mailto%3A)%20link%20in%20a%20message&body=Add%20a%20return%20email%20(mailto%3A)%20link%20in%20a%20message%20https%3A%2F%2Fsupport.microsoft.com%2Fen-us%2Foffice%2Fadd-a-return-email-mailto-link-in-a-message-86cea017-8f4e-4f20-85aa-0683779ccb0a"
              }
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text>contact@bisresume.com</Text>
            </Flex>
            <Flex
              mt={6}
              fontSize={"14px"}
              as={Link}
              href={
                "mailto://?subject=I%20think%20you%27d%20be%20interested%20in%20this%3A%20Add%20a%20return%20email%20(mailto%3A)%20link%20in%20a%20message&body=Add%20a%20return%20email%20(mailto%3A)%20link%20in%20a%20message%20https%3A%2F%2Fsupport.microsoft.com%2Fen-us%2Foffice%2Fadd-a-return-email-mailto-link-in-a-message-86cea017-8f4e-4f20-85aa-0683779ccb0a"
              }
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text>Help Center</Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            py={2}
            as={Link}
            margin={"2px 0px"}
            href={href ?? "#"}
            justify={"flex-start"}
            align={"center"}
            width={"-moz-fit-content"}
            _hover={{
              textDecoration: "none",
              color: "red",
            }}
            fontSize={"14px"}
          >
            <Text fontWeight={600} color={mobileNavColor}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : "#006772"}
                color={isOpen ? "#006772" : "#006772"}
                w={6}
                h={6}
                ml={"20px"}
              />
            )}
          </Flex>

          <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
          >
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={"solid"}
              borderColor={mobileNavBorder}
              align={"start"}
            >
              {children &&
                children.map((child) => (
                  <Link
                    key={child.label}
                    py={2}
                    href={child.href}
                    width={"100%"}
                    pl={4}
                    _hover={{
                      color: "#006772",
                      bg: "teal.50",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </>
      )}
      {/* <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        
        <Text fontWeight={600} color={mobileNavColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : "#006772"}
            color={isOpen ? "#006772" : "#006772"}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={mobileNavBorder}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                width={"100%"}
                pl={4}
                _hover={{
                  color: "#006772",
                  bg: "teal.50",
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse> */}
    </Stack>
  );
};

function RightBar({ setIsModalOpen, ismodalOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open */}
      <Box>
        <HamburgerIcon
          w={16}
          h={10}
          onClick={onOpen}
          _hover={{
            cursor: "pointer",
          }}
        />
      </Box>
      {/* </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody mt={10}>
            {/* <Input placeholder="Type here..." /> */}
            {/* <CommonButton /> */}
            {Login_Buttons?.map((items, index) => {
              return (
                <>
                  <Box
                    key={items.label}
                    // display={{ base: "inline-flex" }}
                    // style={{
                    //   border: "1px solid #e0e2e8",
                    //   boxShadow: "0 0.8rem 2.4rem 0 rgb(44 61 124 / 10%)",
                    //   borderRadius: "0.2rem",
                    //   width: "110px",
                    // }}
                    // cursor={"pointer"}
                    // bg={
                    //   items?.label === "Register"
                    //     ? "#006772"
                    //     : items?.label === "Login"
                    //     ? "#006772"
                    //     : ""
                    // }
                    // justifyContent={"center"}
                    // padding={"10px 0px"}
                    // textTransform={"uppercase"}
                    // _hover={{
                    //   textDecoration: "none",
                    //   backgroundColor: "red",
                    //   color: "white",
                    // }}
                    display={"flex"}
                  >
                    {items?.label === "Register" ? (
                      <>
                        {/* <Link
                          // href={items?.href ?? "#"}
                          fontWeight={650}
                          key={items.label}
                          color={"#fdfffc"}
                          _hover={{
                            textDecoration: "none",
                            color: "#fff",
                          }}
                          onClick={() => setIsModalOpen()}
                        >
                          {items.label}
                        </Link> */}
                        <CommonButton
                          width={"255px"}
                          margin={"10px 0px"}
                          fontWeight={650}
                          key={items.label}
                          color={"#fdfffc"}
                          title={items.label}
                          onClick={() => setIsModalOpen()}
                          backgroundColor={"#006772"}
                        />
                      </>
                    ) : items.label === "Login" ? (
                      <>
                        <Box>
                          {/* <Link
                          // href={items?.href ?? "#"}
                          fontWeight={650}
                          color={"#fdfffc"}
                          key={items.label}
                          _hover={{
                            textDecoration: "none",
                            color: "#fff",
                          }}
                          onClick={() => setIsModalOpen()}
                        >
                          {items.label}
                        </Link> */}

                          <CommonButton
                            margin={"10px 0px"}
                            width={"250px"}
                            fontWeight={650}
                            key={items.label}
                            color={"#fdfffc"}
                            title={items.label}
                            onClick={() => setIsModalOpen()}
                            backgroundColor={"#006772"}
                          />
                          <Divider size={10} />
                        </Box>
                      </>
                    ) : (
                      <></>
                    )}
                  </Box>
                </>
              );
            })}
            {NAV_ITEMS1.map((navItem, index) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <AuthModal
              isModalOpen={ismodalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
