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
        <Box w={"50%"} padding={"55px"}>
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
                          <ListItem display={"flex"}>
                            <MdDone size={"2em"} color={"green"} />
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
        <Box w="50%">
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
