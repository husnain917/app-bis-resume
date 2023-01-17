import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeftRight } from "react-icons/bs";

const ChangeTempBtn = ({ onPress }) => {
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "130px", lg: "130px" }}
      mb={{ base: "20px", lg: "0px" }}
      left={"10px"}
      zIndex="999"
      onClick={onPress}
      cursor={'pointer'}
    >
      <Box
        bg={'#313b47'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
        color={'#fff'}
        p={'12px 8px'}
        borderRadius={6}
        _hover={{
          color: '#00c8aa',
          transition: '0.5s color'
        }}
      >
        <Text
          mb={'5px'}
        >
          <BsArrowLeftRight size={18} />
        </Text>
        <Text
          fontSize={'10px'}
          fontWeight={600}
        >
          Switch <br />
          Template
        </Text>
      </Box>
    </Box>

  );
};

export default ChangeTempBtn;
