import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Style from './executive.module.css';

import { BsPhoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Text } from '../template1';
import HybridText from '../hybridTemplate/HybridText';
const ExecutiveProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <div>
      <HStack mb={5} alignItems="flex-start">
        <Box minH={150} maxW={150} minW={150} borderRadius="full" ml={12}>
          <Image
            borderRadius={'full'}
            boxSize="150px"
            src="/ProfilePic.jpg"
            alt="Profile"
          />
        </Box>
        <Box ml={10}>
          <HStack>
            <HybridText
              value={resumeData?.profile?.firstName}
              placeholder="First Name"
              customclass={`fullName ${Style.hybridName}`}
              path={'profile.firstName'}
            />
            &nbsp;
            <HybridText
              value={resumeData?.profile?.lastName}
              placeholder="Last Name"
              customclass={`fullName ${Style.hybridName}`}
              path={'profile.lastName'}
            />
          </HStack>
          <Box maxW={'750px'} pb={10} justifyContent={'center'} ml={1}>
            <HybridText
              placeholder="Profession"
              customclass={`${Style.ProfessionHybrid}`}
              path={'profile.profession'}
              value={resumeData?.profile?.profession}
            />
            <HybridText
              placeholder="Short and Engaging Pitch about Yourself"
              customclass={` ${Style.profileText}`}
              value={resumeData?.achievements?.items?.Description}
              path={`${path}.Description`}
            />
          </Box>
        </Box>
      </HStack>

      <Box bg={'blackAlpha.200'} borderRadius={6} w={'full'}>
        <HStack
          justifyContent="center"
          minH={'45px'}
          alignItems="center"
          maxW={'900px'}
        >
          <GrMail size={20} color="#313B47" />
          <HybridText
            placeholder="E-mail"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.email}
            path={'profile.email'}
          />
          <BsPhoneFill size={20} color="#313B47" />
          <HybridText
            placeholder="Phone"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.phone}
            path={'profile.phone'}
          />
          <MdLocationOn size={20} color="#313B47" />
          <HybridText
            placeholder="Location"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.address?.city}
            path={'profile.address.city'}
          />
        </HStack>
      </Box>
    </div>
  );
};

export default ExecutiveProfile;
