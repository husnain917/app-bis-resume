import React from "react";
import ContentText from "../components/ContentText";
import { data } from "../data";
import { Box, Text, Image } from "@chakra-ui/react";

const SecondSection = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      bg={"#FAFAFA"}
      padding={"50px"}
    >
      {data?.map((text, index) => {
        return (
          <>
            <ContentText
              id={text?.id}
              text={text?.text}
              className={text?.className}
              fontSize={text?.fontSize}
              margin={text?.margin}
              textAlign={text?.textAlign}
              backgroundColor={text?.backgroundColor}
              width={text?.width}
              marginBox={text?.marginBox}
            />
          </>
        );
      })}
      <Box
        borderRadius={"30px"}
        bg={"white"}
        padding={"30px 50px 30px 50px"}
        maxW={"600px"}
        mb={6}
        transition={"1s"}
      >
        <Text fontSize={"27px"}>
          “Job hunting can be a very stressful experience”
        </Text>
        <Text textAlign={"end"} mt={"-2%"}>
          — Anybody, everywhere
        </Text>
      </Box>

      <Box w={"10%"} h={"1px"} bg={"black"}></Box>
      <Box display={"flex"} w={"100%"} justifyContent={"space-around"} mt={10}>
        <Box id={"image"} display={"flex"} w="45%">
          <Box padding={"50px"}>
            <Image src="/hunting-for-jobs.png" alt="" />
          </Box>
        </Box>
        <Box
          w="45%"
          className={"medium-text"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={"120px 42px"}
        >
          <ContentText
            text={`Unless you have a Ph.D. in Human Resources or a few years of experience as an HR manager, you've probably struggled with at least some parts of the process.`}
            className={"medium-text"}
            fontSize={"21px"}
            textAlign={"start"}
            lineHeight={"30px"}
          />
          <ContentText
            text={`You might, for example, be unsure of how to create a resume that
            stands out from the rest. Or you might have difficulties charming
            the hiring manager during the interviewing process.`}
            className={"medium-text"}
            fontSize={"20px"}
            textAlign={"start"}
            lineHeight={"30px"}
          />
          <Text fontSize={"24px"} className={"sub-heading"} mt={"4"}>
            Whichever the case...
          </Text>
        </Box>
      </Box>
      {/* {data?.map((item, index) => {
        item?.cardContent?.map((item, index) => {
          console.log("item>>>", item.cardtext);
          return (
            <>
              <Box>
                <Text>{item.cardtext}</Text>
              </Box>
            </>
          );
        });
        
        // {
        //   item?.cardContent?.map((item, index) => {
        //     console.log("cardText>>>>", item.cardtext);
        //     return (
        //       <>
        //         <Box>{item.cardtext}</Box>
        //       </>
        //     );
        //   });
        // }
      })} */}
    </Box>
  );
};

export default SecondSection;
