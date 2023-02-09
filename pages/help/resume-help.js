import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import {
  Button,
  Container,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { TfiBook } from "react-icons/tfi";
import { RiQuestionAnswerLine } from "react-icons/ri";

import Link from "next/link";
import FaqsSection from "../../src/components/faqsComponent/FaqsSection";
import SideBar from "../../src/components/sideBar/SideBar";

export default function HelpCenter() {
  const helpLink = [
    {
      icon: (
        <>
          <RiQuestionAnswerLine
            size={60}
            style={{ padding: 5 }}
            color="#979FA9"
          />
        </>
      ),
      title: "FAQs",
      subtitle: "Tutorials, FAQs and best practices with BisResume",
      link: "/help/Faq",
    },
    {
      icon: (
        <>
          <TfiBook size={60} color="#979FA9" style={{ padding: 2 }} />
        </>
      ),
      title: "Resume Editor Help",
      subtitle:
        "Discover how you use the editor at its maximum capacity and use all the features!",
      link: "/write-resume",
    },
  ];
  return (
    <>
      <>
        <Box bgColor={"#f2f4f6"} h={["100%", "100%"]} display={"flex"}>
          <Container
            maxW={["100%", "100%", "100%", "90%", "90%"]}
            display={"flex"}
            justifyContent={"row"}
          >
            <Box
              maxW={["0%", "0%", "0%", "5%"]}
              display={["none", "none", "block", "block", "block", "block"]}
              mt="3%"
              mb="3%"
              mr="18%"
            >
              <Box>
                <SideBar />
              </Box>
            </Box>

            <Box
              maxW={"900px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              ml={"-15px"}
            >
              {helpLink.map((item) => {
                return (
                  <>
                    <Link href={item.link}>
                      <Box
                        width={["100%"]}
                        bgColor="white"
                        border="3px"
                        // mt="5%"
                        display="flex"
                        justifyContent="row"
                        mb="30px"
                        cursor="pointer"
                        py={"30px"}
                        alignItems={"center"}
                      >
                        <Box
                          width="130px"
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          {item.icon}
                        </Box>
                        <Box px={"20px"}>
                          <Text
                            fontSize="18px"
                            color="#2A6672"
                            fontWeight={"bold"}
                            className={"subTitle"}
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontSize="16"
                            color="black"
                            mt={2}
                            className={"paragraph"}
                          >
                            {item.subtitle}
                          </Text>
                        </Box>
                      </Box>
                    </Link>
                  </>
                );
              })}
            </Box>
          </Container>
        </Box>
      </>
    </>
  );
}
