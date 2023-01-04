import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ContentText from "../components/ContentText";
import { forthContent } from "../data";

const ForthSection = () => {
  return (
    <Box padding={"10px 0px"}>
      {forthContent.map((item, index) => {
        console.log("FAQS CONTENT: ", item.faqsContent);
        return (
          <>
            {item.id === "Heading" ? (
              <Box>
                <ContentText
                  id={item?.id}
                  text={item?.text}
                  className={item?.className}
                  fontSize={item?.fontSize}
                  margin={item?.margin}
                  textAlign={item.textAlign}
                  backgroundColor={item?.backgroundColor}
                  width={item?.width}
                />
              </Box>
            ) : (
              <Accordion
                allowToggle
                width={["85%", "85%", "70%", "70%", "70%"]}
                margin={"0 auto"}
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      padding={"40px 0px"}
                      _hover={{
                        backgroundColor: "transparent",
                      }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={item.className}
                      >
                        <ContentText
                          id={item?.id}
                          text={item?.text}
                          className={item?.className}
                          fontSize={item?.fontSize}
                          margin={item?.margin}
                          textAlign={item?.textAlign}
                          backgroundColor={item?.backgroundColor}
                          width={item?.width}
                        />
                      </Box>
                      <AccordionIcon fontWeight={700} fontSize={"36px"} />
                    </AccordionButton>
                  </h2>
                  {item?.faqsContent?.map((faqContent, index) => {
                    return (
                      <>
                        <AccordionPanel
                          pb={4}
                          display={"flex"}
                          alignItems={"center"}
                          margin={"0"}
                          padding={"0.8px 0px"}
                        >
                          <Text mr={2} className="sub-heading" fontSize="16px">
                            {faqContent.bullet}
                          </Text>
                          <Text
                            fontSize={["13px", "13px", "22px", "22px", "22px"]}
                            className={"small-text"}
                            display={"flex"}
                            alignItems={"center"}
                            // justifyContent={"center"}
                          >
                            {faqContent.text}
                          </Text>
                        </AccordionPanel>
                      </>
                    );
                  })}
                </AccordionItem>
              </Accordion>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default ForthSection;
