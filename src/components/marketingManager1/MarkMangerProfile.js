import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './marketingManager1.module.css';
const MarkMangerProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <HStack alignItems={'flex-start'} pl="50px">
      <Box
        h={260}
        w={200}
        bg={'white'}
        borderBottomRadius={'8%'}
        display="flex"
        alignItems={'flex-end'}
        justifyContent="center"
        pb={2}
        mr={5}
      >
        <Image
          borderRadius={'18%'}
          boxSize="180px"
          src="/markManager.png"
          alt="Profile"
        />
      </Box>
      <VStack pt={20} w={'70%'}>
        <HStack alignItems={'flex-start'}>
          <HybridText
            value={resumeData?.profile?.firstName}
            placeholder="First Name"
            customclass={`fullName ${Style.name}`}
            path={'profile.firstName'}
          />
          &nbsp;
          <HybridText
            value={resumeData?.profile?.lastName}
            placeholder="Last Name"
            customclass={`fullName ${Style.name}`}
            path={'profile.lastName'}
          />
        </HStack>
        <Box h={0.5} w={'70%'} bg="white"></Box>
        <HybridText
          placeholder="Profession"
          customclass={`${Style.profession}`}
          path={'profile.profession'}
          value={resumeData?.profile?.profession}
        />
      </VStack>
    </HStack>
  );
};

export default MarkMangerProfile;
