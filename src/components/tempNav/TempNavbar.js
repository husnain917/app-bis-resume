import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';

import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import LayoutModal from './LayoutModal';

export default function TempNavbar({
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  interest,
  certificate,
}) {
  return (
    <Box
      display="flex"
      h="50px"
      w="full"
      zIndex="999"
      pos="fixed"
      justifyContent={'center'}
    >
      <Image
        src="/bisResumelogo.svg"
        w={{ base: '180px', lg: '200px' }}
        h="auto"
        position={'absolute'}
        left="0px"
        top="0px"
        alt="Image not Found"
      />
      <Box
        w="500px"
        display="flex"
        bgColor="#006772"
        borderRadius={'100px'}
        justifyContent="center"
        alignSelf={'center'}
        py={1}
      >
        <Button
          bgColor="transparent"
          fontSize={{ base: '12px', sm: '14px', md: '16px' }}
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
          fontSize={{ base: '12px', sm: '14px', md: '16px' }}
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
        <LayoutModal
          work={work}
          education={education}
          references={references}
          skills={skills}
          languages={languages}
          projects={projects}
          organization={organization}
          interest={interest}
          certificate={certificate}
        />
        <Button
          bgColor="transparent"
          color="white"
          fontSize={{ base: '12px', sm: '14px', md: '16px' }}
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
