import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './fashionTemp5.module.css';
import FashTemp5Heading1 from './FashTemp5Heading1';
const FashTemp5About = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <>
      <VStack>
        <HybridText
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          customclass={` ${Style.fashionName}`}
          path={'profile.firstName'}
        />
        <HybridText
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          customclass={` ${Style.fashionName}`}
          path={'profile.lastName'}
        />

        <HybridText
          placeholder="Profession"
          customclass={`${Style.ProfessionFashion} ${Style.mt}`}
          path={'profile.profession'}
          value={resumeData?.profile?.profession}
        />
      </VStack>
      <FashTemp5Heading1
        text={'ABOUT ME'}
        color={'black'}
        dividerColor="black"
        fontWeight={'800'}
        fontSize={25}
      />
      <HybridText
        placeholder="Short and Engaging Pitch about Yourself"
        customclass={` ${Style.aboutText}`}
        value={resumeData?.achievements?.items?.Description}
        path={`${path}.Description`}
      />
    </>
  );
};

export default FashTemp5About;
