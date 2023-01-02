import React from "react";
import {
  Box,
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
    <div>
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
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={item.className}
                      >
                        {item.text}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {item?.faqsContent?.map((faqContent, index) => {
                    return (
                      <>
                        <AccordionPanel pb={4}>
                          {faqContent.text}
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
    </div>
  );
};

export default ForthSection;
