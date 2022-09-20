import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Circle({data }) {
    const text = data?.text;
    const customStyle = data?.customStyle;
    return (
        <Text fontWeight="bold" fontSize={{base: "sm", sm: "lg"}} textAlign="center" position={customStyle?.position}
            top={customStyle?.top} left={customStyle?.left} lineHeight={customStyle?.whValue || "35px"}
            borderRadius="50px" color={customStyle?.color} height={customStyle?.whValue || "35px"}
            width={customStyle?.whValue|| "35px" } bg={customStyle?.bgColor || 'black'}  display="inline-block">
            {text}
        </Text>
    )
}
