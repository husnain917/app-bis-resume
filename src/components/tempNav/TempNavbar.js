import { Box, Button, Circle, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';

import {
  MoonIcon,
  EditIcon,
  SettingsIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import LayoutModal from './LayoutModal';
import { useState } from 'react';
import { MobileNavItem } from '../navbar/Navbar';
import { NAV_ITEMS } from '../constant/navbarLinks/NavbarLinks';

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
  const [showNav, setShowNav] = useState(false);
  return (
    <Box
      display={'flex'}
      h="50px"
      minW={{ base: '1000px', md: '95vw' }}
      zIndex="999"
      pos="relative"
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

      <Box position={'absolute'} right={'15px'}>
        {showNav ? (
          <Box
            px={4}
            bg="white"
            minW="300px"
            maxW={'300px'}
            position="relative"
            pb={5}
            pt={'50px'}
          >
            <Box
              display={'flex'}
              flexDir="column"
              cursor={'pointer'}
              h={'39px'}
              position="absolute"
              top={'10px'}
              right="10px"
            >
              <Icon
                as={SlArrowDown}
                w={5}
                h={5}
                mb="-5px"
                _hover={{
                  marginBottom: '-0px',
                  transition: 'all .3s  ease-out',
                }}
                onClick={() => setShowNav(false)}
              />
              <Icon
                as={SlArrowUp}
                w={5}
                h={5}
                mt="-5px"
                _hover={{
                  marginTop: '-0px',
                  transition: 'all .3s  ease-out',
                }}
                onClick={() => setShowNav(false)}
              />
            </Box>
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <Box w="full" bg="gray" h="1px" mb="10px"></Box>
            <Text
              fontSize={'16px'}
              _hover={{
                color: '#00c8aa',
                transition: 'all .2s  ease-in',
              }}
              cursor="pointer"
            >
              Sign Out
            </Text>
            <Box display={'flex'} justifyContent="space-evenly" mt="20px">
              <Circle
                size={'35px'}
                bg={'#313C4E'}
                _hover={{
                  bg: ' #002D6C',
                  transition: 'background .1s ease-out',
                }}
              >
                <FaFacebookF color="#fff" size={'20px'} />
              </Circle>

              <Circle
                size={'35px'}
                bg={'#313C4E'}
                _hover={{
                  bg: '#0073b1',
                  transition: 'background .1s ease-out',
                }}
              >
                <FaLinkedinIn color="#fff" size={'20px'} />
              </Circle>
              <Circle
                size={'35px'}
                bg={'#313C4E'}
                _hover={{
                  bg: '#0073b1',
                  transition: 'background .1s ease-out',
                }}
              >
                <FaTwitter color="#fff" size={'20px'} />
              </Circle>
              <Circle
                size={'35px'}
                bg={'#313C4E'}
                _hover={{
                  bg: '#cf4848',
                  transition: 'background .3s ease-out',
                }}
              >
                <FaInstagram color="#fff" size={'20px'} />
              </Circle>
            </Box>
          </Box>
        ) : (
          <Icon
            as={HamburgerIcon}
            onClick={() => setShowNav(true)}
            h="30px"
            w="30px"
            cursor="pointer"
          />
        )}
      </Box>
      {/* <Box w="20%" h="40px" bgColor="#313C4E" borderRadius="100px" mt="5px">
        <HamburgerIcon color="whiteAlpha.800" />
     
      </Box> */}
    </Box>
  );
}
