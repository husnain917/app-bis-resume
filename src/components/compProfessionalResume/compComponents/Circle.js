import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Circle({customStyle, text}) {
    return (
        <Text fontWeight="bold" fontSize={{base:"md",sm:"lg"}} textAlign="center" position="absolute" top={customStyle.top} left={{base:"-14px",sm:"-19px"}}
            lineHeight={{base:"25px",sm:"35px"}} borderRadius="50px" color={customStyle.color} height={{base:"25px",sm:"35px"}} width={{base:"25px",sm:"35px"}} bg={customStyle.bgColor}>
            {text}
        </Text>
    )
}
