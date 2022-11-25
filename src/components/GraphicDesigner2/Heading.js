import React from 'react';
import {Text, Box} from "@chakra-ui/react";

export default function Heading({title,color,barColor,barWidth,marginTop }) {
  return (
    <div>
        <Text color={color} fontSize="1.8rem" fontWeight="bold" mt={marginTop}> 
{title}
        </Text>
        <Box bgColor={barColor} h="4px" w={barWidth}>        </Box>
    </div>
  )
}
