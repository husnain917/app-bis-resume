import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './markManager.module.css';
const MarkMangpersonal = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <Box minW={500} maxW={500}>
      <HStack mb={5} mt={12} alignItems="flex-start">
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
          customclass={`fullName ${Style.name} ${Style.lastName}`}
          path={'profile.lastName'}
        />
      </HStack>
      <HybridText
        placeholder="Profession"
        customclass={`${Style.ProfessionFashion} `}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
      <HybridText
        placeholder="Short and Engaging Pitch about Yourself"
        customclass={` ${Style.aboutText}`}
        value={resumeData?.achievements?.items?.Description}
        path={`${path}.Description`}
      />
    </Box>
  );
};

export default MarkMangpersonal;
