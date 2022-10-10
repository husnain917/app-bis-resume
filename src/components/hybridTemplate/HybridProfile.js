import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Style from './hybridStyle.module.css';
import HybridText from './HybridText';
import { BsPhoneFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Text } from '../template1';
const HybridProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <div>
      <HStack>
        <Box
          minH={150}
          maxW={150}
          minW={150}
          borderColor="#313C4E"
          borderWidth={4}
          borderRadius="full"
          ml={12}
        >
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
          </Box>
        </Box>
      </HStack>
      <HStack
        bg={'#313B47'}
        width="full"
        minH={'110px'}
        borderTopRightRadius={6}
        borderTopLeftRadius={6}
        mt={-10}
        alignItems="flex-start"
      >
        <Box maxW={'200px'} minW={'200px'}></Box>
        <Box maxW={'660px'} minW={'660px'} p={2}>
          <HybridText
            placeholder="Short and Engaging Pitch about Yourself"
            customclass={` ${Style.profileText}`}
            value={resumeData?.achievements?.items?.Description}
            path={`${path}.Description`}
          />
        </Box>
      </HStack>
      <Box
        bg={'#449399'}
        borderBottomRightRadius={6}
        borderBottomLeftRadius={6}
        w={'full'}
      >
        <HStack
          justifyContent="center"
          minH={'45px'}
          alignItems="center"
          maxW={'900px'}
        >
          <GrMail size={20} color="white" />
          <HybridText
            placeholder="E-mail"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.email}
            path={'profile.email'}
          />
          <BsPhoneFill size={20} color="white" />
          <HybridText
            placeholder="Phone"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.phone}
            path={'profile.phone'}
          />
          <MdLocationOn size={20} color="white" />
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

export default HybridProfile;
