import React from "react";
import CommonSocial from "../commonButton/CommonSocial";
import styles from "../../../styles/footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";

export default function SocialIcons({ count }) {
  return (
    <Box display={"flex"}>
      <Link href="https://web.facebook.com/login/?_rdc=1&_rdr">
        <CommonSocial
          hoverCursor={"pointer"}
          backgroundColor={"#313B47"}
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
      <Flex
        backgroundColor={"gray.200"}
        align={"center"}
        width={"40px"}
        justify={"center"}
        fontWeight={"600"}
        fontSize={"16px"}
        height={"25px"}
        mt={"8px"}
      >
        {count || "12"}
      </Flex>
      <Link href="https://www.linkedin.com/home">
        <CommonSocial
          hoverCursor={"pointer"}
          backgroundColor={"#313B47"}
          borderRadius={"50%"}
          color={"whitesmoke"}
          margin={"0px 0px 0px 20px"}
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
      <Flex
        backgroundColor={"gray.200"}
        align={"center"}
        width={"40px"}
        justify={"center"}
        fontWeight={"600"}
        fontSize={"16px"}
        height={"25px"}
        mt={"8px"}
      >
        {count || "12"}
      </Flex>
      <Link href="https://twitter.com/login">
        <CommonSocial
          hoverCursor={"pointer"}
          backgroundColor={"#313B47"}
          borderRadius={"50%"}
          color={"whitesmoke"}
          //   margin={"0px 20px 0px 0px"}
          margin={"0px 0px 0px 20px"}
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
      <Flex
        backgroundColor={"gray.200"}
        align={"center"}
        width={"40px"}
        justify={"center"}
        fontWeight={"600"}
        fontSize={"16px"}
        height={"25px"}
        mt={"8px"}
      >
        {count || "12"}
      </Flex>
      <Link href="https://www.instagram.com/accounts/login/">
        <CommonSocial
          hoverCursor={"pointer"}
          backgroundColor={"#313B47"}
          borderRadius={"50%"}
          color={"whitesmoke"}
          margin={"0 0 0 20px"}
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
      <Flex
        backgroundColor={"gray.200"}
        align={"center"}
        width={"40px"}
        justify={"center"}
        fontWeight={"600"}
        fontSize={"16px"}
        height={"25px"}
        mt={"8px"}
      >
        {count || "12"}
      </Flex>
    </Box>
  );
}
