import React from 'react'
import { Input, Image, Box, Text } from "@chakra-ui/react";

export default function SEText({title,desc,marginTop,textColor}) {
  return (
    <div>
        <Text fontWeight="bold" fontSize="1.5rem" pt="3%" mt={marginTop} color={textColor}>
        
{title}
          </Text> 
          <Text fontSize="0.9rem" pb="3%">
          {desc}
          </Text>
    </div>
  )
}
