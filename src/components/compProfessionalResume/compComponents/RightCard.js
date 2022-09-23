import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import Circle from './Circle'
import { useWindowSizing } from '../../../../customHooks/useWindowSizing'

export default function RightCard({ cardData}) {
  const size = useWindowSizing()
  const width = size.width
 


  return (
    <Box bg='white' display={width >= 767 ? "auto":"flex" } flexDirection={width >= 767 ? "auto": "Column" } justifyContent="center" alignItems="center" minHeight={width >= 767 ? "fit-content" : {base:530,sm:350}} borderRadius="10px" py={4} px={6} my={5} >
      <Box pos="relative" textAlign={width >= 767 ? null : "center"}><Circle data={{ customStyle: cardData.customStyle, text: cardData.text }} />
        <Text px={2} pos={width >= 767 ? "absolute" : null} color="#002d6b"
          fontSize={{ base: "1.4rem", md: '1.1rem', lg: "1.4rem" }} fontWeight="bold"
          fontFamily="'Nunito',Helvetica,Arial,sans-serif" textAlign={width >= 767 ? null : "center"}
          display={width >= 767 ? "inline-block" : "block"} mx={2} my={width >= 767 ? null : 3} >
          {cardData.HeadingData}
        </Text>
      </Box>
        {cardData.text === "1" ?
          <Text fontSize="17px" wordSpacing ="1px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
            Keep this simple:just your name, a professional email address, and your city and state of residence. Your resume header can also include links to a portfolio website or online job networking profile, like LinkedIn.
          </Text> :
          cardData.text === "2" ?
            <Text fontSize="17px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
              A <Link href='/test' style={{ fontWeight: "800", color: "#0058ac", fontFamily: "BlinkMacSystemFont" }}>professional summary</Link> should explain your top abilities and work experiences in two to three sentences. A good resume summary is an elevator pitch that communicates your value and strengths as an employee and compels an employer to keep reading.
            </Text> :
            cardData.text === "3" ?
              <Text fontSize="17px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
                In reverse-chronological order (current or most recent job first), list your <Link href='/test' style={{ fontWeight: "800", color: "#0058ac", fontFamily: "BlinkMacSystemFont" }}>work history </Link> with your job title, company and dates of employment. Using only three to five bullet points under each resume work experience entry, highlight notable work achievements. Examples of successful projects and contributions make a bigger impression than just simply listing daily tasks.
              </Text> :
              cardData.text === "4" ?
                <Text fontSize="17px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
                  To write the best <Link href='/test' style={{ fontWeight: "800", color: "#0058ac", fontFamily: "BlinkMacSystemFont" }}>resume skills section</Link> , find the required skills from the job posting, match them to your own abilities, and list them in bullet points. Feature a mix of hard skills (e.g., specific software programs or training-based knowledge) and important soft skills, such as attention to detail or good communication.
                </Text> :
                cardData.text === "5" &&
                <Text fontSize="17px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
                  Present your most advanced education credentials (e.g., college degree or high school diploma) in reverse-chronological order, along with the name of the institution where you earned your credential. If you have advanced training in areas that are related to the job you’re applying for (e.g., a software certification), list these courses under this resume section as well.
                </Text>
        }
    </Box>
  )
}
