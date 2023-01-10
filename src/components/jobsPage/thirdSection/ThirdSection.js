import React from "react";
import { thirdContent } from "../data";
import { MdDone } from "react-icons/md";

import {
  Box,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import ContentText from "../components/ContentText";

const ThirdSection = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Box
          w={["100%", "100%", "53%", "50%", "50%"]}
          padding={[
            "15px 30px",
            "15px 30px",
            "15px 0px 0px 20px",
            "15px 45px",
            "15px 70px",
          ]}
        >
          {thirdContent.map((item, index) => {
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
                    height={"1px"}
                    backgroundColor={"black"}
                    width={"20%"}
                    margin={[
                      "20px 0px",
                      "20px 0px",
                      "20px 0px",
                      "20px 0px",
                      "20px 0px",
                    ]}
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
                          <ListItem display={"flex"}>
                            {/* <MdDone
                              height={"12px"}
                              width={"30px"}
                              color={"#00C8AA"}
                            /> */}
                            <Box mr={1} color={"#00C8AA"} fontWeight={"bold"}>
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
        <Box
          w={["100%", "100%", "47%", "50%", "50%"]}
          padding={[
            "0px 45px 0px 45px",
            "0px 45px 0px 45px",
            "160px 10px 0px 10px",
            "190px 35px 0px 35px",
            "80px",
          ]}
        >
          {thirdContent.map((item, index) => {
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
  );
};

export default ThirdSection;
