import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Circle from './Circle'

export default function RightCard({cardData}) {
  return ( 
    <Box bg='white' borderRadius="10px" p={4} minHeight="fit-content" my={5} >
       <Box pos="relative"><Circle data ={{customStyle:cardData.customStyle, text:cardData.text}} /><Text px={2} pos="absolute" 
       color="#002d6b" fontSize={{base:"1.4rem",md:'1.1rem' ,lg:"1.4rem"}} fontWeight="bold"
       fontFamily="'Nunito',Helvetica,Arial,sans-serif"
        display="inline-block" mx={2}  >{cardData.HeadingData}</Text></Box>
        <Text fontSize="17px" fontFamily="'Nunito',Helvetica,Arial,sans-serif" color="#002d6b" mt={2}>
         {cardData.cardText}
        </Text>
    </Box>
  )
}
