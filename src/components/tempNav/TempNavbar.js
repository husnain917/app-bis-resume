import { Box, Button } from '@chakra-ui/react';
import React from 'react';

import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import LayoutModal from './LayoutModal';

export default function TempNavbar() {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      overflow={'auto'}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="#313C4E"
        w="50%"
        h="50px"
        pl={['100px', , '0px', , ,]}
        ml={['100px', , '0px']}
        borderRadius={['0px', '100px', '100px']}
        mt={['5%', '7%', '10%', ,]}
        minW="600px"
        maxW="600px"
        position={[, , 'fixed']}
        zIndex="999"
      >
        <Button
          bgColor="transparent"
          color="white"
          _hover={{
            backgroundColor: 'transparent',

            color: '#1C6672',
            transition: '0.4s',
          }}
        >
          <EditIcon mr="5px" />
          Fonts
        </Button>
        <Button
          bgColor="transparent"
          color="white"
          _hover={{
            backgroundColor: 'transparent',

            color: '#1C6672',
            transition: '0.4s',
          }}
        >
          <MoonIcon mr="5px" />
          Theme
        </Button>
        <LayoutModal />

        <Button
          bgColor="transparent"
          color="white"
          _hover={{
            backgroundColor: 'transparent',

            color: '#1C6672',
            transition: '0.4s',
          }}
        >
          <SettingsIcon mr="5px" />
          Setting
        </Button>
      </Box>
      {/* <Box w="20%" h="40px" bgColor="#313C4E" borderRadius="100px" mt="5px">
        <HamburgerIcon color="whiteAlpha.800" />
     
      </Box> */}
    </Box>
  );
}
