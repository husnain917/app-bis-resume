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
  useBreakpointValue,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logoIcon from "../../../public/bisResumeLogo.svg";
import Image from "next/image";
import {
  NAV_ITEMS,
  EnglishDropDown,
  Login_Buttons,
} from "../constant/navbarLinks/NavbarLinks";
import { useState } from "react";
import AuthModal from "../authModal/AuthModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const breakpointWidth = useBreakpointValue({
    xl: "120px",
    lg: "80px",
    md: "110px",
  });
  const breakpointfontSize = useBreakpointValue({ xl: "14px", lg: "12px" });

  //   const onClickHandler = () => {
  //     console.log("presses");
  //     if (e) {
  //       return (
  //         <>
  //           <AuthModal onOpen={onOpen} />
  //         </>
  //       );
  //     }
  //   };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"110px"}
        py={{ base: 2 }}
        mx={useBreakpointValue({ xl: "60px", lg: "30px" })}
        align={"center"}
      >
        {/* logo */}
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start" }}
          alignItems={{ base: "center" }}
        >
          <Image
            src={logoIcon}
            alt="Image Not Found"
            height={useBreakpointValue({
              xl: "90px",
              lg: "60px",
              md: "70px",
              sm: "70px",
            })}
            width={useBreakpointValue({
              xl: "230px",
              lg: "170px",
              md: "200px",
              sm: "180px",
            })}
          />

          {/* deskTop Nav */}
          <Flex
            display={{ base: "none", lg: "flex" }}
            marginTop={useBreakpointValue({ xl: "20px", lg: "12px" })}
            marginLeft={useBreakpointValue({ xl: "2rem", lg: "1.2rem" })}
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
          marginTop={useBreakpointValue({ xl: "20px", lg: "12px", md: "15px" })}
        >
          {/* English dropdown start */}
          {/* {EnglishDropDown?.map((navItem) => (
                        <Box key={navItem?.label}
                            display={{ base: 'none', lg: 'inline-flex' }}
                        >
                            <Popover trigger={'hover'} placement={'bottom-start'}>
                                <PopoverTrigger>
                                    <Link
                                        padding={'8px 0px'}
                                        minW={'110'}
                                        href={navItem?.href ?? '#'}
                                        fontSize={'14px'}
                                        fontWeight={500}
                                        display={'inline-block'}
                                        color={linkColor}
                                        border={'1px'}
                                        borderColor={'#CCC'}
                                        textAlign={'center'}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}>
                                        {navItem?.label}
                                        <Icon color={'black.400'} w={5} h={5} as={navItem.icon} />
                                    </Link>
                                </PopoverTrigger>

                                {navItem.children && (
                                    <PopoverContent
                                        border={0}
                                        boxShadow={'xl'}
                                        bg={popoverContentBgColor}
                                        p={4}
                                        rounded={'xl'}
                                        minW={'xs'}>
                                        <Stack>
                                            {navItem.children.map((child) => (
                                                <DesktopSubNav key={child.label} {...child} />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </Popover>
                        </Box>
                    ))} */}
          {/* English dropdown end */}

          {/* login buttons */}
          {Login_Buttons?.map((items) => {
            return (
              <>
                <Box
                  display={{ base: "none", md: "inline-block" }}
                  justify={{ base: "end" }}
                  style={{
                    border: "1px solid #e0e2e8",
                    boxShadow: "0 0.8rem 2.4rem 0 rgb(44 61 124 / 10%)",
                    borderRadius: "0.2rem",
                  }}
                  cursor={"pointer"}
                  width={breakpointWidth}
                  bg={
                    items?.label === "Register"
                      ? popoverContentBgColor
                      : items?.label === "Login"
                      ? "#006772"
                      : ""
                  }
                  textAlign={"center"}
                  padding={"10px 5px"}
                  textTransform={"uppercase"}
                  ml="1.5rem"
                >
                  {items?.label === "Register" ? (
                    <>
                      <Link
                        // href={items?.href ?? '#'}
                        fontWeight={650}
                        color={"#71737d"}
                        fontSize={breakpointfontSize}
                        _hover={{
                          textDecoration: "none",
                          color: linkHoverColor,
                        }}
                        onClick={() => setIsModalOpen(true)}
                      >
                        {items.label}
                      </Link>
                    </>
                  ) : items.label === "Login" ? (
                    <>
                      <Link
                        // href={items?.href ?? '#'}
                        fontWeight={650}
                        color={"#fdfffc"}
                        fontSize={breakpointfontSize}
                        _hover={{
                          textDecoration: "none",
                          color: "#fff",
                        }}
                        onClick={() => setIsModalOpen(true)}
                      >
                        {items.label}
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                  <AuthModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                </Box>
              </>
            );
          })}

          {/* login button end */}

          {/* toggle button */}
          <Flex
            flex={{ base: 1 }}
            ml={{ base: -2 }}
            display={{ base: "flex", lg: "none" }}
            justify={{ base: "end" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          {/* toogle button end */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const breakpointfontSize = useBreakpointValue({ xl: "14px", lg: "13px" });

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={useBreakpointValue({ xl: 5, lg: 3 })}
    >
      {NAV_ITEMS?.map((navItem) => {
        return (
          <Box key={navItem?.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  href={navItem?.href ?? "#"}
                  fontWeight={500}
                  color={linkColor}
                  fontSize={breakpointfontSize}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem?.label}
                  {navItem.label === "Resume" ||
                  navItem.label === "CV" ||
                  navItem.label === "Cover Letter" ? (
                    <>
                      <Icon color={"black.400"} w={5} h={5} as={navItem.icon} />
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"xs"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
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

const MobileNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {/* english dropdown */}
      {/* {EnglishDropDown.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))} */}

      {/* login buttons */}
      <Box display={"flex"} justifyContent={"space-evenly"}>
        {Login_Buttons?.map((items) => {
          return (
            <>
              <Box
                display={{ base: "inline-flex", md: "none" }}
                style={{
                  border: "1px solid #e0e2e8",
                  boxShadow: "0 0.8rem 2.4rem 0 rgb(44 61 124 / 10%)",
                  borderRadius: "0.2rem",
                  width: "110px",
                }}
                cursor={"pointer"}
                bg={
                  items?.label === "Register"
                    ? popoverContentBgColor
                    : items?.label === "Login"
                    ? "#006772"
                    : ""
                }
                justifyContent={"center"}
                padding={"10px 0px"}
                textTransform={"uppercase"}
              >
                {items?.label === "Register" ? (
                  <>
                    <Link
                      href={items?.href ?? "#"}
                      fontWeight={650}
                      color={"#71737d"}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                    >
                      {items.label}
                    </Link>
                  </>
                ) : items.label === "Login" ? (
                  <>
                    <Link
                      href={items?.href ?? "#"}
                      fontWeight={650}
                      color={"#fdfffc"}
                      _hover={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                    >
                      {items.label}
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </Box>
            </>
          );
        })}
      </Box>
      {/* login buttons end */}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const mobileNavColor = useColorModeValue("gray.600", "gray.200");
  const mobileNavBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
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
      </Collapse>
    </Stack>
  );
};
