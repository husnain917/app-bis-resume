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
      <Box display={"flex"}>
        <Box w={"50%"} padding={"45px 77px"}>
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
                />
                {item.id === "Heading" ? (
                  <Box
                    height={"1px"}
                    backgroundColor={"black"}
                    width={"20%"}
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
                          <ListItem display={"flex"}>
                            {/* <MdDone
                              height={"12px"}
                              width={"30px"}
                              color={"#00C8AA"}
                            /> */}
                            <Box mr={2} color={"#00C8AA"} fontWeight={"bold"}>
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
        <Box w="50%" padding={"80px"}>
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
