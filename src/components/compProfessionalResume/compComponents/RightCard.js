import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import Circle from "./Circle";
import { useWindowSizing } from "../../../../customHooks/useWindowSizing";

export default function RightCard({ cardData }) {
  const size = useWindowSizing();
  const width = size.width;

  return (
    <Box
      bg="white"
      minHeight={width >= 767 ? "fit-content" : { base: 530, sm: 330 }}
      borderRadius="10px"
      py={width >= 767 ? 3 : 6}
      px={6}
      my={width >= 767 ? 3 : 0}
      mx={3}
      mt={7}
    >
      <Box
        pos="relative"
        height={["60px", "60px", "35px", "35px", "38px", "60px"]}
        textAlign={width >= 767 ? null : "center"}
      >
        <Circle
          data={{ customStyle: cardData.customStyle, text: cardData.text }}
        />
        <Text
          px={2}
          pos={width >= 767 ? "absolute" : null}
          color="#002d6b"
          fontSize={["1.4rem", "1.4rem", "1rem", "1.4rem", "1.4rem"]}
          // fontWeight="bold"
          // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
          className={"sub-heading"}
          textAlign={width >= 767 ? null : "center"}
          display={width >= 767 ? "inline-block" : "block"}
          mx={2}
          my={width >= 767 ? null : 3}
        >
          {cardData.HeadingData}
        </Text>
      </Box>
      {cardData.text === "1" ? (
        <Text
          // fontSize="17px"
          // wordSpacing="1px"
          // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
          // color="#002d6b"
          className={"small-text"}
          fontSize={["0.5rem", "0.8rem", "1em", "1.1em", "1.1em"]}
          lineHeight={["14px", "18px", "23px", "22px", "22px"]}
          mt={2}
        >
          Include your full name, professional email address, phone number and
          location. Consider adding a link to your LinkedIn profile or personal
          website to showcase your online presence.
        </Text>
      ) : cardData.text === "2" ? (
        <Text
          // fontSize="17px"
          // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
          // color="#002d6b"
          fontSize={["0.5rem", "0.8rem", "1em", "1.1em", "1.1em"]}
          lineHeight={["14px", "18px", "23px", "22px", "22px"]}
          className={"small-text"}
          mt={2}
        >
          A short, powerful statement that summarizes your key skills,
          experience and qualifications. It should be tailored to the specific
          job you are applying for and highlight your unique value as a
          candidate.
        </Text>
      ) : cardData.text === "3" ? (
        <Text
          // fontSize="17px"
          // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
          // color="#002d6b"
          className={"small-text"}
          fontSize={["0.5rem", "0.8rem", "1em", "1.1em", "1.1em"]}
          lineHeight={["22px", "22px", "23px", "26px", "26px"]}
          mt={2}
        >
          List your most recent and relevant work experience in reverse
          chronological order. Use bullet points to highlight your achievements
          and responsibilities, and make sure to include specific details such
          as project names, results and metrics.
        </Text>
      ) : cardData.text === "4" ? (
        <Text
          // fontSize="17px"
          // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
          // color="#002d6b"
          className={"small-text"}
          fontSize={["0.5rem", "0.8rem", "1em", "1.1em", "1.1em"]}
          lineHeight={["14px", "18px", "23px", "22px", "22px"]}
          mt={2}
        >
          Identify the most important skills required for the job and showcase
          them prominently on your resume. This can include both hard skills
          (technical abilities) and soft skills (such as communication,
          problem-solving and teamwork).
        </Text>
      ) : (
        cardData.text === "5" && (
          <Text
            // fontSize="17px"
            // fontFamily="'Nunito',Helvetica,Arial,sans-serif"
            // color="#002d6b"
            className={"small-text"}
            fontSize={["0.5rem", "0.8rem", "1em", "1.1em", "1.1em"]}
            lineHeight={["14px", "18px", "23px", "22px", "22px"]}
            mt={2}
          >
            {
              " Include your highest level of education, the name of the institution and the date of completion. If you have any relevant certifications or training, list them here as well. Don't forget to include any relevant coursework or honors."
            }
          </Text>
        )
      )}
    </Box>
  );
}
