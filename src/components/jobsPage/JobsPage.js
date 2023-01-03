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
} from "@chakra-ui/react";
import CommonButton from "../commonButton/CommonButton";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection";
import ForthSection from "./forthSection/ForthSection";
import FifthSection from "./fifthSection/FifthSection";
import SixthSection from "./sixthSection/SixthSection";
import ContentText from "./components/ContentText";
import { seventhContent } from "./data";
import { MdDone } from "react-icons/md";

const JobsPage = () => {
  const handleButton = () => {
    console.log("FOCUSED");
  };
  return (
    <Box w={"100%"}>
      <Box bg={"white"} paddingY={"10px 10px 0px 10px"}>
        <Box bg={"#FFD67B"} display={"flex"} padding={"20px 10px 0px 10px"}>
          <Box w={"50%"}>
            <Box
              id="HeadingLeftSide"
              display={"flex"}
              flexDirection="column"
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              alignItems={"flex-end"}
              padding={"40px 30px 0px 60px"}
            >
              <Box
                display={["flex", "flex"]}
                className={"only-font-family"}
                lineHeight={"15rem"}
                justifyContent="center"
                alignItems={"center"}
              >
                <CommonButton
                  color={"white"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box>
              <Image
                src={"./jobsPage/topimage1.png"}
                height={"-webkit-fit-content"}
              />
              <Box display={"flex"} alignItems={"flex-start"}>
                <CommonButton
                  color={"white"}
                  borderRadius={"none"}
                  hoverBoxShadow={"none"}
                  backgroundColor={"black"}
                />
              </Box>
            </Box>
          </Box>
          <Box w={"50%"}>
            <Box
              id="HeadingRightSide"
              display={"flex"}
              flexDirection="column"
              // w={width > 610 ? ["100%", "49%", "49%", "49%", "49%"] : "100%"}
              padding={"30px 30px 0px 30px"}
            >
              <Text
                className={"sub-heading"}
                fontSize={["2.8rem", "2.8rem", "2.8rem", "2.8rem", "3.2rem"]}
                color={"black"}
                lineHeight={"70px"}
                mt={20}
              >
                {" "}
                Job Search Masterclass
              </Text>
              <Text className={"medium-text"} mt={1} fontSize={"21px"}>
                An E-book by Novoresume
              </Text>
              <Text className={"medium-text"} mt={3} fontSize={"21px"}>
                The only book about the job search process that you’ll ever
                need. Learn how to create an impeccable resume, match it with a
                convincing cover letter, and ace the job interview.
              </Text>
              <Text
                className={"sub-heading"}
                mt={2}
                color={"black"}
                fontSize={"22px"}
                fontWeight={800}
              >
                Digital Download: PDF
              </Text>
              <Text
                className={"sub-heading"}
                mt={2}
                color={"black"}
                fontSize={"22px"}
              >
                Prices are in USD.
              </Text>
              <Text
                className={"medium-text"}
                marginTop={"4.5rem"}
                color={"black"}
                fontSize={"21px"}
                display={"flex"}
              >
                $10.99
                <Text ml={2} textDecoration={"line-through"}>
                  {" "}
                  $15.00{" "}
                </Text>
              </Text>
              <CommonButton
                height={"5rem"}
                width={"11rem"}
                padding={"24px"}
                borderRadius={"40px"}
                title={"Buy Today"}
                margin={"24px 0px"}
                fontSize={"18px"}
                backgroundColor={"rgb(75,204,239)"}
              />
              <Box
                height={"2px"}
                backgroundColor={"black"}
                mt={4}
                width={"25%"}
              ></Box>

              <Text
                className={"medium-text"}
                mt={4}
                color={"black"}
                fontSize={"22px"}
              >
                Unsure? Check out our free sample!
              </Text>
              <CommonButton
                className={"medium-text"}
                width={"20rem"}
                height={"4.5rem"}
                title={"Download Sample"}
                backgroundColor={"white"}
                fontSize={"18px"}
                margin={"1.5rem 0rem 0rem 0rem"}
              />
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={"-125px"}
          height={"15.1rem"}
          width={"auto"}
          backgroundImage={
            "https://images.squarespace-cdn.com/content/v1/622af6c5cff01d7236bfdcf8/0fc7177e-3370-426c-986f-29f9911bcf96/yellow-wave-gbg-bottom.png?format=2500w"
          }
          backgroundRepeat="no-repeat"
        ></Box>
      </Box>
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Box>
        <Box display={"flex"}>
          <Box w={"50%"} padding={"55px"}>
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
          <Box w="50%" padding={"0px 45px"}>
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
                            <ListItem display={"flex"} mt={3}>
                              <Box mr={2} color={"#00C8AA"} fontWeight={600}>
                                ✔
                              </Box>
                              {item.text}
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
    </Box>
  );
};

export default JobsPage;
