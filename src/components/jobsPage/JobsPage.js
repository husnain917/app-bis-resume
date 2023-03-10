import React from "react";
import {
  Box,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import CommonButton from "../commonButton/CommonButton";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection";
import ForthSection from "./forthSection/ForthSection";
import FifthSection from "./fifthSection/FifthSection";
import SixthSection from "./sixthSection/SixthSection";
import ContentText from "./components/ContentText";
import Sidebar from "../blog/Sidebar";
import Link from "next/link";
import Footer from "../footer/Footer";
import styles from "../../../styles/resumeFormats.module.css";
import {
  thirdContent,
  seventhContent,
  fifthContent,
  eighthContent,
  ninthContent,
  tenthContent,
  lastContent,
} from "./data";
import { MdDone } from "react-icons/md";
import Navbar from "../blog/latestPost/navbar/Navbar";

const JobsPage = () => {
  const handleButton = () => {};
  return (
    <>
      {/* <Navbar /> */}

      <Box w={"100%"}>
        <Box bg={"white"} paddingY={"10px 10px 0px 10px"}>
          <Box
            bg={"#FFD67B"}
            display={"flex"}
            flexDirection={["column", "column", "row", "row", "row"]}
            padding={"20px 10px 0px 10px"}
          >
            <Box
              w={["100%", "100%", "50%", "50%", "50%"]}
              padding={[
                "0px 0px 0px 0px",
                "60px 0px 60px 20px",
                "60px 0px 60px 20px",
                "60px 0px 60px 20px",
                "60px 0px 60px 40px",
              ]}
            >
              <Box
                id="HeadingLeftSide"
                display={"flex"}
                flexDirection={["column"]}
                // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
                alignItems={"flex-end"}
                padding={[
                  "0px 10px 0px 10px",
                  "0px 10px 0px 10px",
                  "0px 10px 0px 10px",
                  "0px 10px 0px 10px",
                  "0px 20px 0px 60px",
                ]}
              >
                <Box
                  display={["flex", "flex"]}
                  className={"only-font-family"}
                  lineHeight={"15rem"}
                  justifyContent="center"
                  alignItems={"center"}
                  m={"0px 10px 0px 0px"}
                ></Box>
                <Box mt={"-50px"}>
                  <Image
                    src={"./jobsPage/topimage1.png"}
                    height={"-webkit-fit-content"}
                    alt="will load soon"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              w={["100%", "100%", "50%", "50%", "50%"]}
              padding={[
                "40px 19px",
                "40px 19px",
                "40px 19px",
                "40px 19px",
                "40px 30px",
              ]}
            >
              <Box
                id="HeadingRightSide"
                display={"flex"}
                flexDirection="column"
                alignItems={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                  "flex-start",
                ]}
                // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
                padding={[
                  "0px 0px 0px 0px",
                  "0px 0px 0px 0px",
                  "0px 0px 0px 0px",
                  "0px 0px 0px 20px",
                  "0px 30px 0px 20px",
                ]}
              >
                <Text
                  className={"sub-heading"}
                  fontSize={["2rem", "2rem", "2rem", "3rem", "3.3rem"]}
                  color={"black"}
                  textAlign={["center", "start", "start", "start", "start"]}
                  lineHeight={["60px", "60px", "35px", "60px", "65px"]}
                >
                  {" "}
                  Job Search Masterclass
                </Text>
                <Text
                  className={"medium-heading"}
                  fontSize={["18px", "18px", "18px", "23px", "23px"]}
                  color={"black"}
                  mt={["1%", "1%", "3%", "-2%", "-2%"]}
                >
                  An E-book by Bisresume
                </Text>
                <Text
                  className={"medium-text"}
                  mt={"20px"}
                  fontSize={["16px", "16px", "16px", "20px", "20px"]}
                  color={"black"}
                  textAlign={["center", "start", "start", "start", "start"]}
                  lineHeight={["22px", "22px", "22px", "31px", "31px"]}
                >
                  The only book about the job search process that you???ll ever
                  need. Learn how to create an impeccable resume, match it with
                  a convincing cover letter, and ace the job interview.
                </Text>
                <Text
                  className={"sub-heading"}
                  mt={[2, 2, 2, 6, 6]}
                  color={"black"}
                  fontSize={["18px", "18px", "18px", "22px", "22px"]}
                  fontWeight={800}
                >
                  Digital Download: PDF
                </Text>

                <Box
                  height={"2px"}
                  backgroundColor={"black"}
                  mt={[1, 1, 1, 1, 4]}
                  width={["95%", "25%", "25%", "25%", "25%"]}
                ></Box>

                <Link href="/templates">
                  <CommonButton
                    className={"medium-text"}
                    width={["12rem", "12rem", "12rem", "14rem", "14rem"]}
                    height={["3.4rem", "3.8rem", "3.8rem", "3.8rem", "3.8rem"]}
                    title={"Download Sample"}
                    backgroundColor={"white"}
                    fontSize={["16px", "16px", "17px", "20px", "20px"]}
                    margin={"1.5rem 0rem 0rem 0rem"}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            // marginTop={"-125px"}
            width={"auto"}
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/622af6c5cff01d7236bfdcf8/0fc7177e-3370-426c-986f-29f9911bcf96/yellow-wave-gbg-bottom.png?format=2500w"
              alt={"please wait"}
              mt={-1}
            />
          </Box>
        </Box>
        <SecondSection />
        <ThirdSection />
        {/* <ForthSection /> */}
        <FifthSection />
        {/* <SixthSection /> */}
        <Box>
          <Box
            display={"flex"}
            flexDirection={["column", "column", "row", "row", "row"]}
            bg={"#FAFAFA"}
            padding={[
              "2% 15px 0% 15px",
              "2% 15px 0% 15px",
              "2% 35px 0% 35px",
              "2% 35px 0% 35px",
              "2% 35px 0% 35px",
            ]}
          >
            <Box
              w={["100%", "100%", "50%", "50%", "50%"]}
              padding={[
                "2% 25px 4% 25px",
                "1% 25px 4% 25px",
                "8% 35px 4% 35px",
                "% 35px 4% 0px",
                "2% 35px 4% 35px",
              ]}
            >
              {seventhContent.map((item, index) => {
                return (
                  <>
                    {item?.listItems?.map((item, index) => {
                      return (
                        <>
                          {item.id == "images" ? (
                            <>
                              {" "}
                              <Image src={item.imageUrl} alt="will load soon" />
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Box>
            <Box
              w={["100%", "100%", "50%", "50%", "50%"]}
              padding={[
                "5px 20px",
                "5px 20px",
                "5px 20px",
                "5px 20px",
                "0px 65px",
              ]}
            >
              {seventhContent.map((item, index) => {
                return (
                  <>
                    <ContentText
                      id={item.id}
                      text={item.text}
                      className={item.className}
                      fontSize={item.fontSize}
                      margin={item.margin}
                      textAlign={item.textAlign}
                      backgroundColor={item.backgroundColor}
                      width={item.width}
                      marginBox={item.marginBox}
                      fontWeight={item.fontWeight}
                      color={item.color}
                      lineHeight={item.lineHeight}
                    />
                    {item.id === "Heading" ? (
                      <Box
                        height={"2px"}
                        backgroundColor={"black"}
                        width={"25%"}
                      ></Box>
                    ) : (
                      ""
                    )}
                    {item?.listItems?.map((item, index) => {
                      return (
                        <>
                          {item.id === "List" ? (
                            <List
                              className={item.className}
                              fontSize={item.fontSize}
                            >
                              <ListItem display={"flex"} mb={2}>
                                <Box mr={1} color={"#00C8AA"} fontWeight={600}>
                                  ???
                                </Box>
                                <ContentText
                                  id={item.id}
                                  text={item.text}
                                  className={item.className}
                                  fontSize={item.fontSize}
                                  margin={item.margin}
                                  textAlign={item.textAlign}
                                  backgroundColor={item.backgroundColor}
                                  width={item.width}
                                  marginBox={item.marginBox}
                                  fontWeight={item.fontWeight}
                                  color={item.color}
                                  lineHeight={item.lineHeight}
                                />
                              </ListItem>
                            </List>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box id={"border-section"} bg={"#FFD67B"}>
          <Box>
            <Image src="yellow-wave.png" alt="will load soon" />
          </Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            width={"85%"}
            margin={"0 auto"}
          >
            {eighthContent?.map((item, index) => {
              return (
                <>
                  <GridItem
                    colSpan={3}
                    width={["100%", "100%", "85%", "90%", "95%"]}
                    margin={"0 auto"}
                  >
                    <ContentText
                      id={item?.id}
                      text={item?.text}
                      className={item?.className}
                      fontSize={item?.fontSize}
                      margin={item?.margin}
                      textAlign={item.textAlign}
                      backgroundColor={item?.backgroundColor}
                      width={item?.width}
                      lineHeight={item?.lineHeight}
                      color={item?.color}
                    />
                  </GridItem>

                  {item?.Content?.map((item, index) => {
                    return <></>;
                  })}
                </>
              );
            })}
          </Grid>
          <Box>
            <Box
              id="HeadingRightSide"
              display={"flex"}
              flexDirection={["column"]}
              alignItems={"center"}
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              padding={[
                "0px 30px 0px 30px",
                "0px 30px 0px 30px",
                "0px 30px 0px 30px",
                "0px 30px 0px 30px",
                "0px 30px 0px 30px",
              ]}
            >
              <Box
                height={"2px"}
                backgroundColor={"black"}
                // mt={4}
                width={"25%"}
              ></Box>
              <Link href="/blog">
                <CommonButton
                  className={"medium-text"}
                  width={"16rem"}
                  height={"3.5rem"}
                  title={"More About Job Searching"}
                  backgroundColor={"#E6E6E6"}
                  fontSize={["17px", "17px", "17px", "18px", "18px"]}
                  margin={"1.5rem 0rem 0rem 0rem"}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          // marginTop={"-125px"}
          height={"auto"}
          width={"auto"}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/622af6c5cff01d7236bfdcf8/0fc7177e-3370-426c-986f-29f9911bcf96/yellow-wave-gbg-bottom.png?format=2500w"
            alt={"please wait"}
            mt={-1}
          />
        </Box>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap={[4, 4, 4, 6, 6]}
          width={"100%"}
          margin={"0 auto"}
          padding={["10px 0px", "10px 0px", "10px 0px", "10px 0px", "10px 0px"]}
          bg={"#FAFAFA"}
        >
          {ninthContent?.map((item, index) => {
            return (
              <>
                <GridItem
                  colSpan={3}
                  w={["85%", "85%", "75%", "80%", "85%"]}
                  margin={"0 auto"}
                >
                  <ContentText
                    id={item?.id}
                    text={item?.text}
                    className={item?.className}
                    fontSize={item?.fontSize}
                    margin={item?.margin}
                    textAlign={item.textAlign}
                    backgroundColor={item?.backgroundColor}
                    width={item?.width}
                    lineHeight={item?.lineHeight}
                  />
                </GridItem>
                {item?.Content?.map((item, index) => {
                  return (
                    <>
                      <Flex
                        flexDir={"column"}
                        alignItems={"center"}
                        padding={[
                          "0px 0px",
                          "0px 0px",
                          "0px 50px",
                          "0px 100px",
                          "0px 100px",
                        ]}
                        marginLeft={["50px", "50px", "0px", "0px", "0px"]}
                      >
                        <Image
                          src={item?.imageUrl}
                          alt={"Please wait..."}
                          width={"100%"}
                        />
                        <Link href="/templates">
                          <CommonButton
                            className={"medium-text"}
                            width={[
                              "16rem",
                              "16rem",
                              "16rem",
                              "20rem",
                              "20rem",
                            ]}
                            height={[
                              "3.5rem",
                              "3.5rem",
                              "3.5rem",
                              "4.5rem",
                              "4.5rem",
                            ]}
                            title={item.buttonText}
                            backgroundColor={"#E6E6E6"}
                            fontSize={["17px", "17px", "17px", "18px", "19px"]}
                            margin={"1.5rem 0rem 0rem 0rem"}
                          />
                        </Link>
                      </Flex>
                    </>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Box>
          <Box
            display={"flex"}
            flexDirection={["column", "column", "row", "row", "row"]}
          >
            <Box
              w={["100%", "100%", "50%", "50%", "50%"]}
              padding={[
                "10px 15px",
                "10px 15px",
                "10px 37px",
                "10px 55px",
                "10px 75px",
              ]}
            >
              {tenthContent.map((item, index) => {
                return (
                  <>
                    <ContentText
                      id={item.id}
                      text={item.text}
                      className={item.className}
                      fontSize={item.fontSize}
                      margin={item.margin}
                      textAlign={item.textAlign}
                      backgroundColor={item.backgroundColor}
                      width={item.width}
                      marginBox={item.marginBox}
                      fontWeight={item.fontWeight}
                      color={item.color}
                      lineHeight={item.lineHeight}
                    />
                    {item.id === "Heading" ? (
                      <Box
                        height={"2px"}
                        backgroundColor={"black"}
                        width={"25%"}
                        marginY={10}
                      ></Box>
                    ) : (
                      ""
                    )}
                    {item?.listItems?.map((item, index) => {
                      return (
                        <>
                          {item.id === "List" ? (
                            <List
                              className={item.className}
                              fontSize={item.fontSize}
                            >
                              <ListItem display={"flex"} mt={[2, 2, 2, 5, 5]}>
                                <Box mr={2} color={"#00C8AA"} fontWeight={600}>
                                  ???
                                </Box>
                                <ContentText
                                  id={item.id}
                                  text={item.text}
                                  className={item.className}
                                  fontSize={item.fontSize}
                                  margin={item.margin}
                                  textAlign={item.textAlign}
                                  backgroundColor={item.backgroundColor}
                                  width={item.width}
                                  marginBox={item.marginBox}
                                  fontWeight={item.fontWeight}
                                  color={item.color}
                                  lineHeight={item.lineHeight}
                                />
                              </ListItem>
                            </List>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Box>
            <Box w={["100%", "100%", "50%", "50%", "50%"]}>
              {tenthContent.map((item, index) => {
                return (
                  <>
                    {item?.listItems?.map((item, index) => {
                      return (
                        <>
                          {item.id === "image" ? (
                            <>
                              <Box
                                padding={[
                                  "20px 40px 10px 40px",
                                  "30px 40px 10px 40px",
                                  "100px 10px 0px 10px",
                                  "100px 40px 0px 40px",
                                  "100px 40px 0px 40px",
                                ]}
                              >
                                <Image
                                  src={item.imageUrl}
                                  // height={"100px"}
                                  // width={"200px"}
                                  alt="will load soon"
                                />
                              </Box>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box id={"border-section"} bg={"#FFD67B"}>
          <Box>
            <Image src="yellow-wave-wbg-top.png" alt="will load soon" />
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} flexDirection={"column"} bg={"#FED67B"}>
            {lastContent.map((item, index) => {
              return (
                <>
                  {item.id === "Heading" ? (
                    <>
                      <Box
                        margin={"0 auto"}
                        width={["90%", "90%", "50%", "50%", "50%"]}
                      >
                        <ContentText
                          id={item.id}
                          text={item.text}
                          className={item.className}
                          fontSize={item.fontSize}
                          margin={item.margin}
                          textAlign={item.textAlign}
                          backgroundColor={item.backgroundColor}
                          width={item.width}
                          marginBox={item.marginBox}
                          fontWeight={item.fontWeight}
                          color={item.color}
                          lineHeight={item.lineHeight}
                        />
                      </Box>
                      <Box
                        height={"2px"}
                        backgroundColor={"black"}
                        width={"25%"}
                        margin={"0 auto"}
                        marginY={8}
                      ></Box>
                    </>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
            <Box
              display={"flex"}
              flexDirection={["column", "column", "row", "row", "row"]}
            >
              <Box w={["100%", "100%", "50%", "50%", "50%"]}>
                {lastContent.map((item, index) => {
                  return (
                    <>
                      <Box
                        padding={[
                          "0px 30px 0px 30px",
                          "0px 30px 0px 30px",
                          "0px 30px 0px 30px",
                          "30px 70px 0px 30px",
                          "0px 100px 30px 90px",
                        ]}
                      >
                        {item?.listItems?.map((item, index) => {
                          return (
                            <>
                              <Box>
                                {item.id === "List" ? (
                                  <List
                                    className={item.className}
                                    fontSize={item.fontSize}
                                  >
                                    <ListItem display={"flex"} mt={5}>
                                      {/* <MdDone
                              height={"12px"}
                              width={"30px"}
                              color={"#00C8AA"}
                            /> */}
                                      <Box
                                        mr={2}
                                        color={"#00C8AA"}
                                        fontWeight={"bold"}
                                      >
                                        ???
                                      </Box>
                                      <ContentText
                                        id={item.id}
                                        text={item.text}
                                        className={item.className}
                                        fontSize={item.fontSize}
                                        margin={item.margin}
                                        textAlign={item.textAlign}
                                        backgroundColor={item.backgroundColor}
                                        width={item.width}
                                        marginBox={item.marginBox}
                                        fontWeight={item.fontWeight}
                                        color={item.color}
                                        lineHeight={item.lineHeight}
                                      />
                                    </ListItem>
                                  </List>
                                ) : (
                                  ""
                                )}
                              </Box>
                            </>
                          );
                        })}
                      </Box>
                    </>
                  );
                })}
              </Box>
              <Box w={["100%", "100%", "50%", "50%", "50%"]}>
                {lastContent.map((item, index) => {
                  return (
                    <>
                      {item?.listItems?.map((item, index) => {
                        return (
                          <>
                            {item.id === "image" ? (
                              <>
                                <Box>
                                  <Box
                                    padding={"0px 30px 0px 30px "}
                                    mt={"-10%"}
                                  >
                                    <Image
                                      src={item.imageUrl}
                                      alt={"Please wait"}
                                      top={0}
                                    />
                                  </Box>
                                </Box>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobsPage;
