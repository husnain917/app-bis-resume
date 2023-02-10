import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
  Box,
  Text,
} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../store/actions/AuthAction";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function ProfileComponent() {
  const userData = useSelector((store) => store.AuthReducer?.userData);
  console.log('sss', userData?.photoURL)
  const [loading, setLoading] = useState(false);
  const [iconColor, setIconColor] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutHandler = () => {
    console.log("Caled logout functions");
    dispatch(doLogout(setLoading));
    router.push("/");
  };
  const handleIconColor = () => {
    console.log("COLOR FUNCTION");
    setIconColor("green");
  };
  return (
    <div>
      <Menu display={{ base: "none", md: "inline-block" }}>
        <MenuButton
          bg="transparent"
          borderRadius={"full"}
          _hover={{ bg: "transparent" }}
          width="5rem"
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              boxSize={"2.7rem"}
              borderRadius="full"
              src={userData?.photoURL || '/uploadpic1.png'}
              alt="Fluffybuns the destroyer"
            />
            <TiArrowSortedDown
              color={iconColor ? iconColor : ""}
              size={"1.8rem"}
              onClick={handleIconColor}
            />
          </Box>
        </MenuButton>
        <MenuList
          mt={4}
          p={0}
          minW="0"
          w={"160px"}
          padding={"2px"}
          _hover={{
            backgroundColor: "white",
          }}
          _after={{
            content: '" "',
            // display: "block",
            zIndex: "-1",
            top: "0.4rem",
            // opacity: "0.6",
            left: "5rem",
            position: "absolute",
            width: "2rem",
            height: "2rem",
            transform: "rotate(-45deg)",
            backgroundColor: "#FFF",
            boxShadow: "0 1px 5px 0 rgb(0 0 0 / 25%)",
          }}
        >
          <MenuItem
            zIndex={"4"}
            minH="30px"
            closeOnSelect={true}
            // borderTopColor={"transparent"}
            background={"white"}
            _hover={{
              backgroundColor: "white",
            }}
          >
            <Link href="/auth/myProfile">
              <Text
                fontSize="18px"
                fontWeight={"500"}
                // color="#00C8AA"
                _hover={{
                  color: "#00C8AA",
                }}
                letterSpacing={"1px"}
              // pt="5px"
              // pb="5px"
              >
                My Profile
              </Text>
            </Link>
          </MenuItem>
          <MenuItem
            zIndex={"4"}
            minH="30px"
            closeOnSelect={true}
            // borderTopColor={"transparent"}
            background={"white"}
            _hover={{
              backgroundColor: "white",
            }}
          >
            <Link href="/myTemplates">
              <Text
                fontSize="18px"
                fontWeight={"500"}
                // color="#00C8AA"
                _hover={{
                  color: "#00C8AA",
                }}
                letterSpacing={"1px"}
              // pt="5px"
              // pb="5px"
              >
                My Templates
              </Text>
            </Link>
          </MenuItem>
          <MenuItem
            minH="25px"
            closeOnSelect={true}
            onClick={() => logoutHandler()}
            _hover={{
              backgroundColor: "white",
            }}
          >
            <Text
              fontSize="18px"
              fontWeight={"500"}
              _hover={{
                color: "tomato",
              }}
              // pb="5px"
              // pt="5px"
              letterSpacing={"1px"}
            >
              Sign Out
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
