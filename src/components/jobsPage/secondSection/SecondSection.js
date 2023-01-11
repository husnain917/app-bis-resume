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
      padding={[
        "10px 32px 0px 32px",
        "10px 32px 0px 32px",
        "10px 50px 0px 50px",
        "10px 50px 0px 50px",
        "10px 50px 0px 50px",
      ]}
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
              lineHeight={text?.lineHeight}
            />
          </>
        );
      })}
      <Box
        borderRadius={"30px"}
        bg={"white"}
        padding={[
          "30px 50px 30px 50px",
          "30px 50px 30px 50px",
          "10px 30px 10px 30px",
          "30px 50px 30px 50px",
          "30px 50px 30px 50px",
        ]}
        maxW={["600px", "600px", "350px", "600px", "600px"]}
        mb={6}
        transition={"1s"}
        mt={[6, 6, 6, 0, 0]}
      >
        <Text fontSize={["18px", "18px", "21px", "27px", "27px"]}>
          “Job hunting can be a very stressful experience”
        </Text>
        <Text textAlign={"end"} mt={"-2%"}>
          — Anybody, everywhere
        </Text>
      </Box>

      <Box w={"10%"} h={"1px"} bg={"black"}></Box>
      <Box
        display={"flex"}
        w={"100%"}
        flexDirection={["column", "column", "row", "row", "row"]}
        justifyContent={"space-around"}
        mt={[0, 0, 0, 0, 1]}
      >
        <Box
          id={"image"}
          display={"flex"}
          w={["100%", "100%", "45%", "45%", "45%"]}
        >
          <Box
            padding={[
              "80px 0px 0px 0px",
              "80px 0px 0px 0px",
              "130px 0px 0px 0px",
              "80px 0px 0px 0px",
              "50px",
            ]}
          >
            <Image src="/hunting-for-jobs.png" alt="" />
          </Box>
        </Box>
        <Box
          w={["100%", "100%", "45%", "45%", "45%"]}
          className={"medium-text"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={[
            "40px 0px 10px 0px",
            "40px 0px 10px 0px",
            "80px 17px",
            "120px 17px",
            "120px 42px",
          ]}
        >
          <ContentText
            text={`Unless you have a Ph.D. in Human Resources or a few years of experience as an HR manager, you've probably struggled with at least some parts of the process.`}
            className={"medium-text"}
            fontSize={["16px", "16px", "16px", "20px", "20px"]}
            textAlign={["center", "center", "start", "start", "start"]}
            lineHeight={["30px", "30px", "25px", "30px", "30px"]}
          />
          <ContentText
            text={`You might, for example, be unsure of how to create a resume that
            stands out from the rest. Or you might have difficulties charming
            the hiring manager during the interviewing process.`}
            className={"medium-text"}
            fontSize={["16px", "16px", "16px", "20px", "20px"]}
            textAlign={["center", "center", "start", "start", "start"]}
            lineHeight={"30px"}
            margin={"20px 0px"}
          />
          <Text
            fontSize={"24px"}
            className={"sub-heading"}
            textAlign={["center", "center", "start", "start", "start"]}
            mt={[2, 2, 3, 4, 4]}
          >
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