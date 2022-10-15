import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import FashTemp4Heading from './FashTemp4Heading';
import Style from './fashionTemp4.module.css';
const FashTemp4About = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <HStack alignItems={'flex-start'} mt={10}>
      <FashTemp4Heading text={'ABOUT ME'} />

      <HybridText
        placeholder="Short and Engaging Pitch about Yourself"
        customclass={` ${Style.aboutText}`}
        value={resumeData?.achievements?.items?.Description}
        path={`${path}.Description`}
      />
    </HStack>
  );
};

export default FashTemp4About;
