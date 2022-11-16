import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const FashTemp4Heading = ({ text }) => {
  return (
    <div>
      <VStack alignItems={'flex-end'} mr={5} minW={'150px'} maxW={'150px'}>
        <Text
          fontSize={23}
          color="#643c28"
          fontWeight={'600'}
          letterSpacing={2}
        >
          {text}
        </Text>
        <Box h={1.5} w={'110px'} bg={'#643c28'}></Box>
      </VStack>
    </div>
  );
};

export default FashTemp4Heading;
