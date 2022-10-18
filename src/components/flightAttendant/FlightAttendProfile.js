import { Box, Circle, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import Style from './flightAttendant.module.css';
const FlightAttendProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const data = [
    {
      icon: <FaLinkedinIn color="#2A78AB" />,
      placeholder: 'Linkedin',
      value: `${resumeData?.profile?.linkedinURL}`,
      path: 'linkedinURL',
    },
    {
      icon: <MdEmail color="#2A78AB" />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#2A78AB" />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
    {
      icon: <TbWorld color="#2A78AB" />,
      placeholder: 'Website',
      value: `${resumeData?.profile?.website}`,
      path: 'website',
    },
  ];
  return (
    <VStack
      justifyContent="flex-start"
      alignItems={'flex-start'}
      minW={'340px'}
      maxW={'340px'}
    >
      <Box
        maxW={250}
        minW={250}
        borderRadius="full"
        mt={2}
        mb={3}
        justifyContent="center"
      >
        <Image
          borderRadius={'full'}
          boxSize="240px"
          src="/profileDigi.png"
          alt="Profile"
        />
      </Box>

      <HStack minW={'280px'} maxW={'280px'} alignItems="flex-start">
        <HybridText
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          customclass={` ${Style.name} `}
          path={'profile.firstName'}
        />
        <HybridText
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          customclass={` ${Style.name} `}
          path={'profile.lastName'}
        />
      </HStack>

      <HybridText
        placeholder="Profession"
        customclass={`${Style.profession} `}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
      <Box> </Box>
      {data.map((item, index) => (
        <>
          <HStack key={index} alignItems="flex-start" pt={1}>
            <Circle size={'25px'} bg={'white'}>
              {item.icon}
            </Circle>
            <HybridText
              placeholder={item.placeholder}
              customclass={` ${Style.profileText}`}
              value={item.value}
              path={`profile.${item.path}`}
            />
          </HStack>
        </>
      ))}
    </VStack>
  );
};

export default FlightAttendProfile;
