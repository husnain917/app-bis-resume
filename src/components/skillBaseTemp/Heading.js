import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Heading({title,color,}) {
  return (
    <div>
        <Text fontSize="1.5rem" fontWeight="bold" color={color} ml="15px" textTransform="uppercase">
         {title}
        </Text>
    </div>
  )
}
