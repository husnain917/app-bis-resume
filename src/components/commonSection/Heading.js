import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export default function Heading({
  title,
  headBg,
  color,
  fontSize,
  fontWeight,
  pb,
  pl,
  letterSpacing,
  icon,
  minW,
  maxW,
}) {
  return (
    <>
      <HStack minW={minW} maxW={maxW} bg={headBg} h={35} mt={5} pl={2}>
        {React.createElement(icon)}
        <Text
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          pb={pb}
          pl={pl}
          letterSpacing={letterSpacing}
        >
          {title}
        </Text>
      </HStack>
    </>
  );
}
