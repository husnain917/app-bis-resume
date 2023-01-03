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

const JobsPage = () => {
  const handleButton = () => {
    console.log("FOCUSED");
  };
  return (
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
              >
                <CommonButton
                  color={"white"}
                  title={"SALE"}
                  padding={"0px 5px 0px 5px"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box>
              <Box mt={"-50px"}>
                <Image
                  src={"./jobsPage/topimage1.png"}
                  height={"-webkit-fit-content"}
                />
              </Box>
              {/* <Box
                display={"flex"}
                alignItems={"flex-start"}
                m={"-50px 180px 0px 0px"}
              >
                <CommonButton
                  color={"white"}
                  title={"Quick View"}
                  fontSize={"16px"}
                  fontWeight={"400"}
                  padding={"20px"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box> */}
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
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              padding={[
                "0px 0px 0px 0px",
                "0px 0px 0px 0px",
                "0px 0px 0px 0px",
                "0px 0px 0px 20px",
                "0px 30px 0px 30px",
              ]}
            >
              <Text
                className={"sub-heading"}
                fontSize={["2rem", "2rem", "2rem", "3rem", "3.2rem"]}
                color={"black"}
                lineHeight={["60px", "60px", "35px", "60px", "70px"]}
              >
                {" "}
                Job Search Masterclass
              </Text>
              <Text
                className={"medium-heading"}
                fontSize={["18px", "18px", "18px", "24px", "24px"]}
                color={"black"}
                mt={"3%"}
              >
                An E-book by Novoresume
              </Text>
              <Text
                className={"medium-text"}
                mt={"20px"}
                fontSize={["16px", "16px", "16px", "20px", "20px"]}
                color={"black"}
                lineHeight={["22px", "22px", "22px", "60px", "70px"]}
              >
                The only book about the job search process that you’ll ever
                need. Learn how to create an impeccable resume, match it with a
                convincing cover letter, and ace the job interview.
              </Text>
              <Text
                className={"sub-heading"}
                mt={2}
                color={"black"}
                fontSize={["18px", "18px", "18px", "22px", "22px"]}
                fontWeight={800}
              >
                Digital Download: PDF
              </Text>
              <Text
                className={"sub-heading"}
                mt={[1, 1, 1, 1, 1, 2]}
                color={"black"}
                fontSize={["18px", "18px", "18px", "22px", "22px"]}
              >
                Prices are in USD.
              </Text>
              <Text
                className={"medium-text"}
                marginTop={["1rem", "1rem", "1rem", "1rem", "2rem"]}
                color={"black"}
                fontSize={["18px", "18px", "18px", "21px", "21px"]}
                display={"flex"}
              >
                $10.99
                <Text ml={2} textDecoration={"line-through"}>
                  {" "}
                  $15.00{" "}
                </Text>
              </Text>
              <CommonButton
                height={["4rem", "5rem", "3.5rem", "5rem", "5.5rem"]}
                width={["11rem", "11rem", "10rem", "11rem", "11rem"]}
                padding={["20px", "20px", "20px", "24px", "24px"]}
                borderRadius={"40px"}
                title={"Buy Today"}
                margin={[
                  "18px 0px",
                  "18px 0px",
                  "18px 0px",
                  "18px 0px",
                  "24px 0px",
                ]}
                fontSize={["18px", "18px", "17px", "19px", "19px"]}
                backgroundColor={"rgb(75,204,239)"}
              />
              <Box
                height={"2px"}
                backgroundColor={"black"}
                mt={[1, 1, 1, 1, 4]}
                width={["95%", "25%", "25%", "25%", "25%"]}
              ></Box>

              <Text
                className={"medium-text"}
                mt={4}
                color={"black"}
                fontSize={["16px", "16px", "17px", "20px", "20px"]}
              >
                Unsure? Check out our free sample!
              </Text>
              <CommonButton
                className={"medium-text"}
                width={["12rem", "12rem", "12rem", "14rem", "18rem"]}
                height={["3.4rem", "3.8rem", "3.8rem", "3.8rem", "4.5rem"]}
                title={"Download Sample"}
                backgroundColor={"white"}
                fontSize={["16px", "16px", "17px", "20px", "20px"]}
                margin={"1.5rem 0rem 0rem 0rem"}
              />
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
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Box>
        <Box display={"flex"} bg={"#FAFAFA"}>
          <Box
            w={"50%"}
            padding={[
              "170px 35px 0px 35px",
              "170px 35px 0px 35px",
              "170px 35px 0px 35px",
              "220px 35px 0px 35px",
              "80px",
            ]}
          >
            {seventhContent.map((item, index) => {
              return (
                <>
                  {item?.listItems?.map((item, index) => {
                    return (
                      <>
                        <Image src={item.imageUrl} />
                      </>
                    );
                  })}
                </>
              );
            })}
          </Box>
          <Box
            w="50%"
            padding={[
              "45px 20px",
              "45px 20px",
              "45px 20px",
              "45px 20px",
              "50px 65px",
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
                            <ListItem display={"flex"} mb={3}>
                              <Box mr={2} color={"#00C8AA"} fontWeight={600}>
                                ✔
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
          <Image src="yellow-wave.png" />
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
                  width={["59%", "59%", "59%", "59%", "57%"]}
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
                  return (
                    <>
                      <GridItem w="100%" mb={8}>
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
                      </GridItem>
                    </>
                  );
                })}
              </>
            );
          })}
        </Grid>
        <Box>
          <Box
            id="HeadingRightSide"
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
            padding={[
              "0px 30px 0px 30px",
              "0px 30px 0px 30px",
              "0px 30px 0px 30px",
              "30px 30px 0px 30px",
              "30px 30px 0px 30px",
            ]}
          >
            <Text
              className={"small-text"}
              marginTop={"0.3rem"}
              fontSize={["18px", "18px", "18px", "26px", "26px"]}
              display={"flex"}
            >
              $10.99
              <Text ml={2} textDecoration={"line-through"}>
                {" "}
                $15.00{" "}
              </Text>
            </Text>
            <CommonButton
              height={"3.5rem"}
              width={"10rem"}
              padding={"24px"}
              borderRadius={"40px"}
              title={"Buy Today"}
              margin={"24px 0px"}
              fontSize={["17px", "17px", "17px", "18px", "18px"]}
              backgroundColor={"rgb(75,204,239)"}
            />
            <Box
              height={"2px"}
              backgroundColor={"black"}
              mt={4}
              width={"25%"}
            ></Box>
            <CommonButton
              className={"medium-text"}
              width={"16rem"}
              height={"3.5rem"}
              title={"More About Job Searching"}
              backgroundColor={"#E6E6E6"}
              fontSize={["17px", "17px", "17px", "18px", "18px"]}
              margin={"1.5rem 0rem 0rem 0rem"}
            />
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
        padding={["50px 0px", "50px 0px", "50px 0px", "100px 0px", "100px 0px"]}
        bg={"#FAFAFA"}
      >
        {ninthContent?.map((item, index) => {
          return (
            <>
              <GridItem
                colSpan={3}
                w={["50%", "50%", "50%", "55%", "55%"]}
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
                        "0px 50px",
                        "0px 50px",
                        "0px 50px",
                        "0px 100px",
                        "0px 100px",
                      ]}
                    >
                      <Image
                        src={item?.imageUrl}
                        alt={"Please wait..."}
                        width={"100%"}
                      />
                      <CommonButton
                        className={"medium-text"}
                        width={["16rem", "16rem", "16rem", "20rem", "20rem"]}
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
                    </Flex>
                  </>
                );
              })}
            </>
          );
        })}
      </Grid>
      <Box>
        <Box display={"flex"}>
          <Box
            w={"50%"}
            padding={[
              "25px 75px",
              "25px 75px",
              "25px 37px",
              "55px 55px",
              "55px 75px",
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
                                ✔
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
          <Box w="50%">
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
                                "160px 40px 0px 40px",
                                "160px 40px 0px 40px",
                                "120px 10px 0px 10px",
                                "160px 40px 0px 40px",
                                "60px",
                              ]}
                            >
                              <Image
                                src={item.imageUrl}
                                // height={"100px"}
                                // width={"200px"}
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
          <Image src="yellow-wave-wbg-top.png" />
        </Box>
      </Box>
      <Box>
        <Box display={"flex"} bg={"#FED67B"}>
          <Box w={"50%"} padding={"55px"}>
            {lastContent.map((item, index) => {
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
                            <ListItem display={"flex"} mt={5}>
                              {/* <MdDone
                              height={"12px"}
                              width={"30px"}
                              color={"#00C8AA"}
                            /> */}
                              <Box mr={2} color={"#00C8AA"} fontWeight={"bold"}>
                                ✔
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
          <Box w="50%">
            {lastContent.map((item, index) => {
              return (
                <>
                  {item?.listItems?.map((item, index) => {
                    return (
                      <>
                        <Image src={item.imageUrl} />
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
  );
};

export default JobsPage;
