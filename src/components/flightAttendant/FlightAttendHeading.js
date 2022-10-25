import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const FlightAttendHeading = ({ text }) => {
  return (
    <Box
      minW={'480px'}
      maxW={'480px'}
      background="#E0EFFA"
      h={'50px'}
      mt={'50px'}
      display="flex"
      alignItems={'center'}
      pl={5}
      mb={1}
    >
      <Text textTransform={'uppercase'} fontSize={17} fontWeight="700">
        {text}
      </Text>
    </Box>
  );
};

export default FlightAttendHeading;
