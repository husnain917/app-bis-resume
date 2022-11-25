import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
const StudentHeading = ({ text }) => {
  return (
    <Box display={'flex'} alignItems="center" mb={'10px'} mt="30px">
      <FaChevronRight size={22} color="#6B9999" />

      <Text
        textTransform={'uppercase'}
        fontSize={18}
        fontWeight="bold"
        letterSpacing={'2px'}
        ml="10px"
      >
        {text}
      </Text>
    </Box>
  );
};

export default StudentHeading;
