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
export default function ProfileComponent() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutHandler = () => {
    console.log("Caled logout functions");
    dispatch(doLogout(setLoading));
    router.push("/");
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
              alt="Fluffybuns the destroyer"
            />
            <TiArrowSortedDown size={"1.8rem"} />
          </Box>
        </MenuButton>
        <MenuList
          p={0}
          minW="0"
          w={"140px"}
          padding={"6px"}
          // zIndex={"3"}
          _hover={{
            backgroundColor: "white",
          }}
          // _after={{
          //   content: '" "',
          //   display: "block",
          //   top: "-1rem",
          //   left: "6rem",
          //   position: "absolute",
          //   width: "2rem",
          //   height: "2rem",
          //   transform: "rotate(-45deg)",
          //   backgroundColor: "#FFF",
          //   boxShadow: "0 1px 5px 0 rgb(0 0 0 / 25%)",
          // }}
        >
          <MenuItem
            minH="30px"
            closeOnSelect={true}
            background={"white"}
            _hover={{
              backgroundColor: "white",
            }}
          >
            <Link href="/auth/myProfile">
              <Text
                fontSize="16px"
                fontWeight={"500"}
                // color="#00C8AA"
                _hover={{
                  color: "#00C8AA",
                }}
                // pt="5px"
                // pb="5px"
              >
                Account Page
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
              fontSize="16px"
              fontWeight={"500"}
              _hover={{
                color: "tomato",
              }}
              // pb="5px"
              // pt="5px"
            >
              Sign Out
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
